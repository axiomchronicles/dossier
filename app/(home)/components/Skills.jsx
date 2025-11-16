"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { config } from '@/config';

const getLevelPercentage = (level) => {
    switch (level) {
        case 'Expert': return 95;
        case 'Advanced': return 85;
        case 'Intermediate': return 70;
        case 'Beginner': return 50;
        default: return 75;
    }
};

const getLevelColor = (level) => {
    switch (level) {
        case 'Expert': return 'from-amber-500 to-yellow-500';
        case 'Advanced': return 'from-blue-500 to-cyan-500';
        case 'Intermediate': return 'from-emerald-500 to-green-500';
        case 'Beginner': return 'from-slate-500 to-slate-400';
        default: return 'from-primary to-primary';
    }
};

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
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

const SkillCard = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    const levelPercentage = getLevelPercentage(skill.level);
    const levelColor = getLevelColor(skill.level);

    return (
        <motion.div
            variants={itemAnimation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <div className="relative h-full p-6 rounded-2xl border border-secondary/20 hover:border-secondary/50 bg-gradient-to-br from-secondary/8 via-secondary/5 to-secondary/8 hover:from-secondary/15 hover:via-secondary/10 hover:to-secondary/12 transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10">
                {/* Animated gradient glow on hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none rounded-2xl"
                    animate={{
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />

                <div className="relative">
                    {/* Icon with animation */}
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.15 : 1,
                            y: isHovered ? -4 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="mb-3 h-6 w-6 flex items-center justify-center"
                    >
                        {skill.svgIcon && (
                            <Image
                                src={skill.svgIcon}
                                alt={skill.name}
                                width={24}
                                height={24}
                                className="object-contain drop-shadow-lg"
                            />
                        )}
                    </motion.div>

                    {/* Header with name and hot badge */}
                    <div className="flex items-center justify-between mb-4 gap-2">
                        <h3 className="text-base font-bold text-primary group-hover:text-white transition-colors line-clamp-2">
                            {skill.name}
                        </h3>
                        {skill.hot && (
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.1 : 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 text-xs whitespace-nowrap">
                                    <HiSparkles className="w-3 h-3 mr-1" />
                                    Hot
                                </Badge>
                            </motion.div>
                        )}
                    </div>

                    {/* Proficiency level display */}
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Proficiency</span>
                        <span className={cn("text-xs font-bold bg-gradient-to-r px-2.5 py-1.5 rounded-full text-white", levelColor)}>
                            {skill.level}
                        </span>
                    </div>

                    {/* Animated progress bar */}
                    <div className="relative h-2.5 bg-secondary/30 rounded-full overflow-hidden mb-2">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${levelPercentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className={cn("h-full bg-gradient-to-r rounded-full shadow-lg", levelColor)}
                        />
                    </div>

                    {/* Percentage text */}
                    <div className="text-right">
                        <span className="text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors">
                            {levelPercentage}%
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CategorySection = ({ category, index }) => {
    const categoryColors = [
        'from-purple-500 to-pink-500',
        'from-emerald-500 to-teal-500',
        'from-orange-500 to-red-500'
    ];
    const gradientColor = categoryColors[index % categoryColors.length];

    return (
        <motion.div
            variants={itemAnimation}
            className="space-y-10"
        >
            {/* Category header with enhanced styling */}
            <div className="relative">
                <div className="flex items-start gap-6">
                    {/* Icon with gradient background */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={cn("p-4 rounded-2xl flex-shrink-0 backdrop-blur-sm", category.bgClass)}
                    >
                        <div className={cn("w-7 h-7", category.iconClass)}>
                            {category.icon}
                        </div>
                    </motion.div>

                    {/* Title and description */}
                    <div className="flex-1 pt-1">
                        <h3 className={cn("text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent", gradientColor)}>
                            {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            {category.description}
                        </p>
                    </div>
                </div>

                {/* Decorative line */}
                <div className="absolute -bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Skills grid with responsive layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {category.skills.map((skill, idx) => (
                    <SkillCard
                        key={idx}
                        skill={skill}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    const skills = config.skills;

    return (
        <section className="py-24 relative overflow-hidden" id="skills">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-20"
                >
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300 cursor-default"
                        >
                            <motion.div
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            >
                                <HiChip className="w-5 h-5 text-primary" />
                            </motion.div>
                            <span className="text-sm font-medium text-primary">
                                Skills & Technologies
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-3">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-emerald-400 bg-clip-text text-transparent">
                                Technical Proficiency
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                My comprehensive expertise across modern web technologies, AI/ML, cloud infrastructure, and developer tools. Each skill is rated based on real-world experience and project impact.
                            </p>
                        </motion.div>

                        {/* Skills Summary Stats */}
                        <motion.div
                            variants={itemAnimation}
                            className="grid grid-cols-3 gap-4 pt-6"
                        >
                            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                                <div className="text-2xl font-bold text-purple-400">
                                    {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">Total Skills</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                                <div className="text-2xl font-bold text-blue-400">{skills.length}</div>
                                <div className="text-xs text-muted-foreground mt-1">Categories</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                                <div className="text-2xl font-bold text-amber-400">
                                    {Math.round(skills.reduce((acc, cat) => acc + cat.skills.filter(s => s.level === 'Expert').length, 0) / skills.reduce((acc, cat) => acc + cat.skills.length, 0) * 100)}%
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">Expert Level</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Categories Grid */}
                    <motion.div
                        variants={containerAnimation}
                        className="space-y-24"
                    >
                        {skills.map((category, index) => (
                            <CategorySection key={index} category={category} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;