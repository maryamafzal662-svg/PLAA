import { motion } from 'framer-motion';
import { Minus, X, Scale, Menu } from 'lucide-react';

export default function ChatHeader({ onClose, onMenuClick, showActions = false }) {
    return (
        <div className="relative flex items-center justify-between flex-shrink-0
            px-5 py-4 sm:px-6 sm:py-4.5
            border-b border-emerald-500/[0.05]
            bg-gradient-to-r from-emerald-950/20 via-transparent to-emerald-950/20">

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

            <div className="flex items-center gap-3">
                {/* Hamburger Menu button — mobile only */}
                {onMenuClick && (
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                )}

                {/* Avatar */}
                <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700
                        flex items-center justify-center
                        shadow-md shadow-emerald-500/25
                        ring-1 ring-emerald-400/15">
                        <Scale className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full
                        bg-emerald-400 border-[2px] border-slate-950 online-dot" />
                </div>

                <div className="flex flex-col gap-0.5 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight truncate">
                        Pakistan Legal Assistant
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 online-dot" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="text-[10px] text-emerald-400/90 font-medium">
                            Online — AI Powered
                        </span>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            {showActions && (
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        onClick={onClose}
                        className="w-9 h-9 rounded-xl flex items-center justify-center
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
                        className="w-9 h-9 rounded-xl flex items-center justify-center
                            text-slate-500 hover:text-red-400 hover:bg-red-500/[0.08]
                            transition-all duration-200 cursor-pointer"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" strokeWidth={2.5} />
                    </motion.button>
                </div>
            )}
        </div>
    );
}
