import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import TypingIndicator from './TypingIndicator';
import SuggestedQuestions from './SuggestedQuestions';

function formatTime(date) {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function MessageBubble({ message }) {
    const isUser = message.role === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className={`flex items-end gap-3 px-5 sm:px-6 ${isUser ? 'justify-end' : 'justify-start'}`}
        >
            {/* AI avatar — desktop only */}
            {!isUser && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center flex-shrink-0
                    shadow-md shadow-indigo-500/20 ring-1 ring-indigo-400/20
                    hidden sm:flex">
                    <span className="text-white text-[10px] font-extrabold">AI</span>
                </div>
            )}

            <div className={`max-w-[82%] sm:max-w-[76%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                <div
                    className={`px-4 py-3.5 sm:px-5 sm:py-3.5 text-[14px] sm:text-[13.5px] leading-relaxed ${isUser
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl rounded-br-md shadow-md shadow-indigo-500/15'
                        : 'glass-light text-slate-200 rounded-2xl rounded-tl-md'
                        }`}
                >
                    {isUser ? (
                        <p className="leading-relaxed">{message.content}</p>
                    ) : (
                        <div className="ai-markdown">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                        </div>
                    )}
                </div>
                <span className="text-[10px] text-slate-600 mt-2 px-2 select-none">
                    {formatTime(message.timestamp)}
                </span>
            </div>

            {/* User avatar — desktop only */}
            {isUser && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700
                    flex items-center justify-center flex-shrink-0
                    ring-1 ring-slate-500/20
                    hidden sm:flex">
                    <span className="text-white text-[10px] font-extrabold">U</span>
                </div>
            )}
        </motion.div>
    );
}

export default function ChatMessages({ messages, isTyping, onSuggestionSelect }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="flex-1 min-h-0 overflow-y-auto chat-scrollbar py-6 sm:py-7 space-y-5 sm:space-y-6">
            {/* Welcome + suggestions when empty */}
            {messages.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-col items-center px-7 sm:px-10 pt-6 sm:pt-10 pb-4"
                >
                    {/* Floating animated icon */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600
                            flex items-center justify-center mb-7
                            shadow-xl shadow-indigo-500/30
                            ring-2 ring-indigo-400/15"
                    >
                        <span className="text-3xl">⚖️</span>
                    </motion.div>

                    <h4 className="text-white font-bold text-lg sm:text-xl mb-3 tracking-tight text-center">
                        Legal AI Assistant
                    </h4>
                    <p className="text-slate-400 text-[13px] sm:text-sm text-center leading-relaxed mb-8 sm:mb-10 max-w-[300px]">
                        Ask me anything about Pakistani law — criminal, civil, cyber, or constitutional.
                    </p>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-7 sm:mb-8" />

                    <SuggestedQuestions onSelect={onSuggestionSelect} />
                </motion.div>
            )}

            {/* Messages */}
            <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
                {isTyping && <TypingIndicator />}
            </AnimatePresence>

            <div ref={bottomRef} />
        </div>
    );
}
