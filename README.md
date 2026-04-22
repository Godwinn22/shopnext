# ShopNext

ShopNext is a Next.js 16 application built with React 19, TypeScript, and Tailwind CSS 4. It currently serves as the foundation for a shopping experience, with a clean App Router structure and a simple landing page ready for expansion.

## Features

- Next.js App Router setup with TypeScript
- React 19 and modern server/client rendering support
- Tailwind CSS 4 for utility-first styling
- Google Fonts integration via `next/font`
- ESLint configured for code quality checks

## Tech Stack

- Next.js 16.2
- React 19.2
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Getting Started

### Prerequisites

- Node.js 18.18 or newer is recommended
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server after building
- `npm run lint` - Run ESLint across the project

## Project Structure

```text
app/
	layout.tsx      # Root layout and metadata
	page.tsx        # Home page
	globals.css     # Global styles and Tailwind entrypoint
public/           # Static assets
```

## Deployment

The app is ready to deploy to Vercel or any platform that supports Next.js. For a typical production workflow:

1. Run `npm run build`
2. Verify the build succeeds locally
3. Deploy the generated Next.js application to your hosting provider



