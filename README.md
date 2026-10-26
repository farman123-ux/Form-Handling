# React Form Learn ⚛️

An educational, beginner-friendly web application designed to teach **Form Handling in React.js** through simple definitions, explanations, complete code samples, and working interactive forms.

---

## 🚀 Getting Started

1. **Install dependencies** (already installed in workspace):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Lint code**:
   ```bash
   npm run lint
   ```

---

## 🛠️ Technology Stack

- **React.js 19**
- **JavaScript (ES Modules)**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router DOM v7** (Client-side routing)
- **React Hooks** (`useState`, `useEffect`)
- **Lucide React** (Modern, lightweight iconography)

---

## 📂 Project Structure

```
src/
├── assets/                  # SVG and image assets
├── components/
│   ├── forms/
│   │   ├── SimpleInputDemo.jsx       # Working Example 1: Name input + live display
│   │   ├── RegistrationFormDemo.jsx  # Working Example 2: Multi-field + validation
│   │   └── LoginFormDemo.jsx         # Working Example 3: Auth + no-reload demo
│   ├── CodeBlock.jsx        # Syntax-styled code box with copy-to-clipboard
│   ├── ConceptCard.jsx      # Card for the 6 core concepts
│   ├── ConceptMiniDemo.jsx  # Interactive sandbox per concept
│   ├── ConceptModal.jsx     # Deep dive modal with line-by-line breakdown
│   ├── Footer.jsx           # Clean footer with quick links & tech badges
│   └── Navbar.jsx           # Responsive header with React atom & route links
├── data/
│   ├── conceptsData.js      # Definitions, code snippets, & line explanations
│   └── examplesData.js      # Working example specs, takeaways, & expected output
├── pages/
│   ├── Home.jsx             # Hero, definition demo, concept cards preview
│   ├── Learn.jsx            # All 6 concepts + search & cheatsheet table
│   ├── Examples.jsx         # 3 interactive examples + code & line breakdown
│   ├── Login.jsx            # Dedicated interactive Login page
│   └── Register.jsx         # Dedicated interactive Register page
├── App.jsx                  # Route definitions and layout shell
├── index.css                # Tailwind CSS imports and base styles
└── main.jsx                 # React root and BrowserRouter wrapper
```

---

## 📚 Core Concepts Covered

1. **`useState`**: Store and update form values dynamically.
2. **`onChange`**: Capture keystrokes and sync them into component state.
3. **`onSubmit`**: Intercept user form submissions.
4. **`Managing Form Data`**: Manage multiple input values using a single object state (`[e.target.name]: e.target.value`).
5. **`Form Validation`**: Check required fields, email format regex, and password length.
6. **`event.preventDefault()`**: Keep Single Page Application (SPA) state intact without full browser refreshes.

---

## 📝 License & Copyright

Copyright © 2026 React Form Learn. All rights reserved.
