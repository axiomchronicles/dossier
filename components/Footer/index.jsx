"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { HiHeart, HiCode, HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

const Footer = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-12 border-t border-secondary/20"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Main footer content */}
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* About */}
                        <motion.div variants={itemAnimation} className="space-y-3">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <HiCode className="w-4 h-4 text-cyan-400" />
                                About
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Cybersecurity enthusiast & full-stack developer. Building innovative solutions through code and creativity.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemAnimation} className="space-y-3">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <HiSparkles className="w-4 h-4 text-white/50" />
                                Quick Links
                            </h3>
                            <div className="space-y-2">
                                {config.NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        → {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social */}
                        <motion.div variants={itemAnimation} className="space-y-3">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <HiHeart className="w-4 h-4 text-red-400" />
                                Connect
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href={`https://github.com/${config.social.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                    → GitHub
                                </a>
                                <a
                                    href={`https://linkedin.com/in/${config.social.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                    → LinkedIn
                                </a>
                                <a
                                    href={`mailto:${config.contactInfo[0].value}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                    → Email
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        variants={itemAnimation}
                        className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6"
                    />

                    {/* Bottom footer */}
                    <motion.div
                        variants={itemAnimation}
                        className="text-center space-y-3"
                    >
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p className="flex items-center justify-center gap-2">
                                <span>© {new Date().getFullYear()} {config.developer.name}</span>
                                <span className="text-primary">•</span>
                                <span>All rights reserved</span>
                            </p>
                            <p className="flex items-center justify-center gap-1 text-xs">
                                Made with <HiHeart className="w-3 h-3 text-red-500" /> using Next.js & Tailwind CSS
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;