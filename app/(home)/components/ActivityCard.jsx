import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ActivityCard = ({
    icon: Icon,
    title,
    image,
    imageAlt,
    mainText,
    subText,
    additionalText,
    isSpotify,
    startTime,
    endTime
}) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const duration = endTime - startTime;

    useEffect(() => {
        if (!isSpotify || !startTime || !endTime) return;

        setCurrentProgress(Date.now() - startTime);

        const interval = setInterval(() => {
            const newProgress = Date.now() - startTime;
            if (newProgress >= duration) {
                clearInterval(interval);
            } else {
                setCurrentProgress(newProgress);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isSpotify, startTime, endTime, duration]);

    const formatTime = (ms) => {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercentage = (currentProgress / duration) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/10 border-[1.8px] border-zinc-900/70 p-4 rounded-xl backdrop-blur-sm hover:bg-secondary/20 hover:border-zinc-800/50 transition-all duration-300 group"
        >
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800/50">
                <motion.div
                    animate={{ scale: isSpotify ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: isSpotify ? Infinity : 0 }}
                >
                    {Icon}
                </motion.div>
                <span className="text-sm font-medium tracking-wide">{title}</span>
            </div>
            <div className="flex items-center gap-5 justify-center">
                {image && (
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-20 h-20 rounded-xl shadow-lg"
                        />
                    </motion.div>
                )}
                <div className="flex flex-col gap-1.5 flex-1">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-semibold text-primary text-lg tracking-tight group-hover:text-cyan-400 transition-colors"
                    >
                        {mainText}
                    </motion.span>
                    <span className="text-sm text-muted-foreground/90">
                        {subText}
                    </span>
                    {additionalText && (
                        <span className="text-xs text-muted-foreground/80">
                            {additionalText}
                        </span>
                    )}

                    {isSpotify && startTime && endTime && (
                        <motion.div
                            className="mt-2 space-y-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-full h-1 bg-secondary/20 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"
                                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                                    transition={{ duration: 1, ease: "linear" }}
                                />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground/70">
                                <span>{formatTime(currentProgress)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ActivityCard;