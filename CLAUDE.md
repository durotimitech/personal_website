# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint with auto-fix

### Type Checking
- `npx tsc --noEmit` - Run TypeScript type checking (no test command available)

## Architecture Overview

This is a Next.js 15 personal website built with App Router, TypeScript, and TailwindCSS. The site serves as both a portfolio and business website for creative services.

### Key Architectural Decisions

1. **Static Site Generation (SSG)**: All pages are statically generated at build time for optimal performance and SEO.

2. **File-based Blog System**: Blog posts are stored as Markdown files in `_posts/` with frontmatter metadata. The `lib/blog.js` module handles parsing and rendering using remark/rehype.

3. **SEO-First Design**: 
   - Programmatic sitemap generation (`app/sitemap.ts`)
   - Dynamic robots.txt (`app/robots.ts`)
   - Comprehensive metadata in `app/layout.tsx`
   - Structured data for rich snippets

4. **Service-Oriented Structure**: Each service (photography, videography, event-planning, web-development) has its own route with dedicated pages.

5. **Analytics Integration**: PostHog is proxied through `/ingest` to avoid ad blockers, with configuration in `next.config.ts`.

### Critical Files

- `app/layout.tsx` - Global layout with SEO metadata, fonts, and analytics
- `lib/blog.js` - Core blog functionality for parsing and retrieving posts
- `components/ui/` - Base UI components following shadcn/ui patterns
- `app/blog/[slug]/page.tsx` - Dynamic blog post rendering with metadata generation

### Development Patterns

1. **Component Structure**: Components follow a functional approach with TypeScript interfaces. UI components are in `components/ui/`.

2. **Styling**: TailwindCSS v4 with CSS variables for theming. Avoid inline styles; use Tailwind classes.

3. **Type Safety**: Strict TypeScript mode is enabled. Always define proper types for props and return values.

4. **Path Aliases**: Use `@/` for imports from the src directory (e.g., `@/components/ui/button`).

5. **Blog Posts**: New blog posts go in `_posts/` directory as Markdown files with required frontmatter: title, excerpt, date, author, coverImage.