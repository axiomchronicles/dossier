"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Progress bar */}
            <motion.div
                style={{ width: `${scrollProgress}%` }}
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00D9FF] via-[#FF006E] to-[#00D9FF] z-50 shadow-lg shadow-[#00D9FF]/50"
            />

            {/* Scroll indicator dot */}
            {scrollProgress > 0 && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: scrollProgress > 10 ? 1 : 0, scale: scrollProgress > 10 ? 1 : 0 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#FF006E]/20 border border-white/20 hover:border-[#00D9FF]/50 backdrop-blur-md hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all duration-300 cursor-pointer group"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white/70 group-hover:text-[#00D9FF] transition-colors"
                    >
                        ↑
                    </motion.div>
                </motion.button>
            )}
        </>
    );
};

export default ScrollIndicator;
