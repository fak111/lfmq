# LFMQ Frontend

This is the frontend application for the LFMQ project, built with Vue.js and Vite.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## Tech Stack

- Vue.js 3
- Vite
- Vue Router
- Axios for API requests
- Additional utilities: html2pdf.js, jsPDF, SweetAlert2

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.development` for development environment
   - Copy `.env.production` for production environment
   - Update the variables according to your needs

## Available Scripts

- **Development server**
  ```bash
  npm run dev
  ```
  Starts the development server with hot-reload

- **Build for production**
  ```bash
  npm run build
  ```
  Creates a production build in the `dist` directory

- **Preview production build**
  ```bash
  npm run preview
  ```
  Preview the production build locally

## Nginx Configuration

When deploying the application, ensure your Nginx configuration is properly set up:

- The backend API path should be configured as `/api`
- Ensure the Nginx configuration matches your backend API paths
- Configure proper proxy settings for API requests

## Project Structure

```
front/
├── src/           # Source code
├── public/        # Static assets
├── index.html     # Entry HTML file
├── vite.config.js # Vite configuration
└── .env.*        # Environment configurations
```

## Environment Variables

The project uses different environment files:
- `.env`: Default environment variables
- `.env.development`: Development-specific variables
- `.env.production`: Production-specific variables

## Notes

- Make sure your backend API is running and accessible
- Check the console for any error messages during development
- Refer to the Vue.js and Vite documentation for more detailed information

## License

[Your License Here]


