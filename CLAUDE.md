# Project Guidelines for Claude

This document defines the development standards and guidelines for the QRA Advisors website.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Content**: MDX for content-rich pages
- **Package Manager**: npm/yarn/pnpm (check package.json)

## Design Philosophy

This is an **institutional consulting website** with the following design principles:

- **Professional & Trustworthy**: Clean, sophisticated design that conveys expertise
- **Credible**: Conservative, data-driven presentation
- **Accessible**: WCAG 2.1 AA compliant
- **Performance-focused**: Fast loading times, optimized assets
- **Content-first**: Clear hierarchy, readable typography

## SEO Requirements

All pages must include:

- Unique, descriptive `<title>` tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Structured data (JSON-LD) where appropriate
- Semantic HTML5 elements
- Optimized images with alt text
- Mobile-responsive design
- Fast Core Web Vitals scores

## Accessibility Requirements

- WCAG 2.1 Level AA compliance minimum
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators for interactive elements
- Alt text for all images
- Descriptive link text (avoid "click here")
- Form labels and ARIA attributes where needed

## Development Rules

### Content Integrity

**NEVER invent or fabricate:**
- Client names or case studies
- Performance claims or statistics
- Testimonials or quotes
- Team member credentials
- Awards or certifications

If specific content is needed, use placeholder text clearly marked as `[PLACEHOLDER]` or request actual content from stakeholders.

### Pull Request Workflow

- **Work in small, focused PRs**: Each PR should address one feature or fix
- **Keep PRs under 400 lines** of changes when possible
- **Write clear commit messages**: Use conventional commits format
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

### Code Quality

- Follow TypeScript strict mode - no `any` types without justification
- Use Tailwind utility classes - avoid inline styles
- Keep components small and focused (< 200 lines)
- Write meaningful variable and function names
- Add comments for complex logic only
- Ensure all imports are used (no unused imports)

## PR Checklist

Before submitting a pull request, ensure:

- [ ] Code builds without errors (`npm run build`)
- [ ] All linting passes (`npm run lint`)
- [ ] TypeScript has no errors (`npm run type-check` or `tsc --noEmit`)
- [ ] Changes are tested locally in dev mode
- [ ] No console errors or warnings in browser
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: sufficient color contrast
- [ ] SEO: page titles and meta descriptions added/updated
- [ ] No placeholder content shipped to production
- [ ] No sensitive data or API keys committed
- [ ] Git commit messages follow conventional format
- [ ] PR description explains what and why

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable lint issues

# Type checking (if configured)
npm run type-check   # Run TypeScript compiler check
```

## File Structure

```
/app                 # Next.js App Router pages
/components          # Reusable React components
/content             # MDX content files
/public              # Static assets
/styles              # Global styles and Tailwind config
/lib                 # Utility functions and helpers
/types               # TypeScript type definitions
```

## MDX Guidelines

When working with MDX:

- Keep frontmatter consistent (title, description, date, etc.)
- Use semantic heading structure
- Optimize images before adding to content
- Use components for interactive elements
- Validate MDX syntax before committing

## Questions?

If you're unsure about:
- **Content accuracy**: Ask stakeholders, don't guess
- **Design decisions**: Follow existing patterns in the codebase
- **Technical approach**: Research or ask for guidance before implementing

---

**Remember**: Quality and accuracy over speed. Small, correct changes are better than large, uncertain ones.
