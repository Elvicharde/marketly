![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![License](https://img.shields.io/badge/License-MIT-green)

# Marketly

Marketly is a modern ecommerce-style product discovery application built with Next.js App Router. It enables users to browse, search, and filter products through a clean, responsive interface inspired by contemporary digital storefronts.

The project is designed to demonstrate production-grade frontend engineering practices, including server-side data fetching, URL-driven state management, performance optimization, and clean component architecture.

---

## 🚀 Live Demo

[Add your deployment link here]

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Data Source:** DummyJSON API
- **State Management:** React (useState, useSearchParams)
- **Deployment:** Cloudflare Workers / Vercel

---

## ✨ Features

### Product Listing
- Server-rendered product grid (SSR / ISR)
- Responsive layout (1 / 2 / 4 columns)
- Product cards with image, price, rating, and title

### Search & Filtering
- Debounced search input
- Category filtering
- Sorting (price, rating)
- URL-driven state for shareable queries

### Product Detail
- Dynamic routing (`/products/[id]`)
- Server-side data fetching
- SEO metadata (title, description, og:image)
- Breadcrumb navigation

### UI States
- Skeleton loading states
- Error boundaries with retry
- Empty state with reset action

---

## ⚡ Performance Optimizations

- `next/image` for optimized images
- Incremental Static Regeneration (ISR) for listing page
- Route-level code splitting for client components
- Font optimization using `next/font`

---

## 🧠 Architecture Decisions

### URL-Driven State
Search, filters, and sorting are managed via URL query parameters to ensure:
- Shareable application state
- Consistency between server and client rendering
- Improved SEO and caching behavior

### API Abstraction Layer
All data fetching is handled through a dedicated API layer (`lib/api`) to:
- Separate concerns
- Improve testability
- Avoid direct `fetch()` calls in components

### Component Structure
The application follows a feature-based structure with reusable UI components and strict TypeScript typing.

---

## 📦 Getting Started

```bash
git clone https://github.com/Elvicharde/marketly
cd marketly
npm install
npm run dev
```
