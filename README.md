# Hotel Inani Long Bay - Modern Landing Page

A stunning, modern landing page for Hotel Inani Long Bay, a luxury beachfront resort in Cox's Bazar, Bangladesh.

## 🌟 Features

- **Modern Design**: Clean, sexy, and professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Color Palette**: Custom colors based on hotel branding
  - Deep Ocean Blue (#1e6eb5 / #2980c5)
  - Slate/Dark Grey (#4a4a4a)
  - Warm Sunset Orange (#e05a1e)
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Contact Form**: Functional contact form with email integration
- **Hero Section**: Stunning hero with parallax effects
- **Room Showcase**: Beautiful room cards with pricing
- **Amenities Display**: Comprehensive amenities grid
- **Mobile Friendly**: Optimized for mobile devices with hamburger menu

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Enjoy the website**!

No build process required - it's a simple static website.

## 📁 Project Structure

```
Hotel Inani Long Bay/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Elements

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability

### Color Scheme
- **Primary**: Deep Ocean Blue (#1e6eb5)
- **Secondary**: Slate Grey (#4a4a4a)
- **Accent**: Warm Sunset Orange (#e05a1e)
- **Neutral**: White and various shades of gray

### Components
- **Navigation**: Fixed navbar with scroll effects
- **Hero Section**: Full-screen with overlay and call-to-action buttons
- **About Section**: Hotel information with statistics
- **Rooms Section**: Interactive room cards with pricing
- **Amenities**: Icon-based amenity grid
- **Contact**: Functional contact form with validation
- **Footer**: Comprehensive footer with newsletter signup

## ⚙️ Contact Form Setup

The contact form uses EmailJS for email functionality. To enable email sending:

1. **Sign up for EmailJS** at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create a service** and email template
3. **Update the script.js** file with your credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
   
   // In the form submission handler:
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
       // template parameters
   });
   ```

### Alternative Setup
If you prefer not to use EmailJS, the form includes a fallback simulation that logs form data to the console. You can replace this with your own backend API call.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

1. **Navigation Bar**: Fixed navigation with mobile menu
2. **Hero Section**: Eye-catching landing with beach imagery
3. **About Hotel**: Introduction and key statistics
4. **Rooms & Suites**: Room showcase with pricing
5. **Amenities**: Comprehensive facility listing
6. **Contact Form**: User inquiry form
7. **Footer**: Links, newsletter, and hotel information

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎭 Animations & Interactions

- **Fade-in animations** on scroll
- **Hover effects** on cards and buttons
- **Parallax scrolling** in hero section
- **Smooth scrolling** between sections
- **Mobile menu animations**
- **Form validation feedback**

## 📧 Hotel Information

- **Location**: Inani Beach, Cox's Bazar 4750, Bangladesh
- **Phone**: +880 1995-599889
- **Email**: hom.inanilongbaycox@gmail.com
- **Check-in**: 14:00
- **Check-out**: 11:00

## 🛠️ Customization

### Changing Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #1e6eb5;
    --secondary-blue: #2980c5;
    --dark-gray: #4a4a4a;
    --sunset-orange: #e05a1e;
}
```

### Updating Content
- Edit `index.html` for text content
- Replace image URLs with your own hotel photos
- Update contact information in the footer

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `styles.css`
3. Add JavaScript functionality in `script.js`

## 📊 Performance

- **Optimized images** with lazy loading
- **Minified CSS and JS** (production)
- **Debounced scroll events**
- **Intersection Observer** for animations
- **Service Worker** support (PWA ready)

## 🔒 Security

- **Form validation** on client-side
- **XSS protection** in form handling
- **HTTPS ready** for production

## 🚀 Deployment

### Static Hosting Options
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Any static hosting service

### Deployment Steps
1. Upload all files to your hosting provider
2. Configure domain (optional)
3. Set up EmailJS for contact form
4. Test all functionality

## 📞 Support

For questions or support regarding this landing page:
- Check the code comments
- Review browser console for errors
- Test contact form functionality
- Verify responsive design on different devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Created with ❤️ for Hotel Inani Long Bay**
