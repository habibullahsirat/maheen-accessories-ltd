# Maheen Accessories Ltd

A web application for Maheen Accessories Ltd corporate site built using Next.js.

---

## Table of contents

- [Project](#project)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment variables](#environment-variables)
  - [Scripts](#scripts)
- [Contact / Maintainer](#contact--maintainer)

---

## Project

This repository contains the frontend for Maheen Accessories Ltd — the codebase that powers the public website, product listings, and an admin panel.

---

## Tech stack

- JavaScript
- TypeScript
- TailwindCSS for styling
- Frameworks: Next.js
- REST API

---

## Features

- Product listing pages
- Product detail pages with images and descriptions
- Basic responsive layout
- Build and production-ready assets

---

## Getting started

### Prerequisites

- Node.js LTS (>=16 recommended)
- npm (>=8) or yarn / pnpm
- Git

### Install

Clone the repository and install dependencies:

```bash
git clone https://github.com/habibullahsirat/maheen-accessories-ltd.git
cd maheen-accessories-ltd
npm install
```

### Environment variables

Create a `.env` file at the project root (example keys below). Replace values with your backend/API or analytics endpoints:

```
MONGODB_URI=mongo_db_connection_string

NEXT_PUBLIC_API_URL=your_api_url

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_clouinary_upload_preset
```

### Scripts

Common script names — update if your project uses different commands:

- Start local dev server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Preview production build:
  ```bash
  npm run preview
  # or
  npm start
  ```
- Lint:
  ```bash
  npm run lint
  ```
- Test:
  ```bash
  npm test
  ```
---

## Contact / Maintainer

Maintainer: @habibullahsirat (GitHub)
