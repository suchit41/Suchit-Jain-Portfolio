# How to Update Your Portfolio

This guide shows you how to quickly update your portfolio content.

## Main Configuration File

**File to edit**: `/src/data/portfolioData.js`

This single file controls ALL content on your portfolio. No need to touch any other files!

---

## Adding/Removing Projects

### To Add a New Project:

1. Open `/src/data/portfolioData.js`
2. Find the `projects` array
3. Add a new object:

```javascript
{
  name: "Your New Project Name",
  technologies: ["React", "Node.js", "MongoDB"],
  description: [
    "Key feature or achievement 1",
    "Key feature or achievement 2",
    "Key feature or achievement 3"
  ],
  liveUrl: "https://your-live-demo.com",    // Add when project is live
  githubUrl: "https://github.com/user/repo"  // Add your GitHub repo
}
```

### To Remove a Project:

Simply delete the entire project object from the array.

### To Update Project Links:

```javascript
liveUrl: "https://new-demo-url.com",     // Update or add
githubUrl: "https://github.com/new/repo"  // Update or add
```

Leave empty strings `""` if project is not live yet or no GitHub repo.

---

## Updating Experience

### To Add a New Job:

Add to the beginning of the `experience` array:

```javascript
{
  title: "Your Job Title",
  company: "Company Name",
  period: "Start – End (or Present)",
  current: true,  // Set to false for past jobs
  achievements: [
    "What you accomplished",
    "Technologies you used",
    "Impact you made"
  ]
}
```

---

## Updating Skills

Add or remove from any category:

```javascript
skills: {
  "Frontend": ["React.js", "Vue.js", "Next.js"],  // Add Vue.js, Next.js
  "Backend": ["Node.js", "Django"],                // Add Django
  "New Category": ["Skill 1", "Skill 2"]          // Add entire new category
}
```

---

## Updating Personal Info

```javascript
personal: {
  email: "newemail@example.com",           // Update email
  phone: "+91 9876543210",                 // Update phone
  linkedin: "https://linkedin.com/in/new", // Update LinkedIn
  profile: "Updated bio..."                 // Update bio
}
```

---

## Updating Achievements

```javascript
achievements: [
  "New Award I just won",           // Add to beginning
  "Star Of Business Award - Accenture",
  // ... rest of achievements
]
```

---

## Updating Profile Photo

1. Add your photo to `/public/images/`
2. Name it `profile.jpg` or `profile.png`
3. Update in portfolioData.js:
```javascript
photo: "/images/profile.jpg"  // or profile.png
```

---

## After Making Changes

### Local Testing:
```bash
npm start
```
Visit http://localhost:3000 to preview changes

### Deploy to GitHub Pages:
```bash
git add .
git commit -m "Updated portfolio content"
git push
```

The site will automatically update in 2-3 minutes!

---

## Quick Reference

| What to Update | File | Line(s) |
|----------------|------|---------|
| Projects | `/src/data/portfolioData.js` | 65-100 |
| Experience | `/src/data/portfolioData.js` | 23-63 |
| Skills | `/src/data/portfolioData.js` | 13-21 |
| Personal Info | `/src/data/portfolioData.js` | 2-11 |
| Achievements | `/src/data/portfolioData.js` | 120-127 |
| Profile Photo | `/public/images/` | Add file here |

---

## Common Tasks

### Add a live project link:
Find your project and add:
```javascript
liveUrl: "https://your-project.com"
```

### Hide a project temporarily:
Add `// ` before the project object to comment it out:
```javascript
// {
//   name: "Hidden Project",
//   ...
// }
```

### Reorder projects:
Just move the project objects around in the array - top projects show first!

---

## Need Help?

- Check README.md for detailed instructions
- All changes are in `/src/data/portfolioData.js`
- Test locally with `npm start` before deploying
- Deploy with `git push` (automatic) or `npm run deploy`

