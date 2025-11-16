/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		'blur-sm',
		'blur-md',
		'blur-lg',
		'blur-xl',
		'blur-2xl',
		'blur-3xl',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'shine': {
					from: {
						backgroundPosition: '200% 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'blob': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'25%': { transform: 'translate(20px, -50px) scale(1.1)' },
					'50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'75%': { transform: 'translate(50px, 50px) scale(1.05)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'25%': { transform: 'translateY(-20px) translateX(10px)' },
					'50%': { transform: 'translateY(-40px) translateX(-10px)' },
					'75%': { transform: 'translateY(-20px) translateX(10px)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), 0 0 80px rgba(0, 217, 255, 0.3)'
					},
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% center' },
					'100%': { backgroundPosition: '200% center' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'shine': 'shine 8s ease-in-out infinite',
				'blob': 'blob 7s infinite',
				'float': 'float-slow 6s ease-in-out infinite',
				'rotate': 'rotate-slow 20s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s linear infinite',
				'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-in-up': 'slide-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
