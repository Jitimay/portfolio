# Josué Jitimay · Research portfolio

Academic portfolio for research-based MSc applications. Built with Next.js Pages Router, React, Tailwind CSS, and Framer Motion.

## Develop and build

```sh
npm ci
npm run dev
npm run build
```

Open the development URL printed by Next.js. The production build exports HTML, JavaScript, CSS, and assets into `out/`. Publish that directory to the existing static host. For local production preview with Python 3, run `npm start` and open `http://127.0.0.1:3000`.

## Content and configuration

- `data/profile.js` contains contact links, research interests, awards, experience, and the CV path.
- `data/projects.js` contains project descriptions and links. Use direct public links when available.
- `data/skills.js` contains the technical skills list.
- `public/research/regulus-poster.pdf` is the published poster and `public/media/` contains resized display assets.
- To publish a CV, add its PDF under `public/` and set `profile.cv` to its root-relative URL.
- The contact section always offers direct email. To enable the optional EmailJS form, provide `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` before building. The EmailJS template should accept `from_name`, `from_email`, and `message`.

The repository currently has no dedicated lint or type-check scripts.
