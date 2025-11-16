import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiCog, HiServer, HiChip } from "react-icons/hi";

export const config = {
    developer: {
        name: "Pawan",
    },
    social: {
        github: "axiomchronicles",
        discord: "1155137511954337887"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A modern and responsive portfolio website to showcase my projects, skills, and experiences. Built with Next.js and styled using TailwindCSS, this site provides a seamless user experience and a clean design that adapts to all devices.",
            image: "/projects/portfolio-app.png",
            technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
            github: "https://github.com/axiomchronicles/portfolio",
            demo: "https://axiomchronicles.netlify.app"
        }
    ],
    achievements: [
        {
            id: 1,
            title: "CyberSecurity Hackathon Winner",
            description: "Secured 2nd place at the CyberSecurity Hackathon hosted by ThuderCipher at North Cap University, Gurugram. Demonstrated exceptional skills in vulnerability assessment, penetration testing, and real-time threat detection. Successfully solved complex security challenges and proposed innovative solutions for enterprise security infrastructure.",
            image: "/achivements/achivement_01.jpeg",
            tags: ["Cybersecurity", "Hackathon", "Pentesting", "Security"],
            year: "30/08/2025"
        },
        {
            id: 2,
            title: "Tech Fest Hackquest CTF Champion",
            description: "Achieved 2nd position in the Hackquest CTF competition at Manav Rachan University. Showcased expertise in cryptography, reverse engineering, and web security vulnerabilities. Successfully exploited and secured multiple security challenges while competing against top security researchers.",
            image: "/achivements/achivement_02.jpeg",
            tags: ["CTF", "Cryptography", "Web Security", "Reverse Engineering"],
            year: "6/11/2025"
        },
        {
            id: 3,
            title: "Regional Cyber Security Hackathon",
            description: "Secured 2nd place at EsclateX, a regional-level cybersecurity hackathon at GLA University, Mathura, organized by Cyberonites Club. Demonstrated advanced skills in network security, threat analysis, and incident response. Delivered comprehensive security assessments and mitigation strategies.",
            image: "/achivements/achivement_03.jpeg",
            tags: ["Cybersecurity", "Network Security", "Incident Response", "Regional"],
            year: "9/11/2025"
        },
        {
            id: 4,
            title: "DG Sentinels CTF Competition",
            description: "Achieved 2nd position in the CTF hosted by DG Sentinels at MRIIRS. Competed against elite security professionals and demonstrated proficiency in exploit development, steganography, and binary analysis. Successfully navigated complex security challenges in high-pressure environment.",
            image: "/achivements/achivement_04.jpeg",
            tags: ["CTF", "Binary Analysis", "Steganography", "Exploit Dev"],
            year: "12/11/2025"
        }
    ],
    skills: [
    {
        title: "AI & Machine Learning",
        icon: <HiCog />,
        description: "Deep Learning, ML Algorithms & MLOps",
        bgClass: "bg-purple-500/10",
        iconClass: "text-purple-500",
        skills: [
            { name: "Deep Learning", level: "Expert", bar: 95, hot: true, svgIcon: "/skills/tensorflow.svg" },
            { name: "PyTorch", level: "Expert", bar: 90, hot: true, svgIcon: "/skills/pytorch.svg" },
            { name: "Scikit-Learn", level: "Advanced", bar: 85, svgIcon: "/skills/python.svg" },
            { name: "NumPy", level: "Advanced", bar: 85, svgIcon: "/skills/numpy.svg" },
            { name: "Pandas", level: "Advanced", bar: 85, svgIcon: "/skills/python.svg" },
            { name: "HuggingFace Transformers", level: "Advanced", bar: 80, svgIcon: "/skills/tensorflow.svg" },
            { name: "Computer Vision", level: "Intermediate", bar: 70, svgIcon: "/skills/opencv.svg" },
            { name: "NLP", level: "Intermediate", bar: 70, svgIcon: "/skills/tensorflow.svg" }
        ]
    },
    {
        title: "Web & Backend Development",
        icon: <HiServer />,
        description: "React, Next.js, Python, Node.js & APIs",
        bgClass: "bg-emerald-500/10",
        iconClass: "text-emerald-500",
        skills: [
            { name: "React", level: "Expert", bar: 95, hot: true, svgIcon: "/skills/react.svg" },
            { name: "Next.js", level: "Expert", bar: 92, hot: true, svgIcon: "/skills/nextJS.svg" },
            { name: "Python", level: "Expert", bar: 90, hot: true, svgIcon: "/skills/python.svg" },
            { name: "Node.js", level: "Advanced", bar: 85, svgIcon: "/skills/javascript.svg" },
            { name: "TypeScript", level: "Advanced", bar: 88, svgIcon: "/skills/typescript.svg" },
            { name: "Tailwind CSS", level: "Advanced", bar: 90, hot: true, svgIcon: "/skills/tailwind.svg" },
            { name: "Django", level: "Advanced", bar: 85, svgIcon: "/skills/django.svg" },
            { name: "FastAPI", level: "Advanced", bar: 85, hot: true, svgIcon: "/skills/fastify.svg" },
            { name: "Express.js", level: "Advanced", bar: 80, svgIcon: "/skills/javascript.svg" }
        ]
    },
    {
        title: "Databases & DevOps",
        icon: <HiDatabase />,
        description: "PostgreSQL, Docker, Kubernetes & Cloud",
        bgClass: "bg-orange-500/10",
        iconClass: "text-orange-500",
        skills: [
            { name: "PostgreSQL", level: "Advanced", bar: 85, hot: true, svgIcon: "/skills/postgresql.svg" },
            { name: "MongoDB", level: "Advanced", bar: 80, svgIcon: "/skills/mongoDB.svg" },
            { name: "Docker", level: "Advanced", bar: 85, hot: true, svgIcon: "/skills/docker.svg" },
            { name: "Kubernetes", level: "Intermediate", bar: 70, svgIcon: "/skills/docker.svg" },
            { name: "Git", level: "Advanced", bar: 85, svgIcon: "/skills/git.svg" },
            { name: "AWS/GCP", level: "Advanced", bar: 82, svgIcon: "/skills/aws.svg" }
        ]
    }
],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@axiomchronicles",
            link: `https://github.com/axiomchronicles`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "aegis.invincible@gmail.com",
            link: "mailto:aegis.invincible@gmail.com"
        },
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "kuroyami",
            link: `https://discord.com/users/1155137511954337887`
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Pawan Kumar",
            link: "https://www.linkedin.com/in/pawan-kumar-672356327/"
        }
    ]
}