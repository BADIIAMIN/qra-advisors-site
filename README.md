# QRA Advisors Website

Professional institutional consulting website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Content**: MDX for content-rich pages
- **Code Quality**: ESLint, Prettier

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix auto-fixable lint issues
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier

## Project Structure

```
/app                 # Next.js App Router pages
/components          # Reusable React components
/content             # MDX content files
  /insights          # Blog posts and insights
  /case-studies      # Case study content
/lib                 # Utility functions and helpers
/public              # Static assets
/docs                # Project documentation
```

## MDX Content

Add new insights or case studies by creating `.mdx` files in the respective content directories:

- `/content/insights/your-post.mdx`
- `/content/case-studies/your-case-study.mdx`

Each MDX file should include frontmatter:

```yaml
---
title: Your Title
description: Brief description
date: 2024-01-01
---
```

## Development Guidelines

See [CLAUDE.md](./CLAUDE.md) for comprehensive development guidelines including:

- Design principles
- SEO requirements
- Accessibility standards
- Code quality standards
- PR workflow

## License

Private and confidential.
