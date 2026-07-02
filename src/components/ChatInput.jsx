import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal, Loader2 } from 'lucide-react';

export default function ChatInput({ onSend, isLoading }) {
    const [text, setText] = useState('');

    const handleSend = () => {
        const trimmed = text.trim();
        if (!trimmed || isLoading) return;
        onSend(trimmed);
        setText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex-shrink-0 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4
            border-t border-white/[0.06]
            bg-gradient-to-t from-black/20 to-transparent
            chat-safe-bottom">

            <div className="flex items-center gap-3 glass-input rounded-xl px-5 py-3 sm:px-6 sm:py-3">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isLoading ? "Thinking..." : "Ask a legal question..."}
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-[15px] sm:text-[14px] text-white
                        placeholder-slate-500 outline-none
                        py-2.5 sm:py-2
                        disabled:opacity-40 font-medium min-w-0"
                />
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.88 }}
                    onClick={handleSend}
                    disabled={!text.trim() || isLoading}
                    className={`w-11 h-11 sm:w-10 sm:h-10 rounded-lg
                        flex items-center justify-center flex-shrink-0
                        transition-all duration-300 cursor-pointer
                        ${text.trim() && !isLoading
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white send-glow shadow-lg shadow-indigo-500/25'
                            : 'bg-white/[0.06] text-slate-600'
                        }
                        disabled:cursor-not-allowed disabled:opacity-50`}
                    aria-label="Send message"
                >
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <SendHorizonal className="w-5 h-5" />
                    )}
                </motion.button>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium text-center mt-3.5 px-2">
                AI can make mistakes. Verify legal advice with a professional.
            </p>
        </div>
    );
}
