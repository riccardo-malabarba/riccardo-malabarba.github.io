# Riccardo Malabarba - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcases professional experience in data and AI leadership.

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

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── AwardsSection.tsx
│   ├── SoftSkillsSection.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Index.tsx      # Main portfolio page
│   └── NotFound.tsx   # 404 page
├── lib/               # Utilities and helpers
│   └── utils.ts       # Utility functions
├── hooks/             # Custom React hooks
├── assets/            # Static assets (images, etc.)
└── test/              # Test setup files
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

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Routing:** React Router
- **State Management:** TanStack Query
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint
- **Deployment:** GitHub Pages

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs tests and linting
3. If successful, builds and deploys to GitHub Pages
4. Site is available at `https://riccardo-malabarba.github.io`

## 📝 Development Guidelines

### Code Style
- Uses ESLint for code quality
- Prettier for consistent formatting
- TypeScript for type safety

### Component Structure
- Functional components with hooks
- shadcn/ui for consistent design
- Responsive design with Tailwind CSS

### Testing
- Unit tests for utilities and components
- Integration tests for user interactions
- CI/CD pipeline ensures quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure linting passes
6. Submit a pull request

## 📄 License

This project is private and proprietary.
