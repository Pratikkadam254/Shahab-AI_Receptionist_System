# Project Structure

This project follows a **Vertical Slice Architecture** with proper separation of concerns.

## Directory Layout

```
project/
├── src/
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   │
│   ├── features/                    # Feature-based modules
│   │   └── proposal/
│   │       └── components/
│   │           ├── index.ts         # Public API exports
│   │           ├── ProposalHeader.tsx
│   │           ├── ViewToggle.tsx
│   │           ├── OfferCard.tsx
│   │           ├── MaintenanceSection.tsx
│   │           ├── CTASection.tsx
│   │           └── ProposalFooter.tsx
│   │
│   └── shared/                      # Shared resources
│       ├── components/
│       │   └── ui/
│       │       └── Icons.tsx        # Reusable icon components
│       ├── constants/
│       │   └── index.ts            # Application constants
│       └── types/
│           └── index.ts            # Shared TypeScript types
│
├── index.html                       # HTML entry point
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Project dependencies

```

## Architecture Principles

### 1. Vertical Slice Architecture
- Features are organized by domain (e.g., `features/proposal`)
- Each feature contains all related components, types, and logic
- Promotes high cohesion and loose coupling

### 2. Component Organization
- **Features**: Domain-specific components live in `features/[feature]/components`
- **Shared**: Reusable components live in `shared/components/ui`
- Each component is self-contained with clear responsibilities

### 3. Type Safety
- All types are properly defined in `shared/types`
- TypeScript strict mode enabled
- Explicit return types for all functions
- No use of `any` type

### 4. Code Documentation
- JSDoc comments on all exported functions and components
- Clear component prop documentation
- File-level `@fileoverview` and `@module` declarations

## Key Features

### Proposal Feature (`features/proposal`)
Contains all components related to the proposal presentation:
- **ProposalHeader**: Client and project information display
- **ViewToggle**: Switch between essentials and detailed views
- **OfferCard**: Individual offer tier display with responsive design
- **MaintenanceSection**: Support plan details
- **CTASection**: Call-to-action with booking integration
- **ProposalFooter**: Copyright and confidentiality notice

### Shared Resources (`shared`)
Reusable resources across the application:
- **Icons**: Wrapped lucide-react icons with consistent interface
- **Constants**: Proposal metadata, offers data, maintenance plans
- **Types**: TypeScript interfaces and types

## Benefits of This Structure

1. **Maintainability**: Easy to locate and modify feature-specific code
2. **Scalability**: New features can be added without affecting existing ones
3. **Reusability**: Shared components are easily accessible
4. **Type Safety**: Comprehensive TypeScript coverage
5. **Documentation**: Well-documented codebase with JSDoc
6. **Testing**: Components can be tested in isolation
7. **Performance**: Code splitting by feature is straightforward

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Component Import Pattern

```typescript
// Feature components
import {
  ProposalHeader,
  ViewToggle,
  OfferCard
} from './features/proposal/components';

// Shared components
import { IconCheck, IconShield } from './shared/components/ui/Icons';

// Types and constants
import { Offer } from './shared/types';
import { OFFERS } from './shared/constants';
```

## Future Enhancements

When adding new features:
1. Create a new directory under `features/[feature-name]`
2. Add components, hooks, types as needed
3. Export public API through `index.ts`
4. Keep shared resources in `shared/`
5. Follow existing patterns and documentation standards
