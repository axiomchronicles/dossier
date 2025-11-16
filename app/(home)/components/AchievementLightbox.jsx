"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiXMark } from 'react-icons/hi2';

const AchievementLightbox = ({ achievement, isOpen, onClose }) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-white/20 via-white/12 to-white/8 border border-white/30 backdrop-blur-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Animated gradient background inside modal */}
                            <motion.div
                              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                              transition={{ duration: 8, repeat: Infinity }}
                              className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 via-transparent to-[#FF006E]/10 opacity-0 group-hover:opacity-100"
                              style={{ backgroundPosition: '0% 0%' }}
                            />
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-[#FF006E]/30 border border-white/20 hover:border-[#FF006E]/50 transition-all duration-300 text-white"
                            >
                                <HiXMark className="w-6 h-6" />
                            </motion.button>

                            <div className="p-8 space-y-6">
                                {/* Image */}
                                {achievement.image && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="relative w-full h-96 rounded-2xl overflow-hidden border border-white/20"
                                    >
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </motion.div>
                                )}

                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-2"
                                >
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF006E] via-[#FF006E] to-[#FF4D7D] bg-clip-text text-transparent">
                                        {achievement.title}
                                    </h2>
                                    <p className="text-sm text-[#00D9FF] font-semibold tracking-wide">
                                        {achievement.year}
                                    </p>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-white/70 text-lg leading-relaxed font-light">
                                        {achievement.description}
                                    </p>
                                </motion.div>

                                {/* Tags */}
                                {achievement.tags && achievement.tags.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-wrap gap-3 pt-4"
                                    >
                                        {achievement.tags.map((tag, index) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + index * 0.05 }}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#FF006E]/20 to-[#FF006E]/10 text-[#FF006E]/90 border border-[#FF006E]/30 hover:border-[#FF006E]/70 transition-all duration-200"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Stats if available */}
                                {achievement.stats && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10"
                                    >
                                        {achievement.stats.map((stat, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <p className="text-white/50 text-sm">{stat.label}</p>
                                                <p className="text-2xl font-bold text-[#00D9FF]">{stat.value}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Additional content */}
                                {achievement.details && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="pt-6 border-t border-white/10 space-y-4"
                                    >
                                        <h3 className="text-xl font-semibold text-white">Details</h3>
                                        <p className="text-white/60 leading-relaxed">
                                            {achievement.details}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AchievementLightbox;
