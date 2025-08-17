# Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Perfect for software engineering intern applications and showcasing your projects.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive**: Smooth hover effects and transitions using Framer Motion
- **Professional**: Perfect for job applications and showcasing your work
- **Fast**: Optimized performance with modern React practices

## 📱 Pages

1. **Home/Work Page**: Project showcase with filtering and detailed modals
2. **About Page**: Personal information, skills, and experience
3. **Contact Page**: Contact form and social media links
4. **Resume Page**: Professional resume display with download option

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library

## 🎨 Design Features

- Gradient backgrounds and modern color schemes
- Card-based layouts with hover effects
- Smooth page transitions and animations
- Professional typography and spacing
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Customization

### Personal Information

1. **Update your name**: Replace "Your Name" in `src/components/Navbar.tsx`
2. **Add your projects**: Edit the projects array in `src/pages/Home.tsx`
3. **Update contact info**: Modify contact details in `src/pages/Contact.tsx` and `src/pages/Resume.tsx`
4. **Customize about section**: Edit the content in `src/pages/About.tsx`

### Styling

- Colors: Modify the color scheme in `tailwind.config.js`
- Fonts: Update font families in `src/index.css`
- Animations: Adjust animation settings in Framer Motion components

### Content

- **Projects**: Add your real projects with images, descriptions, and links
- **Experience**: Update with your actual work experience
- **Skills**: Modify the skills section to match your expertise
- **Education**: Add your educational background

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   └── ProjectModal.tsx # Project detail modal
├── pages/              # Page components
│   ├── Home.tsx        # Home/Work page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Resume.tsx      # Resume page
├── App.tsx             # Main app component
└── index.css           # Global styles
```

## 🎯 Key Features for Job Applications

- **Project Showcase**: Highlight your best work with detailed descriptions
- **Skills Display**: Organized by category for easy scanning
- **Professional Resume**: Clean, downloadable format
- **Contact Information**: Multiple ways for recruiters to reach you
- **Responsive Design**: Looks great on all devices

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port with `PORT=3001 npm start`
2. **Build errors**: Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. **TypeScript errors**: Check for proper type definitions and imports

### Performance Tips

- Optimize images before adding to projects
- Use lazy loading for project images
- Minimize bundle size by removing unused dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding! 🚀**
