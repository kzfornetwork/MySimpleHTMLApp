# Project Blueprint

## Overview
A simple, modern Lottery Number Generator web application.

## Implemented Features
- **Lottery Number Generation**: Generates 6 unique numbers (1-45).
- **Sorted Display**: Numbers are automatically sorted in ascending order.
- **Modern UI**: Clean, responsive design with polished typography and spacing.
- **Theme Support (Dark/Light Mode)**: 
    - Toggle between Light and Dark themes.
    - Persistent theme preference using `localStorage`.
    - Smooth CSS transitions between themes.
- **AI Smartphone Quality Inspection**: 
    - Upload an image of a smartphone to test for "OK" or "NG" (Defective) status.
    - Powered by a custom Teachable Machine model.
    - High-impact visual feedback with confidence scores.
- **Partnership Inquiry Form**: 
    - A simple contact form for potential partners.
    - Integrated with Formspree for backend processing.
    - Fully themed and mobile-responsive.

## Technical Details
- **HTML5**: Semantic structure.
- **CSS3**: Modern styling using CSS Variables (Custom Properties), Flexbox, and transitions.
- **JavaScript (ES6+)**: 
    - DOM manipulation for dynamic content.
    - Set object for unique number generation.
    - `localStorage` for theme state persistence.
    - `FileReader` for client-side image processing.
- **Teachable Machine & TensorFlow.js**: AI model for image classification.
- **Formspree Integration**: Backend-less form handling for inquiries.

## Project Structure
- `index.html`: Main structure and entry point.
- `style.css`: All styling, including theme-specific variables.
- `main.js`: Application logic and theme switching functionality.
