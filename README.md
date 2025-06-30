
# 🛒 E-Commerce Web Application (firstpro)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://new-ecom-flax.vercel.app/)

This is a modern, responsive e-commerce web application built with **React** and **Vite**. It features a clean user interface, robust state management with **Redux Toolkit**, and styling with **Tailwind CSS**. The application provides a complete shopping experience—from browsing products to a seamless multi-step checkout.
-


---

## ✨ Features

- **User Authentication** – Secure login and signup functionality.
- **Dynamic Product Catalog** – Real-time filtering and search.
- **Product Details** – View detailed product information.
- **Shopping Cart** – Add, remove, and manage cart items.
- **Wishlist** – Save favorite items for future purchase.
- **Responsive Design** – Mobile-first, fully adaptive layout.
- **Light/Dark Theme** – User-controlled theme toggle.
- **Multi-Step Checkout** – Includes shipping and payment.
- **User Profile** – View and manage user info and order history.
- **State Management** – Centralized logic with Redux Toolkit.

---

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|----------------------------|
| Frontend     | React 18, Vite             |
| Styling      | Tailwind CSS               |
| State Mgmt   | Redux Toolkit, React-Redux |
| Routing      | React Router v6            |
| Icons        | FontAwesome, Remixicon     |
| Linting      | ESLint                     |
| Build Tool   | Vite                       |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/iamitvishwakarma/new-ecom.git
cd new-ecom
npm install
npm run dev
```

Open your browser at: **http://localhost:5173**

---

## 📦 Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Build the app for production
npm run lint      # Lint the codebase
npm run preview   # Preview the production build
```

---

## 📁 Project Structure

```bash
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── screen/          # Page-level views (HomePage, etc.)
│   ├── store/           # Redux Toolkit logic
│   │   ├── Action/      # Async actions
│   │   └── Reducers/    # Redux slices
│   ├── utils/           # Helpers and layout wrappers
│   ├── App.jsx          # Root component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + global styles
├── .eslintrc.cjs        # Linting rules
├── tailwind.config.js   # Tailwind setup
└── vite.config.js       # Vite configuration
```

---

## 📄 License

This project is open-source. Feel free to fork it, contribute, or use it as a starter template for your next big idea!

---

💡 *Crafted with ❤️ by [Amit Vishwakarma](https://github.com/iamitvishwakarma)*
