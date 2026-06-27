# My Portfolio

![App Preview](https://imgix.cosmicjs.com/51740c30-7261-11f1-a87f-d72293b1048a-autopilot-photo-1542831371-29b0f74f9713-1782589772909.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). It showcases your profile, skills, projects, and work experience pulled dynamically from your Cosmic bucket.

## Features

- 🎨 Modern, elegant, and responsive design with smooth gradients and glassmorphism touches
- 👤 Profile hero section with bio, tagline, photo, and social links
- 💻 Projects gallery with screenshots, tech stack, live demos, and source code links
- 🛠️ Skills section grouped by category with proficiency indicators
- 💼 Work experience timeline with company logos and roles
- ✉️ Contact section with email and social links
- ⚡ Server-side rendered for blazing fast performance and SEO
- 📱 Mobile-first, accessible navigation

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a4029003086531a9e574a9c&clone_repository=6a402a083086531a9e574adb)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: profile, skills, projects, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) - Headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `profile`, `skills`, `projects`, and `work-experience` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set environment variables (these are provided automatically when cloning via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with depth for connected objects
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single profile
const { object: profile } = await cosmic.objects
  .findOne({ type: 'profile', slug: 'my-profile' })
  .depth(1)
```

## Cosmic CMS Integration

This application reads content from your Cosmic bucket using these object types:

- **profile** — your name, tagline, bio, photo, and social links
- **skills** — skill name, category, and proficiency
- **projects** — title, description, screenshots, tech stack, and URLs
- **work-experience** — job title, company, dates, and descriptions

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://netlify.com)
2. Set the build command to `bun run build`
3. Add the environment variables
4. Deploy

<!-- README_END -->