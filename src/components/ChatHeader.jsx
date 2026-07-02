import { motion } from 'framer-motion';
import { Minus, X, Scale } from 'lucide-react';

export default function ChatHeader({ onClose }) {
    return (
        <div className="relative flex items-center justify-between flex-shrink-0
            px-6 py-5 sm:px-7 sm:py-6
            border-b border-white/[0.06]
            bg-gradient-to-r from-indigo-950/40 via-transparent to-purple-950/30">

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600
                        flex items-center justify-center
                        shadow-lg shadow-indigo-500/25
                        ring-2 ring-indigo-400/15">
                        <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full
                        bg-emerald-400 border-[2.5px] border-slate-950 online-dot" />
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                    <h3 className="text-[15px] sm:text-base font-bold text-white tracking-tight leading-tight truncate">
                        Pakistani Legal AI
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 online-dot" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="text-[11px] sm:text-xs text-emerald-400/90 font-medium">
                            Online — Ready to assist
                        </span>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.88 }}
                    onClick={onClose}
                    className="w-10 h-10 rounded-xl flex items-center justify-center
                        text-slate-500 hover:text-slate-200 hover:bg-white/[0.08]
                        transition-all duration-200 cursor-pointer"
                    aria-label="Minimize"
                >
                    <Minus className="w-4 h-4" strokeWidth={2.5} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.88 }}
                    onClick={onClose}
                    className="w-10 h-10 rounded-xl flex items-center justify-center
                        text-slate-500 hover:text-red-400 hover:bg-red-500/[0.08]
                        transition-all duration-200 cursor-pointer"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" strokeWidth={2.5} />
                </motion.button>
            </div>
        </div>
    );
}
