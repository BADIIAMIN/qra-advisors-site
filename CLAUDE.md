# QRA Advisors Website — Standards for Claude Code

## Goal
Premium B2B website for a quantitative analytics advisory firm (QRA Advisors).
Tone: institutional, credible, concise. Do not invent client names, results, certifications, or regulatory approvals.

## Stack
- Next.js App Router + TypeScript
- Tailwind
- MDX content in /content for Insights and Case Studies
- Minimal dependencies

## Structure
- app/ routes + layout
- components/ reusable UI
- content/ mdx + structured copy
- lib/ helpers (mdx, seo, analytics, utm, forms)
- docs/ deployment + marketing guides

## Design
- Clean consulting aesthetic: strong whitespace, typography hierarchy, subtle borders
- Mobile-first, accessible components

## Content Rules
- Use provided copy faithfully; do not rewrite unless asked
- Fix only obvious typos without changing meaning

## SEO / Performance / A11y
- Metadata per page
- OG/Twitter cards
- sitemap.xml + robots.txt
- Next/Image for images
- Keyboard navigable menus; accessible forms

## Workflow
- Work in small PRs tied to issues
- Include PR summary + testing notes
- Run lint/build before PR ready
