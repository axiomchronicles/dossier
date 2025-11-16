"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy as HiTrophy } from "react-icons/fa6";
import Image from 'next/image';
import { config } from '@/config';
import AchievementLightbox from './AchievementLightbox';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const AchievementCard = ({ achievement, index, onCardClick }) => {
    return (
        <>
            <motion.div
                variants={itemAnimation}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group h-full cursor-pointer relative"
                onClick={() => onCardClick(achievement)}
            >
                {/* Gradient background with blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/2 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/20 hover:border-[#FF006E]/50 p-6 transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-lg hover:shadow-2xl hover:shadow-[#FF006E]/20">
                    
                    {/* Animated gradient overlay on hover */}
                    <motion.div 
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/15 via-transparent to-[#00D9FF]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                    />
                    
                    {/* Image */}
                    {achievement.image && (
                        <motion.div 
                          whileHover={{ scale: 1.08 }}
                          className="relative w-full h-44 mb-5 rounded-xl overflow-hidden flex-shrink-0 border border-white/20 group-hover:border-[#FF006E]/40"
                        >
                            <Image
                                src={achievement.image}
                                alt={achievement.title}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-115 brightness-75 group-hover:brightness-100"
                            />
                            {/* Image overlay for depth */}
                            <motion.div 
                              animate={{ opacity: [0.3, 0.5, 0.3] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            />
                        </motion.div>
                    )}

                    {/* Content */}
                    <div className="relative flex-grow flex flex-col gap-3 z-10">
                        {/* Title */}
                        <h3 className="font-bold text-base md:text-lg bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent line-clamp-2 leading-tight group-hover:to-[#00D9FF] transition-all duration-300">
                            {achievement.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-white/60 flex-grow line-clamp-3 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                            {achievement.description}
                        </p>

                        {/* Tags */}
                        {achievement.tags && achievement.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {achievement.tags.map((tag, idx) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-xs bg-gradient-to-r from-[#FF006E]/25 to-[#FF006E]/15 text-[#FF006E]/95 px-3 py-1.5 rounded-full border border-[#FF006E]/40 hover:border-[#FF006E]/70 transition-all duration-200 font-medium cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        )}

                        {/* Year/Divider */}
                        {achievement.year && (
                            <div className="pt-3 mt-auto border-t border-white/10 group-hover:border-white/20 transition-colors">
                                <span className="text-xs text-[#00D9FF]/70 font-semibold tracking-wide group-hover:text-[#00D9FF] transition-colors">
                                    {achievement.year}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const achievements = config.achievements || [];

    if (achievements.length === 0) {
        return null;
    }

    return (
        <>
            <section className="py-24 relative overflow-hidden" id="achievements">
                {/* Background gradient elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <motion.div
                                variants={itemAnimation}
                                className="inline-flex items-center space-x-2 bg-white/5 border-[1.8px] border-white/10 px-4 py-2 rounded-full text-white/70 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default"
                            >
                                <HiTrophy className="w-5 h-5 text-white/50" />
                                <span className="text-sm font-medium text-white/70">
                                    Notable Achievements
                                </span>
                            </motion.div>

                            <motion.div variants={itemAnimation} className="space-y-3">
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    My <span className="text-[#FF006E]">Achievements</span>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Deep Learning and AI research achievements with multiple hackathon wins. Specializing in neural networks, computer vision, NLP, and innovative AI solutions across national platforms. Click any card to view details.
                                </p>
                            </motion.div>

                            {/* Achievement Stats */}
                            <motion.div
                                variants={itemAnimation}
                                className="grid grid-cols-3 gap-4 pt-6"
                            >
                                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="p-4 rounded-2xl bg-gradient-to-br from-[#FF006E]/15 via-[#FF006E]/5 to-[#FF006E]/5 border border-[#FF006E]/30 hover:border-[#FF006E]/60 backdrop-blur-md shadow-lg hover:shadow-[#FF006E]/20">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FF006E] to-[#FF4D7D] bg-clip-text text-transparent">{achievements.length}</div>
                                    <div className="text-xs text-white/60 mt-1 font-medium">Major Wins</div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="p-4 rounded-2xl bg-gradient-to-br from-[#00D9FF]/15 via-[#00D9FF]/5 to-[#00D9FF]/5 border border-[#00D9FF]/30 hover:border-[#00D9FF]/60 backdrop-blur-md shadow-lg hover:shadow-[#00D9FF]/20">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#00F0FF] bg-clip-text text-transparent">4</div>
                                    <div className="text-xs text-white/60 mt-1 font-medium">Months Period</div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-orange-500/5 border border-amber-500/30 hover:border-amber-500/60 backdrop-blur-md shadow-lg hover:shadow-amber-500/20">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">100%</div>
                                    <div className="text-xs text-white/60 mt-1 font-medium">Podium Rate</div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Achievements Grid */}
                        <motion.div
                            variants={containerAnimation}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {achievements.map((achievement, idx) => (
                                <AchievementCard
                                    key={achievement.id}
                                    achievement={achievement}
                                    index={idx}
                                    onCardClick={setSelectedAchievement}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AchievementLightbox
                achievement={selectedAchievement}
                isOpen={!!selectedAchievement}
                onClose={() => setSelectedAchievement(null)}
            />
        </>
    );
};

export default Achievements;
