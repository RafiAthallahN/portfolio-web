# 🚀 Project Mission: Build "Bento Portfolio" (Vue / Nuxt 3 Ecosystem)

You are acting as a Senior Frontend Architect and Lead UI/UX Engineer. Your task is to build a production-ready, dark-mode personal portfolio website for Rafi Athallah Nabil, a Full-Stack Web Developer with a unique background in UI/UX design.

The application must feature a responsive Apple/Vercel-inspired **Bento Grid layout** with interactive **Glassmorphic Modal Dialogs** for detailed content views.

---

## 🛠️ 1. Technical Stack & Environment (Strict Vue Ecosystem)
Please initialize and build the application strictly within the modern Vue ecosystem using the following tools:
* **Framework:** Nuxt 3 (SSR/SSG capable) with Vue 3 Composition API (`<script setup lang="ts">`) and strict TypeScript.
* **Styling:** Tailwind CSS (configured for class-based dark mode).
* **Icons:** Lucide Vue Next (`lucide-vue-next`).
* **Animations:** Native Vue `<Transition>` / `<TransitionGroup>` components combined with Tailwind CSS custom keyframes, or `@vueuse/motion` for staggered entrance animations and smooth modal transitions.
* **State Management & Utilities:** Vue Composition API (`ref`, `computed`, `watch`), VueUse (`@vueuse/core`) for DOM utilities (e.g., `onClickOutside`, `onKeyDown` for Escape key handling), and Pinia (if global state sharing is required for modal management).

---

## 🎨 2. Design System & Tokens ("Electric Cobalt & Sky")
Configure the `tailwind.config.js` and global stylesheets with the following strict visual rules:

### **Color Palette:**
* **Background:** Deep Slate (`#0B0F19` / `bg-slate-950`) — must be used as the root background to reduce eye strain.
* **Surface/Cards:** Midnight Blue (`#0F172A` / `bg-slate-900/60`) — used as the base for Bento cards.
* **Primary Accent:** Electric Cobalt (`#2563EB` to `#3B82F6` / `blue-600` to `blue-500`) — used for primary badges, key emphasis, and primary CTAs.
* **Secondary Glow:** Neon Sky & Cyan (`#38BDF8` to `#06B6D4` / `sky-400` to `cyan-500`) — used for frontend stack highlighting, borders, and secondary links.
* **Interactive Hover:** Indigo Tint (`#6366F1` / `indigo-500`) — used for hover border transitions on interactive cards.

### **Glassmorphism & Depth Rules:**
* All Bento Grid boxes must utilize subtle frosted glass styling: `bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]`.
* On hover, Bento boxes must smoothly transition to: `hover:border-blue-500/50 hover:bg-white/10` (or accent-specific border colors).
* Modal Dialog overlays must use `bg-slate-950/60 backdrop-blur-md`.
* Inner cards inside modals must also use nested glassmorphism: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg`.

### **Animations:**
* Implement a custom `slideUp` animation in Tailwind:
  * `0%`: `{ opacity: '0', transform: 'translateY(30px)' }`
  * `100%`: `{ opacity: '1', transform: 'translateY(0)' }`
* Stagger the entrance animation of the Bento cards on initial page load using CSS animation delays (e.g., `100ms`, `200ms`, `300ms`, etc.).

---

## 📐 3. Component Architecture (Vue SFCs)
Please modularize the application into the following clean Single-File Components (`.vue`):

1. **`components/NavBar.vue`**: Fixed top navigation featuring a pulsing status badge ("📍 Tulungagung, Indonesia • Available for Opportunities"), branding ("RAN."), and quick links.
2. **`components/BentoGrid.vue`**: A CSS Grid container supporting responsive auto-rows and column spanning (`col-span-1`, `col-span-2`, `row-span-2`).
3. **`components/BentoCard.vue`**: A reusable card component utilizing TypeScript interface props (`title`, `subtitle`, `category`, `icon`, `spanClasses`, `accentColor`) and emitting an `@open-modal` event to trigger its respective dialog.
4. **`components/GlassModal.vue`**: A reusable dialog component wrapped in a Vue `<Transition>` for smooth fade/scale effects. Use `@vueuse/core` (`onClickOutside` and Escape key listeners) to handle closing cleanly while locking background scroll when active.
5. **`components/ExperienceTimeline.vue`**: An internal modal component rendering a vertical glowing gradient line with alternating glassmorphic cards for job history.
6. **`components/FooterSection.vue`**: Clean bottom section with copyright and direct contact links.

---

## 📝 4. Content & Data Structure (No Lorem Ipsum)
Populate the application with the following real-world data from Rafi's CV by creating a typed data file at `composables/usePortfolioData.ts` or `utils/data.ts`:

### **Box 1: Hero / About Me (2x2 Grid Span)**
* **Badge:** Full-Stack & UI/UX Developer
* **Title:** Rafi Athallah Nabil
* **Summary:** Translating complex Figma prototypes into fast, scalable web applications using modern JS frameworks, Go, and Python.
* **Modal Detail:** Emphasize the hybrid superpower of understanding user-centered design principles while engineering robust backend architecture. Include direct links to GitHub (`github.com/RafiAthallahN`), Dribbble (`dribbble.com/ItsMeRafi`), and LinkedIn (`linkedin.com/in/rafi-athallah-nabil`).

### **Box 2: Work Experience (1x2 Grid Span)**
* **Highlight Badge:** ⚡ 40% Load Time Boost
* **Summary:** Proven track record at Telkomsigma and Aksamedia building production-ready apps and APIs.
* **Modal Detail (Timeline Layout):**
  * **Programmer @ PT Sigma Cipta Caraka (Telkomsigma)** *(Jul 2023 – Present | Yogyakarta)*: Developed responsive web apps using Vue/Nuxt and React/Next from Figma prototypes. Built frontend components and robust backend REST APIs with Go and Python. Optimized application performance by reducing page load times by 40% via code splitting and lazy loading. Mentored junior developers in Agile/Scrum.
  * **UI/UX Designer Intern @ PT Aksamedia Mulia Digital** *(Jun 2022 – Nov 2022 | Surabaya)*: Designed responsive websites and mobile apps using Figma. Collaborated with frontend devs to ensure 100% design-to-code implementation fidelity.

### **Box 3: Unified Tech Stack (1x2 Grid Span)**
* **Title:** Tech Stack & Technical Arsenal
* **Summary:** Bridging frontend aesthetics with backend logic seamlessly.
* **Modal Detail (Categorized Glass Cards):**
  * *Frontend Engineering:* Vue.js, Nuxt.js, React, Next.js, HTML5/CSS3, State Management.
  * *Backend Solutions:* Go (Golang), Python, REST APIs, Database Management.
  * *UI/UX Design:* Figma Mastery, Wireframing, Prototyping, Design Systems, Developer Handoff.
  * *Workflow & Methods:* Git, Agile/Scrum, Code Splitting & Lazy Loading.

### **Box 4: Education & Foundation (2x1 Grid Span)**
* **Summary:** Computer Science & Software Engineering background.
* **Modal Detail:**
  * **Bachelor of Computer Science @ Universitas Siber Asia** *(Apr 2024 – Apr 2028, Expected | Jakarta)*: Currently Semester 5. Coursework in Digital Technology and Web Development.
  * **Software Engineering Diploma @ SMKS Telkom Sandhy Putra Malang** *(Jul 2020 – May 2023)*: Graduated with 87.39/100.00. Specialized online coursework in UI/UX and Web Dev.

### **Box 5: Contact & Let's Connect (2x1 Grid Span)**
* **Style:** High-contrast gradient background (`from-blue-600 to-indigo-600`).
* **Title:** Have a project or open role? Let's build together.
* **Modal/Action Detail:** Provide clickable, tactile glass buttons for Email (`rafiathallahnabil@gmail.com`) and Phone/WhatsApp (`+62 878-5909-8443`).

---

## ✅ 5. Execution Requirements & Acceptance Criteria
1. **Vue Best Practices:** Use `<script setup lang="ts">` for all components. Ensure strict typing for all props and emitted events.
2. **Zero Console Errors:** Ensure hydration compatibility if using Nuxt SSR/SSG, and avoid DOM mismatch warnings.
3. **Responsive Mastery:** Test and ensure the Bento Grid gracefully collapses into a 1-column layout on mobile (<640px), 2-column on tablet, and 4-column on desktop (>=1024px).
4. **Accessibility (a11y):** All interactive Bento cards and modal buttons must have proper `aria-labels`, focus rings (`focus:ring-2 focus:ring-blue-400`), and semantic HTML structure. Use VueUse to trap focus or handle keyboard escape events cleanly.

Begin by initializing the Nuxt 3 / Vue project structure, setting up the Tailwind design tokens, and building the `<BentoGrid.vue>` layout first.
