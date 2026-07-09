import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const suggestions = [
    "Explain PPC section 302",
    "Punishment for theft in Pakistan",
    "Cybercrime laws in Pakistan",
];

export default function SuggestedQuestions({ onSelect }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
        >
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0
                    ring-1 ring-emerald-500/10">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    Try asking
                </span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-3.5">
                {suggestions.map((q, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                        whileHover={{ scale: 1.01, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(q)}
                        className="group text-left glass-light rounded-xl
                            px-5 py-4 sm:px-6 sm:py-5
                            text-[13px] sm:text-sm text-slate-300 leading-relaxed
                            hover:text-white hover:border-emerald-500/25
                            active:bg-emerald-500/10
                            transition-all duration-200 cursor-pointer
                            border border-transparent
                            hover:bg-emerald-500/[0.04]
                            flex items-center justify-between gap-5"
                    >
                        <span className="leading-relaxed">{q}</span>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400
                            transition-all duration-200 flex-shrink-0
                            opacity-40 sm:opacity-0 group-hover:opacity-100
                            -translate-x-1 group-hover:translate-x-0" />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}
