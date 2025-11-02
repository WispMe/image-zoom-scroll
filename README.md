# Image Zoom Scroll

A smooth, scroll-triggered image zoom animation effect built with GSAP and TypeScript. This project demonstrates how to create engaging scroll-based animations where images zoom in and out as users scroll through the page.

## 🎯 Purpose

This project was created for **learning purposes only**. It's a public repository that demonstrates scroll-triggered animations using GSAP's ScrollTrigger plugin. Feel free to use, modify, and learn from this code.

## ✨ Features

- Smooth scroll-triggered zoom animations
- Multiple images with sequential transitions
- GSAP ScrollTrigger integration for performance
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Easy to customize image configuration

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **GSAP (GreenSock Animation Platform)** - Animation library
- **ScrollTrigger** - GSAP plugin for scroll-based animations
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd image-zoom-scroll
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## 🚀 Usage

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Adding More Images

To add more images, simply edit the `images` array in `src/main.ts`:

```typescript
const images = [
  { src: "public/img_chair-1.png", alt: "Chair 1" },
  { src: "public/img_chair-2.png", alt: "Chair 2" },
  // Add more images here
  { src: "public/your-image.png", alt: "Your Image" },
];
```

Place your images in the `public/` directory and reference them in the configuration.

### Adjusting Animation Parameters

In `src/main.ts`, you can customize:

- **Scale range**: Change the `scale` values in the GSAP animation (currently `0.1` to `1.1`)
- **Scroll distance**: Modify the height values in the scroll elements (currently `2000px`)
- **Animation easing**: Change the `ease` property (currently `"sine.inOut"`)

Example:

```typescript
gsap.to(imgElement, {
  scale: 1.5, // Increase max zoom
  ease: "power2.inOut", // Different easing
  scrollTrigger: {
    trigger: scrollElement,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
```

## 📁 Project Structure

```
image-zoom-scroll/
├── public/          # Static assets (images)
├── src/
│   ├── main.ts      # Main application logic
│   ├── style.css    # Global styles
│   └── counter.ts   # Example file (can be removed)
├── index.html       # HTML entry point
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Dependencies and scripts
```

## 📝 Learning Resources

If you're learning from this project, here are some helpful resources:

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

Since this is a learning project, feel free to:

- Fork the repository
- Experiment with different animation styles
- Add new features
- Share improvements via pull requests

## 📄 License

This project is open source and available for anyone to use, modify, and learn from.

## ⚠️ Note

This project is created **for learning purposes only**. While you're free to use this code, please consider it as educational material to understand scroll-triggered animations and GSAP integration.

---

Happy learning! 🎓
