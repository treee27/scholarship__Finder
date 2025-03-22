# scholarship__Finder
# Scholarship Finder

**Scholarship Finder** is a web application designed to help students discover and apply for scholarships based on various filters such as type, eligibility, category, gender, and deadlines. Built with HTML, CSS, and JavaScript, it features a responsive design, an interactive chatbot, and social sharing capabilities.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Scholarship Finder provides an intuitive interface for users to browse a curated list of scholarships, filter them based on specific criteria, and access detailed information including application links. It includes a chatbot for assistance, a dark mode toggle, and options to save scholarships or share them via WhatsApp.

The project is designed to be user-friendly, visually appealing, and responsive across devices, with a focus on accessibility and interactivity.

## Features
- **Scholarship Listings**: Displays a list of scholarships with details like type, deadline, eligibility, category, and gender.
- **Filtering Options**: Filter scholarships by name, type (merit/need), deadline (upcoming/past), eligibility (GPA/financial), category (e.g., SC/ST/OBC), and gender (ALL/FEMALE).
- **Interactive Details Page**: Click a scholarship to view detailed information and an "Apply Now" link (disabled if expired).
- **Days Remaining Indicator**: Shows the number of days until a scholarship deadline, with an "Expired" label for past deadlines.
- **Save Functionality**: Save scholarships to local storage with a visual "Saved" state.
- **WhatsApp Sharing**: Share scholarship details via WhatsApp with a pre-formatted message.
- **Chatbot**: A simple AI assistant to answer questions about scholarships (e.g., deadlines, female-specific options).
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Adapts to various screen sizes (desktop, tablet, mobile).
- **Animations**: Includes hover effects, transitions, and a pulsing "days remaining" animation.

## Installation
To run the Scholarship Finder locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/scholarship-finder.git
2. **Navigate to the Project Directory**:
   ```bash
   cd scholarship-finder

3. **Open the HTML File:**
Open index.html in a web browser (e.g., Chrome, Firefox) by double-clicking it or using a local server.
4. **Optional:** Use a Local Server: For a better development experience (e.g., to avoid CORS issues with external resources), use a local server:
With Node.js: Install http-server (npm install -g http-server), then run http-server in the project directory and visit http://localhost:8080.
With Python: Run python -m http.server 8000 and visit http://localhost:8000.

# Usage

1. Browse Scholarships: Open the application to see the full list of scholarships.
2. Apply Filters: Use the filter section to narrow down scholarships by search term, type, deadline, eligibility, category, or gender.
3. View Details: Click a scholarship to see more details and access the application link.
4. Save Scholarships: Click the "Save" button to store a scholarship locally (persists across sessions).
5. Share: Use the "Share on WhatsApp" button to send scholarship details to contacts.
6. Chatbot Assistance: Click the chat bubble (bottom-right) to ask questions like "Hi," "How to apply," or "Female scholarships."
7. Toggle Dark Mode: Click the "Dark" button in the footer to switch themes.

# File Structure

scholarship-finder/

├── index.html       # Main HTML file containing structure, styles, and scripts

├── README.md        # This file

└── (No additional assets as all styles and scripts are inline)
# Technologies Used
HTML5: Structure and semantics.

CSS3: Styling, animations, and responsive design (flexbox, grid, media queries).

JavaScript: Interactivity, filtering, local storage, and chatbot logic.

Google Fonts: Poppins font for typography.

Cloudflare: Email obfuscation script for contact information.
# Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a pull request with a description of your changes.
