# NovexaNext Website

A responsive multi-page business website built with HTML5, CSS3, JavaScript, jQuery and Bootstrap 5.

## Pages
- `index.html` — homepage with services, process, profile preview and CTA
- `about.html` — about and working philosophy
- `services.html` — services overview
- `web-development.html` — dedicated web development page
- `software-development.html` — dedicated custom software page
- `digital-marketing.html` — dedicated digital marketing page
- `freelancing.html` — freelance services page
- `profile.html` — editable personal profile page
- `contact.html` — contact form demo

## Run locally
1. Extract this ZIP file.
2. Open the `NovexaNext-Website` folder in VS Code.
3. Open `index.html` in a browser. For a smoother workflow, install the **Live Server** extension in VS Code.
4. Right-click `index.html` and choose **Open with Live Server**.

Bootstrap, Font Awesome and jQuery load from CDNs, so an internet connection is needed for those libraries and icons.

## Important customisation before publishing
1. Replace `Your Name Here`, `YN` and profile copy in `profile.html` with your real details.
2. Update social profile URLs in the shared footer and contact page. Current links are generic placeholders.
3. Add your actual email address and business contact details in `contact.html`.
4. The contact form is front-end demo behaviour only. Connect a backend/API or a trusted form service before going live.
5. Replace or refine service descriptions so they match the exact work you deliver.
6. Update SEO titles/descriptions, favicon and social sharing metadata if needed.

## Deploy with GitHub + Vercel
1. Create a GitHub repository named `novexanext-website`.
2. Upload the contents of this folder (not the ZIP itself) to the repository root.
3. On Vercel, choose **Add New → Project**, import the repository and deploy.
4. No build command is required for this static HTML website. The root directory should be `./`.
5. Each push to the connected GitHub branch can trigger a new deployment.

## Tech stack
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- jQuery 3.7
- Font Awesome 6 icons
