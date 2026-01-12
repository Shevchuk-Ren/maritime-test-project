# maritime-test-project
# Maritime Corp Dashboard

Modern Angular 21 dashboard application with a scalable architecture, reusable UI components, and pixel-perfect design implementation.

---

## Overview

**Maritime Corp Dashboard** is a production-grade web application built with **Angular 21**, focused on clean architecture, UI consistency, and predictable behavior under dynamic data changes (filtering, sorting, searching).

The project implements a complex dashboard with multiple independent data views, reusable table infrastructure, and a centralized design system using **SCSS**.

Key priorities:
- Maintainability and scalability
- Strict type safety
- Layout stability (no UI jumping)
- Exact match with design specifications

---

## Key Features

### Dashboard
- Work Queue (with tab-based filtering)
- Portfolio Goals
- Quick Actions
- Market Intelligence
- My Accounts (advanced data table)

### Custom Table System
- Reusable, generic table component
- Strongly typed column configuration
- Custom cell templates (`ng-template`)
- Independent state per table instance
- Optional striped rows and action columns

### My Accounts
- Isolated search input
- Filter / Sort / Group actions
- Status indicators (dots, pills, chips)
- Winnability visualization
- Stable layout regardless of data size

### UI Design System
- Centralized SCSS variables
- Reusable buttons, inputs, cards
- Configurable sizes, colors, and borders
- Desktop and tablet responsive layouts

### Accessibility
- Semantic HTML structure
- ARIA attributes
- Keyboard-friendly interactions

---

## Tech Stack

- **Angular 21**
- **TypeScript**
- **SCSS**
- Standalone Components
- Angular Signals
- ControlValueAccessor (CVA)
- ESLint
- Prettier

---

## Code Quality & Tooling

This project enforces strict code quality standards:

### ESLint
- Prevents anti-patterns
- Enforces consistent imports and typing
- Guards against shared mutable state issues

### Prettier
- Unified formatting for TypeScript, HTML, and SCSS
- Ensures consistent code style across the project

**Recommendation:**  
Run linting and formatting before every commit.

---

## Project Structure (High Level)

src/
└── app/
├── core/
│ ├── models/ # Domain & UI models
│ └── services/ # Application and state services
│
├── shared/
│ └── components/
│ ├── table/
│ ├── button/
│ ├── search-input/
│ └── add-cards/
│
└── features/
├── dashboard/
│ ├── work-queue/
│ ├── my-accounts/
│ ├── portfolio-goals/
│ ├── quick-actions/
│ └── market-intelligence/
└── accounts/
│ ├── pages/
│   ├── dashboard/
│   ├── accounts/


---

## Available Scripts

- `npm start` – run development server  or `ng serve`
- `npm run build` – production build  or `ng build`
- `npm run lint` – ESLint checks  or `ng build --watch --configuration development`
- `npm run format` – Prettier formatting  or `prettier --write \"src/**/*.{ts,html,scss}\"`
- `npm run test` – run unit tests (if configured) or `ng test`



## Forms & Search Inputs

Search inputs are implemented via **ControlValueAccessor (CVA)**.

Important rules:
- If `ngModel` is used inside a `<form>` element, it must include:
- a `name` attribute  
**or**
- `ngModelOptions="{ standalone: true }"`

- Global search and table-specific search **must never share state**.

---

## Layout Stability

To prevent page jumping during filtering or sorting:
- Dashboard rows use fixed or minimum heights on desktop
- Scrolling occurs **inside cards**, not the page
- Grid and Flexbox are combined intentionally for predictable sizing

---

## Contributing

1. Create a feature branch
2. Follow ESLint and Prettier rules
3. Keep feature logic isolated
4. Provide screenshots for UI-related changes

---

## License

Internal / educational project.  
All rights reserved unless stated otherwise.
