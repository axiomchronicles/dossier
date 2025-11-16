![Thumbnail ](images/Thumbnail.png)

# Pawan's Portfolio Website

A modern, premium portfolio website to showcase Deep Learning projects, ML/AI solutions, and technical expertise. Built with Next.js and styled with Tailwind CSS, featuring sophisticated animations, glassmorphism effects, and an immersive user experience.

## Features

- **Responsive Design**: Optimized for all devices - mobile, tablet, and desktop
- **Aurora Background Effects**: Dynamic gradient animations creating an immersive visual experience
- **Premium Animations**: Smooth, sophisticated animations using Framer Motion
- **Interactive Components**: 
  - Achievement Lightbox Modal: Click any card to view detailed information
  - Scroll Progress Indicator: Track your position and quickly return to top
  - Skills Ticker: Horizontal scrolling showcase of technologies
  - ML/AI Focused Content: Emphasis on Deep Learning and AI expertise
- **Glassmorphism Design**: Modern frosted glass effects with backdrop blur
- **Dark Theme**: Visually appealing dark theme with cyan and pink accent colors
- **Smooth Interactions**: Micro-animations and hover effects throughout

## Technologies Used

- **Next.js**: React framework for production-grade applications
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Advanced animation library for smooth transitions and interactive effects
- **React Hooks**: Modern state management and component logic
- **GitHub API**: Dynamic project fetching from GitHub repositories
- **Spotify API**: Real-time integration for recently played tracks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.


## Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

This will create a `.next` folder with optimized assets ready for deployment.

## Deployment

Deploy easily to [Vercel](https://vercel.com/) (recommended for Next.js):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy with a single click

Alternatively, deploy to any Node.js hosting platform like Netlify, AWS, or Heroku.

## Spotify Recent Tracks Integration

### Setup Steps:

1. Create Spotify App in [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Add `http://localhost:3333/callback` in Redirect URIs

2. Install dependencies (if not already installed):
   ```bash
   npm install dotenv express open node-fetch
   ```

3. Create `.env.local` and add your credentials:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   ```

4. Generate refresh token:
   ```bash
   node scripts/spotify-auth.js
   ```

5. Copy the token and add to `.env.local`:
   ```env
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   NEXT_PUBLIC_SPOTIFY_ENABLED=true
   ```

6. Restart the development server:
   ```bash
   npm run dev
   ```

Your recent Spotify tracks will now display in the portfolio! 🎵

## Project Structure

```
├── app/
│   ├── (home)/
│   │   ├── page.jsx
│   │   └── components/
│   │       ├── HeroSection.jsx
│   │       ├── SkillsTicker.jsx
│   │       ├── Achievements.jsx
│   │       ├── AchievementLightbox.jsx
│   │       ├── GithubProjects.jsx
│   │       └── ScrollIndicator.jsx
│   ├── (projects)/
│   ├── (contact)/
│   ├── api/
│   ├── globals.css
│   └── layout.js
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Providers/
│   └── ui/
├── lib/
│   ├── spotify.js
│   └── utils.js
├── public/
├── tailwind.config.js
└── next.config.mjs
```

## Performance Features

- **Optimized Images**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS-in-JS**: Tailwind CSS for minimal bundle size
- **Smooth Scrolling**: Optimized scroll animations with will-change properties
- **Aurora Effects**: CSS-based animations for performance

## Customization

Update your information in `config.js`:

```js
export const portfolio = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... other configurations
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements.

## Contact

- Portfolio: [https://yourdomain.com](https://yourdomain.com)
- GitHub: [@yourprofile](https://github.com/yourprofile)
- Email: your.email@example.com

---

Built with ❤️ by Pawan
