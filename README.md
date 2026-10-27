# Austin Witz: personal site

A small static site built with [Astro](https://astro.build). All the words live in Markdown files, so you can edit the site without touching code. It deploys to GitHub Pages automatically when you push to `main`.

## Where things are

| File | What it is |
|---|---|
| `src/content/index.md` | Home page |
| `src/content/about.md` | About page |
| `src/content/ai.md` | How I use AI at work |
| `src/content/projects/index.md` | Projects page intro and "Smaller things I've built" |
| `src/content/projects/*.md` | One file per project write-up |
| `public/Austin_Witz_Resume.pdf` | The resume the site links to |
| `public/images/projects/` | Images for project pages |
| `src/styles/global.css` | Colors, fonts, spacing (colors are at the top) |

You shouldn't need to open anything else to change content.

## Editing content

Open any `.md` file and edit the text. The block between the `---` lines at the top is the frontmatter, which the site reads for titles and cards.

**Line breaks.** A single line break in your Markdown shows up as a line break on the page. A blank line starts a new paragraph.

**Project cards.** The cards on the Home and Projects pages are built from each project's frontmatter, so they can't fall out of sync with the write-ups. The cards appear wherever `<!-- project-cards -->` sits in `index.md` and `projects/index.md`. Move that line to move the cards.

Project frontmatter:

```yaml
---
title: Auditing 20,000 SKUs with Claude    # card title and page title
summary: One or two sentences.             # card text and search-engine description
order: 1                                   # card order, lowest first
tags: [AI, Claude, Data quality]           # small labels on the project card
result: 20,000 SKUs audited                # the accent-colored line on the card (optional)
image: /images/projects/catalog-audit.png  # optional, shown at the end of the write-up
imageAlt: Diagram of the audit flow        # describe the image for screen readers
---
```

**Adding a project.** Copy an existing project file in `src/content/projects/`, rename it (the file name becomes the URL, e.g. `my-project.md` → `/projects/my-project`), and edit it. It shows up in the cards and the previous/next links on its own.

**Agent illustration.** The animated agent walkthrough (made-up product) appears wherever `<!-- agent-demo -->` sits in a project file. It's on the catalog audit page now. Move or delete that line to move or remove it. The demo itself lives in `src/components/AgentDemo.astro`.

**Adding an image.** Put the file in `public/images/projects/` and add `image:` and `imageAlt:` to the project's frontmatter, as above. To put an image in the middle of a write-up instead, use Markdown: `![What the image shows](/images/projects/file.png)`. Use made-up data only. No real Parachute data, supplier names, or internal screenshots.

**Updating the resume.** Replace `public/Austin_Witz_Resume.pdf` with a file of the same name.

**TODO notes.** Anything written as `[TODO: ...]` is highlighted in yellow on the page so it's easy to find. To list every one that's left:

```bash
npm run todos
```

They show on the live site too, so clear them (or cut the sentence) before you share the link.

## Preview locally

You need [Node.js](https://nodejs.org) 20 or newer. The first time:

```bash
npm install
```

Then start the preview server and open http://localhost:4321. Pages reload as you save files.

```bash
npm run dev
```

To check the production build (what GitHub will publish):

```bash
npm run build && npm run preview
```

## Publishing on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site every time you push to `main`.

One-time setup:

1. On GitHub, create a new **public** repository named exactly `witzaustin.github.io`. That name makes the site live at `https://witzaustin.github.io`. (Any other repo name puts it at `witzaustin.github.io/<repo-name>` and the links would need a `base` setting in `astro.config.mjs`.)
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. From this folder, push the code:

```bash
git init -b main
```

```bash
git add . && git commit -m "First version of the site"
```

```bash
git remote add origin https://github.com/witzaustin/witzaustin.github.io.git
```

```bash
git push -u origin main
```

4. Watch the **Actions** tab. When the run turns green (about a minute), the site is live.

After that, every push to `main` redeploys.

## Adding a custom domain later

1. Buy a domain (for example from Cloudflare, Namecheap, or Squarespace Domains).
2. In the repo, go to **Settings → Pages → Custom domain**, enter it (e.g. `austinwitz.com`), and save.
3. At your domain registrar, add DNS records:
   - For the root domain (`austinwitz.com`): four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - For `www`: a `CNAME` record pointing to `witzaustin.github.io`.
4. Add a file named `CNAME` (no extension) to the `public/` folder containing just your domain, e.g. `austinwitz.com`. This keeps the setting from being cleared on each deploy.
5. In `astro.config.mjs`, change `site` to your new address, e.g. `https://austinwitz.com`.
6. Once GitHub finishes checking DNS (minutes to a day), tick **Enforce HTTPS** in the Pages settings.

GitHub's own guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Decisions to confirm before publishing

1. **Job titles.** The site uses your real Parachute titles (Senior Category Analyst, Category Analyst) because a public page is easy to compare against reference checks. The resume PDF linked from the site still says Product Operations Analyst. Either keep the mismatch on purpose or line them up.
2. **Crosswalk agent tool.** Your resume calls it a Claude agent. Your Ramp portfolio calls it a Gemini Gem. Pick one (or both) in `attribute-crosswalk.md` and `ai.md`.
3. **Confidentiality.** Every example table uses made-up products and values. Check that you're comfortable naming Parachute and the $8M Diabetes figure publicly (both are already on your resume).

## Open TODOs

Run `npm run todos` for the full list. The ones that matter most:

- `attribute-data-health.md`: what it's built with, what "out of order" means, who uses it, any result
- `ai.md`: the "Where I don't trust it" section, in your own words
- `projects/index.md`: tools used for the briefing and Notion agent
- `about.md`: optional "Outside of work" line
