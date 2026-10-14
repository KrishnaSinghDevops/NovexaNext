# NovexaNext SEO handover guide

## Important before deploying
The exact production URL was not included in the supplied ZIP. This package therefore uses the visible placeholder `https://YOUR-VERCEL-DOMAIN.vercel.app`. **Replace every occurrence with your actual live domain** (including a custom domain if one is connected) in all HTML canonical/OG/schema URLs, `robots.txt`, and `sitemap.xml` before publishing. Do not submit the placeholder URLs to Google.

## What changed
- Added page-specific title tags and meta descriptions.
- Added a focused keyword map per page (keywords are also noted in each page's HTML).
- Added canonical URLs, index/follow directives, Open Graph and X/Twitter sharing metadata.
- Added basic JSON-LD `WebPage` structured data that references the NovexaNext site and organization.
- Added `robots.txt` and `sitemap.xml` for crawling/discovery.
- Corrected the PNG favicon MIME type where applicable.
- Preserved existing Google site-verification tags and the existing page markup, CSS and JavaScript. No layout or styling changes were intended.
- Added explanatory `<!-- SEO: ... -->` comments beside the inserted SEO code.

## Keyword research and page mapping
This is a qualitative, search-intent-led map based on the actual services and page copy in the supplied website, plus a review of current public keyword guidance and comparable service pages. No paid keyword-tool or Google Ads account was available, so **do not treat these as verified monthly search volumes or keyword-difficulty scores**.

| Page | Primary target | Supporting terms | Intent |
|---|---|---|---|
| Home | web development and digital solutions | NovexaNext, web development services, custom software development, digital marketing services | Commercial / brand |
| Services | digital services | web development services, custom software development services, digital marketing services, freelance support | Commercial |
| Web Development | web development services | responsive website development, business website development, website developer | Commercial |
| Software Development | custom software development services | custom software development, business software development, software solutions | Commercial |
| Digital Marketing | digital marketing services | online marketing support, digital brand visibility, digital marketing consultant | Commercial |
| Freelancing | freelance digital services | freelance project support, freelance web development, digital project assistance | Commercial |
| About | about NovexaNext | digital solutions provider, web development approach | Brand / trust |
| Profile | Krishna Singh digital developer | Krishna Singh, NovexaNext, digital developer profile | Personal brand |
| Contact | contact NovexaNext | web development enquiry, software development enquiry, digital marketing project | Transactional |

### Keyword research notes
- Use one distinct primary intent per page to reduce keyword cannibalisation.
- The target phrases above are aligned to visible page content; avoid adding unsupported city names, guarantees, client counts, pricing, or service claims.
- Search volume and competition vary by geography and over time. Validate priorities in Google Search Console and Google Keyword Planner after launch.
- Avoid keyword stuffing. Use natural language in page copy, headings, image alt text and internal links. The `meta keywords` tag is included only as a commentable keyword inventory; Google Search does not use it for ranking.

## Step-by-step deployment

1. **Back up first.** Keep the original ZIP/repository branch so you can roll back.
2. Extract this ZIP and open the `NovexaNext_SEO` folder in VS Code.
3. Find `YOUR-VERCEL-DOMAIN` in the project (VS Code: `Ctrl+Shift+F`) and replace it with your actual live hostname, without a trailing slash. Example format only: `https://your-project.vercel.app`.
4. Check that the canonical on each page points to the correct page URL and that the homepage points to `/`.
5. Verify the existing Google verification token in `index.html` still matches the property in Google Search Console. Tokens on other pages were retained, not replaced.
6. Test locally by opening `index.html` and the service pages. Confirm the visuals, navigation, forms, and assets behave as before.
7. Upload the updated project files to the same GitHub repository/branch connected to Vercel. Do not upload the `.git` folder from the old ZIP; this package intentionally excludes Git history.
8. Wait for the Vercel deployment to complete. Visit the live homepage, each HTML page, `/robots.txt`, and `/sitemap.xml`. Confirm none show the placeholder domain.
9. In Google Search Console, open **URL Inspection**, test the live homepage and important service URLs, then click **Request Indexing** where available.
10. In Search Console, submit `https://YOUR-REAL-DOMAIN/sitemap.xml` under **Sitemaps**. Replace the example with your real domain.
11. Monitor **Pages / Indexing**, **Core Web Vitals**, and **Performance / Search results** weekly. Fix reported canonical, crawl, mobile usability, or indexing issues.

## Important limitations and follow-up
- SEO setup cannot guarantee indexing or rankings. Google decides whether and when a page is indexed.
- `robots.txt` and sitemap help discovery; they do not force indexing.
- The sitemap uses the current static HTML page list. Update it whenever pages are added, removed, or their URLs change.
- The contact page copy says project enquiry, but make sure the contact form backend works and privacy/contact details are correct.
- For richer social cards, use a dedicated 1200×630 share image and replace the logo image URL in Open Graph/Twitter metadata. This is optional and does not change the page layout.
- Run Google Rich Results Test / Schema Markup Validator and PageSpeed Insights after deployment.
- Consider adding useful FAQ or case-study content only when it genuinely answers customer questions; do not add thin keyword-only pages.

## Research references reviewed
- Media Search Group, “Top Web Development & Web Design Keywords for SEO (2026 Updated List)” — https://www.mediasearchgroup.com/industries/web-development-keywords-for-seo.php
- Raunak Singh, “How to Do Keyword Research for Indian Businesses in 2026” — https://raunaksingh.co.in/blog/keyword-research-india-2026
- Current service-page examples were reviewed for page-intent separation; competitor wording should not be copied.

