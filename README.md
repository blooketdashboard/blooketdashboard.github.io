# Blooket Dashboard Teacher Guide

Independent English-language guide for educators. It is not affiliated with Blooket LLC and does not collect account credentials.

## Deploy to GitHub Pages

1. Create a repository named `blooketdashboard.github.io` under the `blooketdashboard` GitHub account.
2. Push the contents of this `github/` directory to the repository's `main` branch root.
3. In repository Settings → Pages, select deployment from the `main` branch root.
4. Confirm that `https://blooketdashboard.github.io/` and `/sitemap.xml` load over HTTPS.

## Audit report

- Main-content word count: 2,621 words (HTML tags excluded); requirement is more than 2,200.
- SEO: one H1 titled `Blooket Dashboard`, 18-character title, description, canonical, Open Graph/Twitter metadata, sitemap and robots file present.
- Structured data: JSON-LD graph includes Organization, WebSite, WebPage, TechArticle, BreadcrumbList, FAQPage, HowTo, ImageObject and SoftwareApplication. `wordCount` matches the local main-content count; FAQ entries mirror visible answers.
- Accessibility/responsive implementation: semantic landmarks, skip link, visible keyboard focus, native FAQ details, responsive layouts, mobile nav, overflow-wrapped table and reduced-motion handling are present in source.
- Safety and originality: independent-guide disclaimer, no credential fields, official external destinations only, and teacher-focused copy distinct from the companion player guide.
- Outbound actions start as inert `<span>` placeholders and become `<a>` links through the separate `external-links.js` file; canonical, social and JSON-LD metadata URLs remain declarative metadata.
- Not verified in this workspace: remote-link HTTP status, W3C/schema hosted validators, Lighthouse scores, contrast measurements, screen-reader/manual keyboard pass, deployed URL and real-device screenshots. Run those checks after deployment; do not treat source inspection as a substitute.
