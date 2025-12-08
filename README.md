# Brindle World - Professional Portfolio Website

A clean, professional resume-style static website showcasing a kitchen design portfolio with an interactive slideshow.

## Features

- **Landing Section**: Profile photo, bio, education, and contact links
- **Experience Section**: Professional experience timeline
- **Interactive Slideshow**: Custom kitchen design portfolio with navigation controls
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **GitHub Pages Ready**: Deploy directly to GitHub Pages

## Customization

### Update Profile Information

Edit the profile section in `index.html`:

- Replace "Lorem Ipsum" with the actual name
- Update credentials (AIA, NCARB)
- Modify education entries
- Update contact email and LinkedIn URL

### Customize Slideshow Content

Edit the `slideshowData` array in `brindle.js`:

```javascript
const slideshowData = [
  {
    type: "intro",
    title: "Your Intro Title",
    description: "Your intro description...",
  },
  {
    type: "project",
    title: "Project Title",
    description: "Project description...",
    image: "images/your-image.jpg",
  },
  // Add more slides...
];
```

### Add Your Images

1. Place your kitchen design images in the `images/` folder
2. Update the image paths in the `slideshowData` array
3. Replace `brindleProfile.jpg` with the actual profile photo

### Styling

All styles are in `brindle.css`. Key color variables are defined at the top:

```css
:root {
  --primary-green: #2d5016;
  --light-beige: #f5f1e8;
  --warm-beige: #ebe6d9;
  /* ... */
}
```

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch (usually `main` or `master`)
4. Your site will be live at `https://yourusername.github.io/repository-name/`

## File Structure

```
brindlePower/
├── index.html          # Main HTML file
├── brindle.css         # Stylesheet
├── brindle.js          # JavaScript and slideshow logic
├── images/             # Image assets
│   ├── brindleProfile.jpg
│   └── kitchen_*.jpg
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Slideshow logic and interactivity
- **Swiper.js**: Lightweight slideshow library (loaded via CDN)

## Browser Support

Works in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for personal use.
