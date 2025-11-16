"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { HiCheckCircle } from 'react-icons/hi';

const ContactForm = ({ onSubmit }) => {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmitHandler = async (data) => {
        await onSubmit(data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
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
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="space-y-6"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
        >
            {/* Success message */}
            {submitted && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center gap-3"
                >
                    <HiCheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-sm text-white">
                        Message sent successfully! I'll get back to you soon.
                    </p>
                </motion.div>
            )}

            <div className="space-y-4">
                <motion.div variants={itemAnimation} className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                            First Name
                        </label>
                        <motion.div
                            whileFocus={{ scale: 1.01 }}
                            className="relative"
                        >
                            <Input
                                {...register("firstName", { required: "First name is required" })}
                                type="text"
                                placeholder="Pawan"
                                className="rounded-lg border-primary/20 focus:border-primary/50 transition-all duration-300"
                            />
                        </motion.div>
                        {errors.firstName && (
                            <motion.span
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-red-500 block"
                            >
                                {errors.firstName.message}
                            </motion.span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                            Last Name
                        </label>
                        <motion.div
                            whileFocus={{ scale: 1.01 }}
                            className="relative"
                        >
                            <Input
                                {...register("lastName", { required: "Last name is required" })}
                                type="text"
                                placeholder="Kumar"
                                className="rounded-lg border-primary/20 focus:border-primary/50 transition-all duration-300"
                            />
                        </motion.div>
                        {errors.lastName && (
                            <motion.span
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-red-500 block"
                            >
                                {errors.lastName.message}
                            </motion.span>
                        )}
                    </div>
                </motion.div>

                <motion.div variants={itemAnimation} className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Email
                    </label>
                    <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="relative"
                    >
                        <Input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            placeholder="aegis.invincible@gmail.com"
                            className="rounded-lg border-primary/20 focus:border-primary/50 transition-all duration-300"
                        />
                    </motion.div>
                    {errors.email && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 block"
                        >
                            {errors.email.message}
                        </motion.span>
                    )}
                </motion.div>

                <motion.div variants={itemAnimation} className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Subject
                    </label>
                    <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="relative"
                    >
                        <Input
                            {...register("subject", { required: "Subject is required" })}
                            type="text"
                            placeholder="Let's collaborate on something amazing"
                            className="rounded-lg border-primary/20 focus:border-primary/50 transition-all duration-300"
                        />
                    </motion.div>
                    {errors.subject && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 block"
                        >
                            {errors.subject.message}
                        </motion.span>
                    )}
                </motion.div>

                <motion.div variants={itemAnimation} className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                        Message
                    </label>
                    <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="relative"
                    >
                        <Textarea
                            {...register("message", { required: "Message is required" })}
                            placeholder="Share your ideas, projects, or opportunities..."
                            className="rounded-lg border-primary/20 focus:border-primary/50 transition-all duration-300 min-h-[150px] resize-none"
                        />
                    </motion.div>
                    {errors.message && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 block"
                        >
                            {errors.message.message}
                        </motion.span>
                    )}
                </motion.div>
            </div>

            <motion.div variants={itemAnimation}>
                <Button 
                    type="submit"
                    className="w-full rounded-xl py-6 text-base font-semibold"
                    disabled={isSubmitting || submitted}
                    variant="default"
                >
                    {isSubmitting ? (
                        <motion.span
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Sending...
                        </motion.span>
                    ) : submitted ? (
                        "Message Sent!"
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </motion.div>
        </motion.form>
    );
};

export default ContactForm;