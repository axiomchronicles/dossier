/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiMusicNote } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import LanyardPlayer from './LanyardPlayer';
import RecentTracks from './RecentTracks';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 backdrop-blur-md hover:bg-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 group"
          >
            <motion.div 
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300" />
              <HiCode className="w-5 h-5 text-[#00D9FF] relative" />
            </motion.div>
            <span className="text-sm font-medium bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">Welcome to my portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block mb-2 relative inline-block"
              >
                <span className="text-white">Hi, I'm </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#FF006E] via-[#FF006E] to-[#FF4D7D] bg-clip-text text-transparent font-black drop-shadow-lg">Pawan</span>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF006E] to-transparent blur-md"
                  />
                </span>
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/70 text-2xl md:text-4xl font-light"
              >
                I build <span className="relative">
                  <span className="bg-gradient-to-r from-[#FF006E] via-[#FF006E] to-[#FF4D7D] bg-clip-text text-transparent font-bold drop-shadow-lg">Deep Learning</span>
                  <motion.div
                    animate={{ x: [-500, 500, -500] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm pointer-events-none"
                  />
                </span> solutions
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto font-light tracking-wide"
          >
            Deep Learning researcher & full-stack developer specializing in neural networks, machine learning, and AI-driven solutions. Passionate about cutting-edge AI research, computer vision, NLP, and building intelligent systems that solve real-world problems.
          </motion.p>

          {/* Enhanced Stats with cards */}
          <motion.div
            variants={itemAnimation}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative p-4 rounded-2xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-orange-500/5 backdrop-blur-md" />
              {/* Animated border */}
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-amber-500/30 via-transparent to-orange-500/30 bg-clip-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-2 text-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
                >
                  4
                </motion.div>
                <div className="text-xs text-white/60 font-medium">Hackathon Wins</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative p-4 rounded-2xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-500/5 to-cyan-500/5 backdrop-blur-md" />
              {/* Animated border */}
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-blue-500/30 via-transparent to-cyan-500/30 bg-clip-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-2 text-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-[#00D9FF] bg-clip-text text-transparent"
                >
                  2nd
                </motion.div>
                <div className="text-xs text-white/60 font-medium">Avg Position</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.08, y: -8 }}
              className="group relative p-4 rounded-2xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-green-500/5 to-green-500/5 backdrop-blur-md" />
              {/* Animated border */}
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-emerald-500/30 via-transparent to-green-500/30 bg-clip-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-2 text-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent"
                >
                  100%
                </motion.div>
                <div className="text-xs text-white/60 font-medium">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base font-semibold"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="mt-12 w-full mx-auto"
          >
            <LanyardPlayer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        {
          config.recentTracks ? (
            <RecentTracks />
          ) : (
            null
          )
        }
      </div>
    </section>
  );
};

export default HeroSection;