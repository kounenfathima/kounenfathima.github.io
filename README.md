# kounenfathima.github.io

Personal research website. Built on the MIT-licensed
[research-website-template](https://github.com/tovacinni/research-website-template)
by Towaki Takikawa. The original LICENSE is kept in this repo and the footer
credits the template, as the licence requires.

All content lives in `src/data/`. Edit those files, commit, and the site rebuilds.

| File | What it holds |
|---|---|
| `src/data/aboutme.ts` | Name, title, bio, email, photo, CV, social links |
| `src/data/news.ts` | Dated updates at the top of the page |
| `src/data/education.ts` | Degrees |
| `src/data/experience.ts` | Roles |
| `src/data/publication.ts` | Papers |
| `src/data/patent.ts` | Patents (added to the template) |
| `src/data/portfolio.ts` | Open projects, shown as "Open projects" |
| `src/data/section-order.ts` | Reorder or hide sections |

An empty array hides its section entirely.

## Adding your photo

1. Save your photo as `public/images/profile.jpg`. A portrait crop is best:
   the layout renders it in a 3:4 frame, so something around 900x1200 px.
   `.png` works too, just match the extension in step 2.
2. Open `src/data/aboutme.ts` and uncomment the `imageUrl` line:

   ```ts
   imageUrl: "/images/profile.jpg",
   ```

The path starts at `public/`, so `public/images/profile.jpg` is written
`/images/profile.jpg`. No photo means no image block, and the layout still works.

## Adding your CV

1. Save the PDF as `public/cv.pdf`.
2. In `src/data/aboutme.ts`, uncomment:

   ```ts
   cvUrl: "/cv.pdf",
   ```

## Still to fill in

- `src/data/publication.ts` has `TODO` strings where co-author lists go. Replace
  them with the real author lists. Your own name can be wrapped in `<b></b>`.
- `src/data/aboutme.ts`: uncomment `githubUsername` once your repos are public,
  and `googleScholarUrl` if you make a Scholar profile.
- `src/data/portfolio.ts`: uncomment the `codeUrl` lines once the repos exist.

## Running it locally

Needs [Node.js](https://nodejs.org/) (v18 or newer).

```bash
npm install
npm run dev
```

Then open http://localhost:3000. It reloads as you save.

## Deploying to GitHub Pages

1. Create a public repo named exactly `kounenfathima.github.io`
   (substitute your own GitHub username if it differs).
2. Push this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings -> Pages -> Build and deployment**, set **Source** to
   **GitHub Actions**. The workflow in `.github/workflows/nextjs.yml` handles
   the rest.
4. Watch the **Actions** tab. First run takes a couple of minutes.

Live at `https://<your-username>.github.io/`. Every push to `main` redeploys.

`next.config.ts` is already set to `output: "export"` with unoptimised images,
which static hosting requires.
