# Quick Start Guide

## Setup (First Time Only)

```bash
# 1. Install dependencies
npm install

# 2. Add your profile photo
# Place your photo in: public/images/profile.jpg

# 3. Update your info
# Edit: src/data/portfolioData.js
```

## Run Locally

```bash
npm start
```
Opens at http://localhost:3000

## Update Content

**Single file to edit**: `src/data/portfolioData.js`

### Add Project
```javascript
projects: [
  {
    name: "New Project",
    technologies: ["React", "Node.js"],
    description: ["Feature 1", "Feature 2"],
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/user/repo"
  },
  // ... rest of projects
]
```

### Remove Project
Delete the project object from the array

### Update Project URL (when going live)
```javascript
liveUrl: "https://your-project.com"  // Add or update this
```

## Deploy

### Option 1: Automatic (GitHub Actions)
```bash
git add .
git commit -m "Updated portfolio"
git push
```
Deploys automatically in 2-3 minutes!

### Option 2: Manual
```bash
npm run deploy
```

## File Structure

```
portfolio/
├── src/data/portfolioData.js  ← UPDATE THIS FILE!
├── public/images/             ← Add your photo here
├── package.json
└── README.md
```

That's it! All changes happen in portfolioData.js.
