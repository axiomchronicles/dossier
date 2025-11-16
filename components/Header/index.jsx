"use client"
import React from 'react';
import { FaMagic } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="relative"
        >
            <motion.span
                className={`relative px-4 py-2 text-gray-300 transition-all ${isActive ? 'text-white' : 'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-400 hover:via-cyan-400 hover:to-pink-500'
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-secondary/30  rounded-lg backdrop-blur-sm"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        style={{
                            zIndex: -1
                        }}
                    />
                )}
            </motion.span>
        </Link>
    );
};

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-95 transition-opacity"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image
                    src="/logo.png"
                    width={2000}
                    height={2000}
                    alt='logo'
                    className='w-20 h-20 rounded-full'
                />
            </motion.div>
            <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
            >
                kuroyami
            </motion.span>
        </Link>
    </motion.div>
);

const Navigation = () => (
    <motion.nav
        className="hidden md:flex items-center space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
    >
        {NAV_ITEMS.map((item, index) => (
            <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index }}
            >
                <NavLink {...item} />
            </motion.div>
        ))}
    </motion.nav>
);

// ContactButton intentionally removed per request ("Use this template" button)

const Header = () => {
    return (
        <motion.header
            className="py-9 z-50 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex items-center justify-between md:px-64 px-6">
                <Logo />
                <Navigation />
            </div>
        </motion.header>
    );
};

export default Header;