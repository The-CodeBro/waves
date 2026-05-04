# 🌊 Waves — Web Design Agency

A modern, responsive web design agency website built with clean HTML, CSS, and vanilla JavaScript. Waves is crafted with a focus on performance, accessibility, and visual polish — reflecting the same standards we bring to every client project.

---

## 🔗 Live Demo

> https://waves-web.netlify.app/

---

## 📸 Preview

> Add a screenshot of your homepage here after deployment.
> Example: `![Waves Homepage](./assets/preview.png)`

---

## 📁 Project Structure

```
waves/
│
├── pages/
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── contact.html        # Contact page
│   └── thankyou.html       # Thank you page (post form submission)
│
├── scripts/
│   └── utils/
│       ├── date.js         # Date utility functions
│       ├── footer.js       # Footer logic
│       ├── formValidator.js # Contact form validation
│       ├── main.js         # Main script entry point
│       └── menu.js         # Hamburger/navigation menu logic
│
├── styles/
│   ├── global.css          # Global/shared styles
│   ├── header.css          # Header and navigation styles
│   ├── footer.css          # Footer styles
│   ├── home.css            # Home page styles
│   ├── about.css           # About page styles
│   ├── services.css        # Services page styles
│   ├── contact.css         # Contact page styles
│   └── thankyou.css        # Thank you page styles
│
├── icons/                  # SVG / icon assets
├── images/                 # General image assets
├── logos/                  # Brand logo files
│
├── index.html              # Home page (entry point)
└── README.md               # Project documentation
```

---

## 🛠️ Technologies Used

| Technology         | Purpose                                    |
| ------------------ | ------------------------------------------ |
| HTML5              | Page structure and semantics               |
| CSS3               | Styling, animations, and responsive layout |
| Vanilla JavaScript | Hamburger menu, scroll reveal animations   |
| Google Fonts       | Montserrat                                 |
| ZonaPro CDN Font   | Zona Pro                                   |
| FormSubmit         | Contact form handling and email delivery   |

---

## ✨ Features

- ✅ Fully responsive across all screen sizes (mobile, tablet, desktop)
- ✅ Sticky navigation bar with active link state
- ✅ Contact form with FormSubmit integration
- ✅ Custom thank you page redirect after form submission
- ✅ Spam protection via FormSubmit honeypot
- ✅ Consistent design system (colors, typography, spacing) across all pages
- ✅ Decorative SVG wave illustrations
- ✅ CSS-based only animation on thank you page

---

## 🎨 Design System

**Colors**

- Background: #fff;
- Black: #000;
- Purple color: #8447e9;
- Light Purple: #ede9fe;
- Dark Purple--: #5b21b6;
- Gray: #494949;
- Light Gray: #b9b3b3;

**Fonts**

- Font 1 [Montesserat]("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap") — Bold, 700/800
- Font 2: [ZonaPro]("https://fonts.cdnfonts.com/css/zona-pro") — Regular/Medium

---

## 🚀 Getting Started

To run this project locally:

1. **Clone or download** the repository

   ```bash
   git clone https://github.com/yourusername/waves.git
   ```

2. **Open in VS Code**

   ```bash
   cd waves
   code .
   ```

3. **Launch with Live Server**
   - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
   - Right-click `index.html` and select **"Open with Live Server"**

> No build tools, no dependencies, no installs — it's plain HTML/CSS/JS.

---

## 📬 Contact Form Setup (FormSubmit)

The contact form uses [FormSubmit.co](https://formsubmit.co) for backend-free email handling.

To configure it for your own email:

1. Replace the action URL in your form:

   ```html
   <form action="https://formsubmit.co/your@email.com" method="POST"></form>
   ```

2. Update the redirect URL in `_next` to your live domain:

   ```html
   <input
     type="hidden"
     name="_next"
     value="https://yourdomain.com/thankyou.html"
   />
   ```

3. Submit the form once — FormSubmit will send a **confirmation email** to activate your address.

> ⚠️ The `_next` redirect only works on a live hosted URL, not on `localhost`.

---

## 📄 Pages Overview

### `index.html` — Home

The main landing page introducing Waves with a hero section, services overview, and a call-to-action that drives visitors further into the site.

### `services.html` — Services

A dedicated page detailing everything Waves offers — from responsive website development and UI/UX implementation to performance optimization and custom interactive interfaces.

### `about.html` — About

Full agency profile including the brand story, mission, 5-step work approach, why choose Waves section, and the long-term vision for the agency.

### `contact.html` — Contact

The main contact page featuring the FormSubmit-powered enquiry form where visitors can submit their name, email, message, and attachments to get in touch with the team.

### `thankyou.html` — Thank You

Confirmation page shown automatically after a user submits the contact form. Includes a success message, email inbox/spam reminder, and navigation back to the site.

---

## 🙌 Credits & Acknowledgements

- Icons: Custom inline SVGs
- Icons Library: [Font Awesome](https://fontawesome.com) — Free version (CC BY 4.0 License)
- Form handling: [FormSubmit.co](https://formsubmit.co)
- Fonts: [Google Fonts](https://fonts.google.com) Montserrat, sans-serif
- Fonts: [CDN Fonts](https://www.cdnfonts.com) — Zona Pro

---

## 👤 Author

The Code Bro

- Email: `twittercodebro@gmail.com`
- Twitter: [@the_code_bro](https://x.com/the_code_bro)
- GitHub: [@The-CodeBro](https://github.com/The-CodeBro)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

> _"Let's create something that flows — beautifully and effectively."_ 🌊
