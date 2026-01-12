# Riccardo Malabarba - Portfolio Website

A stunning, modern portfolio website showcasing expertise in Data & AI leadership in the energy sector. Features interactive particle animations, theme-aware design, and a comprehensive professional showcase.

## ✨ Key Features

- 🎨 **Interactive Particle Network**: Animated hero section with theme-aware particle system (blue in light mode, green in dark mode)
- 🌓 **Dark Mode**: Smooth theme switching with system preference support and consistent backgrounds
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🔒 **Secure Configuration**: Environment variables for sensitive data
- ⚡ **High Performance**: Optimized animations and lazy loading
- 🎯 **Consistent Design**: All sections share the same theme-aware background

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/riccardo-malabarba/riccardo-malabarba.github.io.git
cd riccardo-malabarba.github.io

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ui/                 # shadcn/ui components
│   ├── HeroSection.tsx     # Animated landing with theme-aware particle network
│   ├── ParticleNetwork.tsx # Interactive particle system with theme colors
│   ├── ThemeToggle.tsx     # Dark mode toggle
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── AwardsSection.tsx
│   ├── SoftSkillsSection.tsx
│   ├── ContactSection.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/                  # Page components
│   ├── Index.tsx          # Main portfolio page
│   └── NotFound.tsx       # 404 page
├── lib/                   # Utilities and helpers
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
├── assets/                # Static assets (images, etc.)
└── test/                  # Test setup files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Why Build Before Deploy?

### Development vs Production

**Development (`npm run dev`):**
- Vite serves files directly from source
- Hot module replacement (HMR) for instant updates
- Source maps for debugging
- No optimization (faster startup)

**Production (`npm run build`):**
- Code is bundled and minified
- Assets are optimized (images, CSS, JS)
- Dead code elimination
- Better performance and smaller file sizes
- Ready for deployment

### Build Process

1. **TypeScript Compilation** - Converts TSX/TS to JavaScript
2. **Bundling** - Combines all modules into optimized bundles
3. **Minification** - Reduces file sizes
4. **Asset Optimization** - Compresses images, optimizes fonts
5. **Output Generation** - Creates `dist/` folder with production-ready files

## 🧪 Testing

This project uses Vitest for testing with React Testing Library:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 🎨 Technologies Used

### Core Stack
- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.21
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **Package Manager:** npm

### UI & Design
- **Component Library:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React 0.462.0
- **Animations:** Framer Motion 12.23.26
- **Theme Management:** next-themes 0.3.0
- **3D Graphics:** Three.js + @react-three/fiber v8.18.0 + @react-three/drei v9.114.0

### Utilities
- **Routing:** React Router DOM 6.30.1
- **State Management:** TanStack Query 5.83.0
- **Form Handling:** React Hook Form 7.61.1 + Zod
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint

### Backend/Services
- **Contact Form:** Formspree (environment variable configured)
- **Deployment:** GitHub Pages

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs tests and linting
3. If successful, builds and deploys to GitHub Pages
4. Site is available at `https://riccardo-malabarba.github.io`

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables

Before deploying, ensure your environment variables are set:

**Local Development** (`.env`):
```bash
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

**Production** (GitHub Secrets or hosting platform):
```bash
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

## 📝 Development Guidelines

### Code Style
- Uses ESLint for code quality
- Prettier for consistent formatting
- TypeScript for type safety

### Component Structure
- Functional components with hooks
- shadcn/ui for consistent design
- Responsive design with Tailwind CSS
- Framer Motion for smooth animations
- Environment variables for sensitive data

### Performance Best Practices
- Lazy loading for heavy components
- Optimized particle count for mobile devices
- Hardware-accelerated CSS animations
- Code splitting with Vite
- Image optimization (recommended)

### Testing
- Unit tests for utilities and components
- Integration tests for user interactions
- CI/CD pipeline ensures quality

## 📚 Additional Documentation

- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)**: Detailed breakdown of all new features
- **[Quick Reference](QUICK_REFERENCE.md)**: Customization guide and troubleshooting
- **[Customization Guide](CUSTOMIZATION_GUIDE.md)**: How to modify website style and content

## 🎯 Feature Highlights

### Interactive Particle Network
60 particles (30 on mobile) with mouse interaction and theme-aware colors:
- **Light Mode**: Blue particles with light blue glow effects
- **Dark Mode**: Green particles with yellow glow effects

Creates a dynamic data flow visualization that represents the intersection of energy and data.

### Dark Mode
System-aware theme toggle with smooth transitions and persistent preferences. All sections maintain consistent backgrounds that adapt to the selected theme.

### Responsive Design
Fully optimized for all device sizes with consistent visual hierarchy and performance.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure linting passes
6. Submit a pull request

## 📞 Contact

**Riccardo Malabarba**  
Head of Data & AI  
📧 riccardo.malabarba7@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/rmalabarba)  
📝 [Medium](https://medium.com/@riccardo.malabarba7)  
💻 [GitHub](https://github.com/riccardo-malabarba)

## 📄 License

This project is private and proprietary.

---

**Built with passion for data and innovation** 🚀
