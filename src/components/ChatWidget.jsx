import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const WEBHOOK_URL =
    "https://n8n.botpos.net/webhook/cb205663-ca47-441a-be6e-67817c4908ea";
let messageId = 0;

const createMessage = (role, content) => ({
    id: ++messageId,
    role,
    content,
    timestamp: new Date(),
});

export default function ChatWidget({
    isOpen: controlledIsOpen,
    setIsOpen: controlledSetIsOpen,
    externalTriggerText,
    clearExternalTrigger
} = {}) {
    const [localIsOpen, setLocalIsOpen] = useState(false);
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : localIsOpen;
    const setIsOpen = controlledSetIsOpen !== undefined ? controlledSetIsOpen : setLocalIsOpen;

    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [unread, setUnread] = useState(1);

    const sendMessage = useCallback(async (text) => {
        const userMsg = createMessage('user', text);
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        try {
            const res = await fetch("https://n8n.botpos.net/webhook/cb205663-ca47-441a-be6e-67817c4908ea", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatInput: text
                }),
            });

            const data = await res.json();

            const reply =
                data.output ||
                data.text ||
                data.reply ||
                data.message ||
                "No response received";

            const aiMsg = createMessage('ai', reply);
            setMessages(prev => [...prev, aiMsg]);

        } catch (err) {
            console.error("Webhook error:", err);

            const errMsg = createMessage(
                'ai',
                'Connection failed. Check webhook or n8n workflow.'
            );

            setMessages(prev => [...prev, errMsg]);
        } finally {
            setIsTyping(false);
        }
    }, []);

    // Clear unread when open
    useEffect(() => {
        if (isOpen) {
            setUnread(0);
        }
    }, [isOpen]);

    // Handle external triggers from landing page CTAs
    useEffect(() => {
        if (externalTriggerText) {
            setIsOpen(true);
            sendMessage(externalTriggerText);
            if (clearExternalTrigger) {
                clearExternalTrigger();
            }
        }
    }, [externalTriggerText, sendMessage, clearExternalTrigger, setIsOpen]);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            {/* Backdrop overlay for mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 sm:hidden"
                        onClick={toggleOpen}
                    />
                )}
            </AnimatePresence>

            {/* Widget container */}
            <div className="fixed z-50 bottom-0 right-0 sm:bottom-7 sm:right-7 md:bottom-8 md:right-8 flex flex-col items-end">

                {/* Chat Window */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            className="chat-container glass overflow-hidden flex flex-col"
                        >
                            <ChatHeader onClose={toggleOpen} />
                            <ChatMessages
                                messages={messages}
                                isTyping={isTyping}
                                onSuggestionSelect={sendMessage}
                            />
                            <ChatInput onSend={sendMessage} isLoading={isTyping} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Action Button */}
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={toggleOpen}
                    className={`relative w-16 h-16 sm:w-[60px] sm:h-[60px] rounded-full
                        flex items-center justify-center cursor-pointer
                        bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 text-white
                        shadow-2xl shadow-indigo-500/30 transition-all duration-300
                        m-5 sm:m-0 sm:mt-4
                        ${isOpen ? 'hidden sm:flex' : ''}
                        ${!isOpen ? 'pulse-glow' : 'shadow-lg shadow-indigo-500/20'}`}
                    aria-label="Toggle chat"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close-icon"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat-icon"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" strokeWidth={2} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Notification Badge */}
                    <AnimatePresence>
                        {!isOpen && unread > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-red-500
                                    text-white text-[10px] font-bold flex items-center justify-center
                                    badge-pop shadow-lg shadow-red-500/40 ring-2 ring-slate-950"
                            >
                                {unread}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </>
    );
}