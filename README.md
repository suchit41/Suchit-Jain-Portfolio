# Suchit Jain - Portfolio Website

A modern, responsive portfolio website built with React.js and deployed on GitHub Pages. Easily customizable and built for optimal performance.

## Features

- Modern, clean design with smooth animations
- Fully responsive across all devices
- Dark/Light theme toggle
- Dynamic content management through a single configuration file
- Smooth scrolling navigation
- SEO optimized
- Fast loading with optimized performance
- GitHub Pages ready deployment

## Live Demo

Visit: [https://suchit41.github.io/portfolio](https://suchit41.github.io/portfolio)

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/suchit41/portfolio.git
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

The portfolio will open at [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Update Your Profile Photo

Replace the placeholder image:
- Add your photo to `/public/images/profile.jpg` or `/public/images/profile.png`
- Update the path in `/src/data/portfolioData.js` (line 9)
- Recommended: Square image (500x500px or larger), under 500KB

### 2. Update Your Information

All your portfolio content is managed in one file: `/src/data/portfolioData.js`

#### Personal Information
Edit the `personal` object:
```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  photo: "/images/profile.jpg",
  profile: "Your professional summary..."
}
```

#### Skills
Add or remove skills in the `skills` object:
```javascript
skills: {
  "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
  // Add more categories as needed
}
```

#### Experience
Add or remove jobs in the `experience` array:
```javascript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start Date – End Date",
    current: true, // Set to true if currently working here
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

#### Projects
Add or remove projects in the `projects` array:
```javascript
projects: [
  {
    name: "Project Name",
    technologies: ["Tech 1", "Tech 2"],
    description: [
      "Description point 1",
      "Description point 2"
    ],
    liveUrl: "https://project-demo.com", // Optional
    githubUrl: "https://github.com/user/repo" // Optional
  }
]
```

**Dynamic Project Management:**
- Add new projects by adding objects to the array
- Remove projects by deleting objects from the array
- Mark projects as live by adding the `liveUrl`
- Add GitHub links by updating `githubUrl`

#### Achievements
Simply add or remove items from the `achievements` array:
```javascript
achievements: [
  "Achievement 1",
  "Achievement 2"
]
```

#### Publications
Add or remove publications in the `publications` array:
```javascript
publications: [
  {
    title: "Publication Title",
    conference: "Conference Name",
    location: "Location",
    year: "2024",
    pages: "pp.1-10",
    doi: "10.xxxx/xxxxx"
  }
]
```

### 3. Update GitHub Repository Settings

Before deploying, update the `homepage` in `package.json`:
```json
"homepage": "https://your-username.github.io/your-repo-name"
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/suchit41/portfolio.git
git push -u origin main
```

2. Go to your GitHub repository settings:
   - Navigate to Settings > Pages
   - Under "Build and deployment" > "Source"
   - Select "GitHub Actions"

3. The workflow will automatically deploy on every push to main branch

### Method 2: Using gh-pages package

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

This will build and deploy to the `gh-pages` branch automatically.

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.svg         # Your profile photo (replace with .jpg/.png)
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Publications.js & Publications.css
│   │   ├── Achievements.js & Achievements.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── data/
│   │   └── portfolioData.js    # Main configuration file - UPDATE THIS!
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── package.json
└── README.md
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm run deploy`
Builds and deploys the app to GitHub Pages

### `npm test`
Launches the test runner

## Customization Tips

### Colors and Theme
Edit CSS variables in `/src/index.css` (lines 1-20) to change colors:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #10b981;
  /* Modify these values */
}
```

### Adding New Sections
1. Create a new component in `/src/components/`
2. Import and add it to `/src/App.js`
3. Add data structure to `/src/data/portfolioData.js`
4. Add navigation link to Navbar component

### Font Changes
Update the Google Fonts import in `/public/index.html` and font-family in `/src/index.css`

## SEO Optimization

The portfolio includes:
- Meta tags for search engines
- Open Graph tags for social media
- Semantic HTML structure
- Sitemap ready
- Mobile-optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading images
- Code splitting
- Minified production build
- Optimized animations
- Fast page load times

## Troubleshooting

### Deployment Issues
- Ensure `homepage` in `package.json` matches your GitHub Pages URL
- Check GitHub Actions logs for build errors
- Verify GitHub Pages is enabled in repository settings

### Local Development Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 14+)

## License

This project is open source and available under the MIT License.

## Contact

Suchit Jain - [Jainsuchit12@gmail.com](mailto:Jainsuchit12@gmail.com)

Portfolio: [https://suchit41.github.io/portfolio](https://suchit41.github.io/portfolio)

---

Built with React.js and deployed on GitHub Pages
