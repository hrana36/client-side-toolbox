# Client-Side PDF & Tech Toolbox

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/framework-Next.js%2014-black.svg)]()
[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)]()
[![TailwindCSS](https://img.shields.io/badge/styling-TailwindCSS-cyan.svg)]()
[![Privacy](https://img.shields.io/badge/privacy-100%25%20Client--Side-emerald.svg)]()

A high-performance, 100% offline client-side web utility suite featuring an ATS Resume Scanner, PDF manipulation tools (Merge, Split, Image-to-PDF), SSL/DNS Security Inspector, and Developer utilities built with Next.js 14, TypeScript, TailwindCSS, and `pdf-lib`.

---

## ✨ Features & Modules

### 📄 1. ATS Resume Scanner (Offline & Private)
- **Zero Server Uploads**: 100% browser-based parsing for candidate data privacy.
- **Multi-Format Support**: Parses `.pdf`, `.docx` (via Mammoth), and `.txt` files.
- **JD Keyword Matching**: Real-time keyword density, hard/soft skill scoring, and actionable resume optimization tips.

### 🛠️ 2. PDF Utilities Suite (`pdf-lib` Powered)
- **PDF Merge**: Combine multiple PDF files in custom page order locally in under 3 seconds.
- **PDF Splitter**: Extract specific page ranges or split into individual single-page PDFs.
- **Image to PDF Converter**: Convert JPG/PNG images into crisp, formatted PDF documents.
- **Page Reorder**: Drag-and-drop page reordering with instant preview.

### 🔒 3. SSL & DNS Security Inspector
- **SSL Certificate Inspector**: Analyzes active certificate chains, issuer authority, SAN names, and expiration dates.
- **DNS Record Lookup**: Diagnostics for `A`, `AAAA`, `MX`, `TXT`, `SPF`, `DKIM`, and `DMARC` records.
- **Privacy Shield**: Client-side WebRTC leak risk checker and password entropy calculator.

### 🔤 4. Developer & Regional Utilities
- **Bijoy & Unicode Converter**: Instant two-way conversion for Bengali typography (Bijoy 52 to Unicode).
- **Base64 Encoder/Decoder**: Clean text & binary payload encoding.
- **JSON Formatter & Validator**: Syntax checking, tree view, and minification.

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Lucide Icons
- **PDF Core**: `pdf-lib`, `pdfjs-dist`
- **DOCX Parser**: `mammoth.js`
- **Deployment**: Vercel Serverless / Client-Side Static Export (`output: 'export'`)

---

## 🚀 Local Setup & Installation

```bash
# Clone the repository
git clone https://github.com/hrana36/client-side-toolbox.git
cd client-side-toolbox

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Privacy & Security Guarantee
This application processes all sensitive files (resumes, contracts, certificates) directly inside the user's browser WebAssembly / JavaScript memory runtime. **No file data ever leaves your device.**
