import { motion } from 'framer-motion';

export default function TypingIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex items-start gap-3 px-5 sm:px-6 pb-2"
        >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700
                flex items-center justify-center flex-shrink-0
                shadow-md shadow-emerald-500/10 ring-1 ring-emerald-400/20
                hidden sm:flex">
                <span className="text-white text-[10px] font-extrabold">AI</span>
            </div>
            <div className="glass-light rounded-2xl rounded-tl-md px-5 py-4 flex items-center gap-2">
                <div className="typing-dot w-2 h-2 rounded-full bg-emerald-400" />
                <div className="typing-dot w-2 h-2 rounded-full bg-emerald-400" />
                <div className="typing-dot w-2 h-2 rounded-full bg-emerald-400" />
            </div>
        </motion.div>
    );
}
