# xyzOrganics - Organic Vegetables E-commerce

## Overview

xyzOrganics is a lightweight, single-page React e-commerce application for selling organic vegetables. The application provides a complete shopping experience with a product catalog, shopping cart functionality, and email-based order processing. It features a clean, organic-themed design optimized for mobile devices and focuses on showcasing fresh vegetables with high-quality imagery and seamless user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture built with TypeScript and Vite for fast development and optimized builds. The frontend follows a component-based architecture with clear separation of concerns:

- **React + TypeScript**: Provides type safety and modern development experience
- **Vite**: Build tool for fast development server and optimized production builds
- **Wouter**: Lightweight client-side routing for navigation
- **React Query**: State management for server state and caching

### UI Design System
The application implements a comprehensive design system using shadcn/ui components built on top of Radix UI primitives:

- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built accessible components with consistent design
- **Custom CSS Variables**: Organic-themed color palette (greens, earth tones, warm colors)
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### State Management
The application uses a hybrid approach to state management:

- **Local State**: React hooks for component-level state (cart management, UI interactions)
- **Custom Hooks**: Reusable logic encapsulation (useCart for shopping cart operations)
- **React Query**: Server state management and caching (configured for future API integration)

### Component Structure
The application is organized into clear component hierarchies:

- **Pages**: Route-level components (Home, NotFound)
- **Layout Components**: Header, Footer, Hero sections
- **Feature Components**: ProductGrid, CartSidebar, CheckoutModal
- **UI Components**: Reusable shadcn/ui components in `/components/ui/`

### Backend Architecture
The application includes a Node.js/Express backend setup with minimal implementation:

- **Express.js**: Web framework for API routes
- **TypeScript**: Type-safe backend development
- **Modular Route Structure**: Organized route handlers in `/server/routes.ts`
- **Storage Interface**: Abstracted storage layer with in-memory implementation

### Data Layer
The application uses Drizzle ORM for database operations with PostgreSQL:

- **Drizzle ORM**: Type-safe database operations and migrations
- **PostgreSQL**: Primary database (configured but not yet utilized for main features)
- **Schema Definition**: Centralized schema in `/shared/schema.ts`
- **In-Memory Storage**: Current implementation uses memory storage for user data

### Order Processing System
The application implements a client-side order processing system:

- **EmailJS Integration**: Client-side email sending for order notifications
- **Form Validation**: Customer details validation before order submission
- **Order Confirmation**: Toast notifications for user feedback
- **Email Templates**: Structured order emails with customer and product details

## External Dependencies

### Email Service
- **EmailJS**: Client-side email service for order processing
- **Configuration**: Requires service ID, template ID, and public key
- **Target Email**: Orders sent to nepat68953@misehub.com

### Image Service
- **Unsplash**: High-quality product images for vegetables
- **CDN Delivery**: Optimized image loading with responsive sizing

### UI Component Libraries
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first styling framework

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and development experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Third-party Integrations
- **Google Fonts**: Inter font family for typography
- **Replit Development Tools**: Development environment integration
- **React Query**: Data fetching and state management library

### Form Handling
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for form inputs and data structures