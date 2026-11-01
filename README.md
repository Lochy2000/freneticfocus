# FreneticFocus — static website

Complete editable website code, including the restored dark homepage hero, corrected house icon, service pages, self-hosted fonts and imagery. No WordPress, database, Node installation, API key or build process is required.

## Upload to GitHub

1. Extract this ZIP.
2. Create a repository in your GitHub account (for example, frenetic-focus-static).
3. Open the repository and choose **Add file → Upload files**.
4. Upload the contents of this folder, including the **dist** folder, README and LICENSE. Do not upload the ZIP itself. Commit the files.
5. Check that **dist/index.html** exists in the repository.

A new repository keeps your old WordPress theme intact. GitHub may need the font/image folders uploaded in separate batches because its web uploader limits file batches. Alternatively, use GitHub Desktop to publish this folder.

## Deploy with Cloudflare Pages

In your own Cloudflare account:

1. Open **Workers & Pages**, choose **Create application**, then the **Pages** option and **Connect to Git** (wording may vary).
2. Connect GitHub and select the repository you uploaded.
3. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | main |
| Framework preset | None |
| Build command | Leave empty |
| Build output directory | dist |
| Root directory | Leave at repository root |

4. Deploy and test the generated pages.dev address. Check all four main pages, images and mobile navigation.
5. In the Pages project's **Custom domains**, add **freneticfocus.com** and follow Cloudflare's instructions. For an apex domain, Cloudflare Pages requires the domain to use Cloudflare nameservers. The registration can stay at GoDaddy. Copy/review existing DNS, particularly email records, before switching nameservers.
6. Add **www.freneticfocus.com** as well and choose one address as primary, redirecting the other through Cloudflare's documented redirect configuration.
7. Only change live DNS after the Pages deployment works.

Do not use the IP addresses or ownership-verification TXT records previously supplied for the ChatGPT-hosted version; those belong to that service. Use the records Cloudflare supplies for your own Pages project.

Every new commit to the connected production branch automatically deploys. The current ChatGPT-hosted copy is independent and remains unchanged by this export.

Official instructions:
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

## Edit and preview locally

Open the folder in VS Code. Use the Live Server extension with dist as the web root, or, if Python is installed, run:

```powershell
python -m http.server 8000 --directory dist
```

Then open http://localhost:8000 in your browser. Do not rely on double-clicking index.html; directory links work best through a local server.

## Files to edit

| File | Purpose |
| --- | --- |
| dist/index.html | Homepage |
| dist/about/index.html | About page and biography |
| dist/services/index.html | Service descriptions and feature lists |
| dist/contact/index.html | Contact page and LinkedIn link |
| dist/privacy/index.html | Privacy wording |
| dist/style.css | Layout, colours, typography and responsive styles |
| dist/main.js | Mobile menu |
| dist/assets/ | Local images, icons and fonts |
| dist/fonts.css | Local font declarations |
| dist/_headers | Cloudflare security headers |
| dist/sitemap.xml | Search sitemap |

Canonical and social-image URLs in this export use https://freneticfocus.com. Update them and sitemap.xml if using a different permanent domain. All page navigation uses relative paths.

## Content and assets

Business descriptions and biography derive from the original theme defaults, because its live database was unavailable. Confirm factual claims and the LinkedIn URL with the business. Contact is currently through LinkedIn only; there is no form or email-delivery backend.

Workshop photo: FORTYTWO / Unsplash, https://unsplash.com/photos/person-holding-yellow-sticky-notes-MDu-53qRVr4 (Unsplash License). This is illustrative photography, not a claim that it depicts Lara or a FreneticFocus event.

Original theme and retained images: https://github.com/Lochy2000/Frenetic-Focus — GPL-2.0-or-later as declared by the original theme. This export retains that licence for derived code; third-party images and fonts retain their respective licences. Lora and Poppins licence files are included in dist/assets/fonts/. Decorative SVG service icons are included locally.

No hosting credentials, Git metadata or ChatGPT deployment configuration are included.
