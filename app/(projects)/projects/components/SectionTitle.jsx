import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiCode, HiSparkles, HiLightBulb } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';

const SectionTitle = () => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={titleAnimation}
        className="mb-16 space-y-8"
    >
        {/* Header badge and title */}
        <div className="space-y-4">
            <motion.div
                className="inline-flex items-center space-x-2 bg-white/5 border-[1.8px] border-white/10 px-4 py-2 rounded-full text-white/70 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default"
            >
                <HiSparkles className="w-5 h-5 text-white/50" />
                <span className="text-sm font-medium text-white/70">
                    My Projects
                </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
                Featured Work & Projects
            </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl flex-1">
                <p className="text-lg text-muted-foreground leading-relaxed">
                    A curated selection of my professional work and personal projects,
                    showcasing expertise in{' '}
                    <span className="text-primary font-semibold">full-stack development</span>,{' '}
                    <span className="text-primary font-semibold">web security</span>, and{' '}
                    <span className="text-primary font-semibold">cloud architecture</span>.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="w-full md:w-auto rounded-xl px-4 sm:px-5 py-5 sm:py-6 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/10"
                    asChild
                >
                    <a
                        href={`https://github.com/${config.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                    >
                        View Github
                    </a>
                </Button>
            </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4">
            <motion.div
                className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20"
            >
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Done</div>
            </motion.div>
            <motion.div
                className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20"
            >
                <div className="text-2xl font-bold text-pink-400">5+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
            </motion.div>
            <motion.div
                className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20"
            >
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Delivery Rate</div>
            </motion.div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
    </motion.div>
);

export default SectionTitle;