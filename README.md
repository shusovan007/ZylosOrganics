# xyzOrganics - Farm Fresh Organic Vegetables

A lightweight, single-page React e-commerce application for organic vegetables with shopping cart functionality and email order processing.

## Features

- **Beautiful Landing Page**: Brand introduction with organic-themed design
- **Product Catalog**: 9 fresh vegetables with images, prices (INR), and descriptions
- **Shopping Cart**: Add/remove items, quantity management, real-time total calculation
- **Checkout System**: Customer details form with validation
- **Email Integration**: Order processing via EmailJS (configured for nepat68953@misehub.com)
- **Mobile Responsive**: Optimized for all devices
- **Modern Design**: Light green and earthy tones matching organic brand

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Email Service**: EmailJS (client-side email sending)
- **Icons**: Lucide React
- **Images**: Unsplash (high-quality vegetable photos)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or open in Replit
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS (optional - currently simulated):
   - Create an account at [EmailJS.com](https://www.emailjs.com/)
   - Create a service and template
   - Set environment variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5000 in your browser

## Deployment on Replit

1. Fork this repository to your Replit account
2. The app will automatically install dependencies and start
3. Configure EmailJS environment variables in Replit's secrets tab
4. Your app will be available at your Replit URL

## Project Structure

