/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { toast } from 'sonner';
import { config } from '@/config';
import { HiMail, HiSparkles } from 'react-icons/hi';

const ContactPage = () => {
    const handleSubmit = async (formData) => {
        try {
            console.log('Form submitted:', formData);
            toast.success("Thank you for your message. I'll get back to you soon.");
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    const contactInfo = config.contactInfo;

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

    return (
        <section className="relative flex items-center justify-center py-6" id="contact">
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-6 py-20 flex flex-col items-center">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    animate="show"
                    className="text-center space-y-6 mb-16 max-w-3xl"
                >
                    <motion.div
                        variants={itemAnimation}
                        className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300 cursor-default"
                    >
                        <HiSparkles className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-primary">
                            Let's Connect
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemAnimation}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-cyan-400 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={itemAnimation}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Have a cybersecurity project, collaboration idea, or opportunity? I'm always excited to discuss new challenges and create innovative solutions together.
                    </motion.p>

                    {/* Contact Stats */}
                    <motion.div
                        variants={itemAnimation}
                        className="grid grid-cols-3 gap-4 pt-6"
                    >
                        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                            <div className="text-2xl font-bold text-cyan-400">24h</div>
                            <div className="text-xs text-muted-foreground mt-1">Response Time</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                            <div className="text-2xl font-bold text-pink-400">100+</div>
                            <div className="text-xs text-muted-foreground mt-1">Projects Done</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                            <div className="text-2xl font-bold text-cyan-400">5+</div>
                            <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/3 backdrop-blur-sm bg-secondary/5 p-8 rounded-2xl border border-secondary/10 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-primary mb-2">Send me a message</h3>
                            <p className="text-sm text-muted-foreground">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                        </div>
                        <ContactForm onSubmit={handleSubmit} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full lg:w-1/3 backdrop-blur-sm bg-secondary/5 p-8 rounded-2xl border border-secondary/10 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <HiMail className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-primary">Contact Info</h3>
                        </div>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-secondary/10 transition-all duration-300">
                                        <div className="p-2 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                                                {info.label}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-cyan-400 transition-colors duration-300 font-medium mt-1 block"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-primary font-medium mt-1">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Additional availability info */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-cyan-500/5 border border-pink-500/20 mt-8"
                            >
                                <p className="text-xs text-pink-200 leading-relaxed">
                                    ✨ Available for cybersecurity projects, hackathons, consultations, and collaboration opportunities.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;