# Shahab AI Receptionist System - Proposal Application

A professional, interactive proposal system for presenting AI Receptionist packages with a clean, modern interface.

## Features

- **Interactive 3-Tier Comparison**: Compare Starter, Full Implementation, and SalonOS Platform packages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **View Modes**: Toggle between Essentials and Full Technical Scope views
- **Cal.com Integration**: Built-in calendar booking for consultation calls
- **Mobile-Friendly**: Expandable details on mobile with clean transitions

## Project Structure

This project follows **Vertical Slice Architecture** for better maintainability and scalability:

```
src/
├── App.tsx                          # Main application component
├── main.tsx                         # Application entry point
├── features/
│   └── proposal/                   # Proposal feature module
│       └── components/             # Proposal-specific components
│           ├── ProposalHeader.tsx
│           ├── ViewToggle.tsx
│           ├── OfferCard.tsx
│           ├── MaintenanceSection.tsx
│           ├── CTASection.tsx
│           ├── ProposalFooter.tsx
│           └── index.ts           # Public API
└── shared/
    ├── components/ui/              # Reusable UI components
    │   └── Icons.tsx
    ├── constants/                  # Application constants
    │   └── index.ts
    └── types/                      # Shared TypeScript types
        └── index.ts
```

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Cal.com** for booking integration

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Architectural Decisions

### 1. Vertical Slice Architecture
- Features are organized by domain (`features/proposal`)
- Each feature is self-contained with its own components
- Promotes high cohesion and loose coupling

### 2. Component Design
- Single Responsibility Principle for all components
- Proper TypeScript typing with explicit return types
- Comprehensive JSDoc documentation
- No use of `any` type

### 3. Code Organization
- Feature-specific code in `features/[feature]`
- Reusable components in `shared/components`
- Centralized constants and types
- Clean import patterns

### 4. Type Safety
- All components have explicit prop interfaces
- Proper TypeScript configuration with strict mode
- Type exports from shared module

## Component Documentation

All components include:
- JSDoc comments with descriptions
- `@component` and `@example` tags
- Prop interface documentation
- Clear usage examples

## Future Enhancements

When adding new features:
1. Create a new directory under `features/[feature-name]`
2. Add feature-specific components, hooks, and types
3. Export public API through `index.ts`
4. Keep shared resources in `shared/`
5. Follow existing documentation patterns

## Design System

The application uses a neutral color palette:
- **Primary**: Blue tones for highlights and CTAs
- **Background**: Clean white and slate gray
- **Accents**: Green for success, blue for information

## License

Confidential - All Rights Reserved
