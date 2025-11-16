"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { config } from '@/config';

const SkillsTicker = () => {
    // Flatten all skills from all categories
    const allSkills = config.skills.flatMap(category => category.skills);
    
    // Create a duplicated array for seamless loop
    const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

    return (
        <section className="py-24 relative overflow-hidden" id="skills-ticker">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-1/3 w-96 h-96 bg-[#00D9FF]/8 rounded-full blur-3xl" 
                />
                <motion.div 
                  animate={{ y: [0, 20, 0] }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF006E]/8 rounded-full blur-3xl" 
                />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Skills &<span className="text-[#FF006E]"> Technologies</span>
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            My comprehensive expertise across modern web technologies, AI/ML, and cloud infrastructure.
                        </p>
                    </motion.div>
                </div>

                {/* Ticker Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient overlays on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />

                    {/* Ticker Track */}
                    <motion.div
                        animate={{ x: [-1000, -3000] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="flex gap-8"
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.3, y: -20 }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                                className="flex-shrink-0 group relative"
                            >
                                <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl border border-white/10 hover:border-[#00D9FF]/70 bg-gradient-to-br from-white/12 via-white/6 to-white/2 hover:from-white/20 hover:to-white/12 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(0,217,255,0.5)]">
                                    {/* Animated gradient border */}
                                    <motion.div 
                                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />

                                    {/* Skill Icon with glow */}
                                    {skill.svgIcon && (
                                        <div className="relative z-10 h-8 w-8 flex items-center justify-center group-hover:filter group-hover:drop-shadow-[0_0_20px_rgba(0,217,255,1)]">
                                            <Image
                                                src={skill.svgIcon}
                                                alt={skill.name}
                                                width={32}
                                                height={32}
                                                className="object-contain drop-shadow-lg transition-all duration-300"
                                            />
                                        </div>
                                    )}

                                    {/* Tooltip on hover with enhanced styling */}
                                    <motion.div 
                                      initial={{ opacity: 0, y: 10 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[#00D9FF]/30 to-[#FF006E]/30 backdrop-blur-xl text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/20 shadow-xl font-semibold"
                                    >
                                        {skill.name}
                                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-[#00D9FF]/30 to-[#FF006E]/30 rotate-45 border-r border-b border-white/20" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Skills Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-4 rounded-2xl bg-gradient-to-br from-[#FF006E]/15 via-[#FF006E]/5 to-[#FF006E]/5 border border-[#FF006E]/30 hover:border-[#FF006E]/60 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[#FF006E]/20"
                    >
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#FF006E] to-[#FF4D7D] bg-clip-text text-transparent">{allSkills.length}</div>
                        <div className="text-xs text-white/60 mt-1 font-medium">Total Skills</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-4 rounded-2xl bg-gradient-to-br from-[#00D9FF]/15 via-[#00D9FF]/5 to-[#00D9FF]/5 border border-[#00D9FF]/30 hover:border-[#00D9FF]/60 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[#00D9FF]/20"
                    >
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#00F0FF] bg-clip-text text-transparent">{config.skills.length}</div>
                        <div className="text-xs text-white/60 mt-1 font-medium">Categories</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-orange-500/5 border border-amber-500/30 hover:border-amber-500/60 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
                    >
                        <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                            {Math.round(allSkills.filter(s => s.level === 'Expert').length / allSkills.length * 100)}%
                        </div>
                        <div className="text-xs text-white/60 mt-1 font-medium">Expert Level</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsTicker;
