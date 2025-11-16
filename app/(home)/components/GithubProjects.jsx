"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { config } from '@/config';
import useSWR from 'swr';
import { formatDistanceToNow } from 'date-fns';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Rust: '#dea584',
};

const ITEMS_PER_PAGE = 6;
const GITHUB_API_URL = `https://api.github.com/users/${config.social.github}/repos`;

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const errorData = await res.json();
        const error = new Error('Failed to fetch GitHub projects');
        error.info = errorData.message;
        error.status = res.status;
        throw error;
    }

    return res.json();
};

const ProjectSkeleton = () => (
    <div className="rounded-xl bg-secondary/5 border border-secondary/10 p-6">
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <Skeleton className="h-12 w-full" />
            <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
            </div>
        </div>
    </div>
);

const ErrorAlert = ({ error, onRetry }) => (
    <Alert variant="destructive" className="col-span-full">
        <FaExclamationCircle className="w-4 h-4" />
        <AlertDescription className="flex items-center justify-between">
            <span>
                Failed to load projects. Please try again later.
                Rate limit exceeded
            </span>
            <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                className="ml-4"
            >
                Try Again
            </Button>
        </AlertDescription>
    </Alert>
);

const ProjectCard = ({ project }) => {
    const topics = project.topics || [];

    return (
        <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemAnimation}
            whileHover={{ y: -12, scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden"
        >
            {/* Gradient background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-white/2 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/20 group-hover:border-[#00D9FF]/40 transition-all duration-300" />
            
            {/* Animated gradient overlay */}
            <motion.div 
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/10 via-transparent to-[#FF006E]/10"
            />

            <div className="relative z-10 p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                        <motion.div
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FaGithub className="w-5 h-5 text-[#00D9FF] group-hover:drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]" />
                        </motion.div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <h3 className="font-semibold text-white group-hover:text-[#00D9FF] transition-colors truncate max-w-[150px]">
                                        {project.name}
                                    </h3>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{project.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <HiExternalLink className="w-5 h-5 text-white/50 group-hover:text-[#FF006E] transition-all group-hover:drop-shadow-[0_0_10px_rgba(255,0,110,0.6)]" />
                    </motion.div>
                </div>

                <div className="space-y-2 flex-grow">
                    <p className="text-sm text-white/60 line-clamp-2 group-hover:text-white/80 transition-colors">
                        {project.description || "No description provided"}
                    </p>

                    {topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {topics.slice(0, 3).map((topic, idx) => (
                                <motion.span
                                    key={topic}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xs bg-gradient-to-r from-[#00D9FF]/20 to-[#00D9FF]/10 text-[#00D9FF]/90 px-2 py-1 rounded-full border border-[#00D9FF]/30 hover:border-[#00D9FF]/60 transition-all"
                                >
                                    {topic}
                                </motion.span>
                            ))}
                            {topics.length > 3 && (
                                <span className="text-xs text-white/50">
                                    +{topics.length - 3} more
                                </span>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                        {project.language && (
                            <motion.div 
                              whileHover={{ scale: 1.15 }}
                              className="flex items-center space-x-1"
                            >
                                <motion.div
                                    animate={{ boxShadow: ['0 0 10px ' + (languageColors[project.language] || '#ccc') + '80', '0 0 20px ' + (languageColors[project.language] || '#ccc') + 'cc', '0 0 10px ' + (languageColors[project.language] || '#ccc') + '80'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-3 h-3 rounded-full"
                                    style={{
                                        backgroundColor: languageColors[project.language] || '#ccc'
                                    }}
                                />
                                <span className="text-sm text-white/70">
                                    {project.language}
                                </span>
                            </motion.div>
                        )}
                        <motion.div whileHover={{ scale: 1.25 }} className="flex items-center space-x-1">
                            <FaStar className="w-4 h-4 text-amber-400" />
                            <span className="text-sm text-white/70 font-semibold">
                                {project.stargazers_count}
                            </span>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.25 }} className="flex items-center space-x-1">
                            <FaCodeBranch className="w-4 h-4 text-[#FF006E]" />
                            <span className="text-sm text-white/70 font-semibold">
                                {project.forks_count}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

const GithubProjects = () => {
    const [page, setPage] = React.useState(1);
    const [isLoadingMore, setIsLoadingMore] = React.useState(false);

    const { data, error, isLoading, mutate: revalidateData } = useSWR(
        `${GITHUB_API_URL}?sort=updated&per_page=${ITEMS_PER_PAGE * page}`,
        fetcher,
        {
            revalidateOnFocus: false,
            refreshInterval: 300000,
            shouldRetryOnError: false,
        }
    );

    const projects = React.useMemo(() => {
        if (!data) return [];
        return data
            .filter(project => !project.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, ITEMS_PER_PAGE * page);
    }, [data, page]);

    const handleRetry = async () => {
        try {
            setIsLoadingMore(true);
            await revalidateData();
        } catch (err) {
            console.error('Error retrying fetch:', err);
        } finally {
            setIsLoadingMore(false);
        }
    };

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="space-y-16">
                    <div className="space-y-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/70 backdrop-blur-md hover:bg-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 group"
                        >
                            <motion.div transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                                <FaGithub className="w-5 h-5 text-[#00D9FF] group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.6)]" />
                            </motion.div>
                            <span className="text-sm font-medium bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">Latest Github Projects</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Open Source <span className="bg-gradient-to-r from-[#00D9FF] via-[#00D9FF] to-[#00F0FF] bg-clip-text text-transparent">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/60 font-light"
                        >
                            Check out some of my latest open source projects on Github
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {isLoading ? (
                            Array(ITEMS_PER_PAGE).fill(0).map((_, index) => (
                                <ProjectSkeleton key={index} />
                            ))
                        ) : error ? (
                            <ErrorAlert error={error} onRetry={handleRetry} />
                        ) : (
                            projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        )}
                    </motion.div>

                    <div className="flex justify-center space-x-4">
                        {!error && data?.length > projects.length && (
                            <Button
                                variant="outline"
                                onClick={loadMore}
                                disabled={isLoadingMore}
                                className="rounded-full px-6 py-6 text-base"
                            >
                                {isLoadingMore ? (
                                    <>
                                        <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    'Load More Projects'
                                )}
                            </Button>
                        )}

                        <Button
                            variant="expandIcon"
                            Icon={FaGithub}
                            iconPlacement="right"
                            className="rounded-full px-6 py-6 text-base"
                            asChild
                        >
                            <a
                                href={`https://github.com/${config.social.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More on Github
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubProjects;