# Customization Guide

This guide explains how to modify the style and content of the Riccardo Malabarba portfolio website. Whether you're updating personal information, changing colors, or adding new sections, this guide will help you make changes safely and effectively.

## 📁 File Structure Overview

```
src/
├── components/              # Individual section components
├── pages/                   # Page-level components
├── assets/                  # Images and static files
├── lib/                     # Utilities and helpers
└── index.css               # Global styles and Tailwind config
```

## 🎨 Styling & Theme Customization

### Color Scheme

The website uses a theme-aware color system that automatically adapts to light/dark modes:

#### Light Mode Colors
- **Background**: Light theme background (`bg-background`)
- **Particle Network**: Blue particles (`rgba(59, 130, 246, 0.6)`)
- **Text**: Dark text on light background

#### Dark Mode Colors
- **Background**: Dark theme background (`bg-background`)
- **Particle Network**: Green particles (`rgba(52, 211, 153, 0.6)`)
- **Text**: Light text on dark background

### Modifying Particle Colors

Edit `src/components/ParticleNetwork.tsx`:

```typescript
// Change these color values for different themes
const particleColor = isDark ? 'rgba(52, 211, 153, 0.6)' : 'rgba(59, 130, 246, 0.6)';
const lineColor = isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(59, 130, 246, 0.15)';
const glowColor = isDark ? 'rgba(251, 191, 36, 0.4)' : 'rgba(96, 165, 250, 0.4)';
```

### Section Backgrounds

All sections use `bg-background` for consistency. To change this:

1. **Individual Section**: Edit the `className` in each component
2. **Global Change**: Modify the `bg-background` class usage across components

## 📝 Content Modification

### Personal Information

#### Hero Section (`src/components/HeroSection.tsx`)
```typescript
// Update name, title, and description
<h1>Name</h1>
<p>Description text</p>

// Update social links
<a href="your-linkedin">LinkedIn</a>
<a href="your-github">GitHub</a>
<a href="your-email">Email</a>
<a href="your-medium">Medium</a>
```

#### About Section (`src/components/AboutSection.tsx`)
```typescript
// Update personal description and background
const aboutContent = {
  title: "Your Title",
  description: "Your description...",
  highlights: ["Highlight 1", "Highlight 2", "Highlight 3"]
};
```

### Skills & Experience

#### Skills Section (`src/components/SkillsSection.tsx`)
```typescript
const skills = [
  {
    category: "Your Category",
    items: [
      { name: "Skill Name", level: 90 },
      // Add more skills
    ]
  }
];
```

#### Experience Section (`src/components/ExperienceSection.tsx`)
```typescript
const experiences = [
  {
    title: "Your Position",
    company: "Company Name",
    period: "Start - End",
    description: "Role description...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### Projects & Education

#### Projects Section (`src/components/ProjectsSection.tsx`)
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech 1", "Tech 2"],
    image: "/images/project-image.svg", // Optional: Add project hero image
    references: [
      { url: "https://github.com/your-repo", type: "GitHub" },
      { url: "https://your-live-site.com", type: "Live Demo" }
    ]
  }
];
```

**Adding Project Images:**
1. Place images in `public/images/` directory
2. Use SVG format for best scalability or optimized images
3. Images are displayed in 16:9 aspect ratio at the top of project cards
4. Omit the `image` field for projects without images

#### Education Section (`src/components/EducationSection.tsx`)
```typescript
const education = [
  {
    degree: "Your Degree",
    institution: "University Name",
    period: "Start - End",
    description: "Education details..."
  }
];
```

### Awards & Soft Skills

#### Awards Section (`src/components/AwardsSection.tsx`)
```typescript
const awards = [
  {
    name: "Award Name",
    issuer: "Issuing Organization",
    year: "Award Year",
    description: "Award details...", // Optional
    image: "/images/award-image.svg", // Optional: Award certificate or badge image
    link: "https://linkedin.com/post/award-details" // Optional: Link to detailed information
  }
];
```

**Award Media Options:**
- **Images**: Display award certificates, badges, or commemorative images in 16:9 aspect ratio
- **Links**: Add external links to detailed award information, certificates, or announcements
- **Flexible**: Awards can have both, either, or neither images/links
- **Responsive**: Images and links adapt gracefully to different screen sizes

#### Soft Skills Section (`src/components/SoftSkillsSection.tsx`)
```typescript
const softSkills = [
  {
    name: "Communication",
    description: "Description of your communication skills...",
    icon: MessageCircle
  }
];
```

## 🖼️ Images & Assets

### Adding Images

#### Project & Award Images
1. Place images in `public/images/` directory (recommended for static assets)
2. Use descriptive filenames: `project-name.svg`, `award-name.svg`
3. Recommended formats: SVG for scalability, WebP/JPG for photos
4. Images are automatically optimized and served from the root domain

#### Component Images
1. Place images in `src/assets/` directory
2. Import in components:
```typescript
import yourImage from "@/assets/your-image.jpg";
```

### Image Guidelines

**Project Images:**
- 16:9 aspect ratio recommended (400x225px, 800x450px, etc.)
- SVG format preferred for diagrams and illustrations
- Displayed at the top of project cards with hover effects

**Award Images:**
- 16:9 aspect ratio for consistency
- Can be award certificates, badges, or commemorative photos
- Displayed above award details with responsive scaling

**General Best Practices:**
- Optimize images for web (use tools like ImageOptim or TinyPNG)
- Use descriptive alt text for accessibility
- Test images on different screen sizes

## 🖼️ Media Features

### Featured Projects with Images

Projects can now include optional hero images that appear at the top of each project card:

```typescript
const projects = [
  {
    title: "AI Energy Tool",
    description: "Machine learning for energy optimization...",
    technologies: ["Python", "TensorFlow"],
    image: "/images/energy-tool.svg", // Optional image
    references: [...]
  }
];
```

**Benefits:**
- Visual appeal and better project showcase
- 16:9 responsive images with hover effects
- Backward compatible (omit `image` field for text-only projects)

### Awards with Media Support

Awards can include images and external links:

```typescript
const awards = [
  {
    name: "Innovation Award",
    issuer: "Tech Company",
    year: "2023",
    description: "For groundbreaking work in AI...",
    image: "/images/award-certificate.svg", // Optional
    link: "https://linkedin.com/posts/award-announcement" // Optional
  }
];
```

**Features:**
- Award images displayed above details
- External links with "View Details" call-to-action
- Flexible: mix awards with/without media
- Responsive design for all screen sizes

## 🎯 Navigation & Layout

### Adding New Sections

1. **Create Component**: `src/components/YourNewSection.tsx`
2. **Add to Navigation**: Update `navLinks` in `src/components/Navigation.tsx`
3. **Add to Page**: Import and add to `src/pages/Index.tsx`
4. **Add ID**: Ensure section has `id="your-section"` for navigation

### Navigation Links

```typescript
// In Navigation.tsx
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#your-section", label: "Your Section" },
  // Add more links
];
```

## 🌐 Environment Variables

### Contact Form

Update `.env` file:
```bash
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_id
```

### Adding New Environment Variables

1. Add to `.env` and `.env.example`
2. Update `.gitignore` to exclude `.env`
3. Use in components: `import.meta.env.VITE_YOUR_VARIABLE`

## 🎨 Advanced Styling

### Custom CSS Classes

Add to `src/index.css`:
```css
.your-custom-class {
  /* Your styles */
}
```

### Tailwind Configuration

Modify `tailwind.config.ts` for custom colors, fonts, etc.

### Component Styling

Each component uses Tailwind classes. Modify `className` attributes for styling changes.

## 🚀 Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment:

```bash
npm run build
npm run deploy
```

### Environment Setup

Ensure production environment variables are set in your hosting platform.

## 🧪 Testing Changes

### Running Tests
```bash
npm test
```

### Development Server
```bash
npm run dev
```

### Build Check
```bash
npm run build
npm run preview
```

## 🔧 Troubleshooting

### Common Issues

1. **Styles not updating**: Clear browser cache or run `npm run build`
2. **Images not loading**: Check file paths in `public/images/` and ensure correct format
3. **Project/Award images not showing**: Verify `image` field paths and file existence
4. **Award links not working**: Check `link` field URLs and ensure they start with `https://`
5. **Navigation not working**: Ensure section IDs match navigation hrefs
6. **Theme not switching**: Check ThemeProvider setup in App.tsx

### Performance Tips

- Optimize images before adding (use WebP format when possible)
- Use SVG for logos, icons, and simple graphics
- Compress photos and certificates for web
- Test images on multiple devices and browsers
- Use lazy loading for heavy components
- Minimize bundle size by removing unused dependencies

## 📞 Support

For questions about customization:
- Check component comments for guidance
- Review TypeScript types for data structures
- Test changes in development before deploying

---

**Remember**: Always test your changes thoroughly before deploying to production!