# Digital Library

A modern web application for managing a library's book collection, built with Nuxt 3 and TypeScript.

## Features

- User authentication and registration
- Book browsing and searching
- Book borrowing system
- PDF viewing capabilities
- Real-time book availability tracking
- User profile management

## Tech Stack

- **Frontend Framework**: Nuxt 3
- **State Management**: Pinia
- **TypeScript**: For type safety and better development experience
- **UI Components**: Custom components with modern design
- **API Integration**: Salesforce backend integration

## Project Structure

```
├── assets/          # Static assets
├── components/      # Vue components
├── models/          # TypeScript interfaces and types
├── pages/           # Application pages
├── plugins/         # Nuxt plugins
├── public/          # Public static files
├── server/          # Server-side code
├── stores/          # Pinia stores
└── utils/           # Utility functions
```

## Setup

1. Clone the repository:

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file based on `.env-sample`:
```bash
cp .env-sample .env
```

4. Fill in the required environment variables:
```
NUXT_SALSEFORCE_SERVER_URL=your_salesforce_url
NUXT_SALSEFORCE_CLIENT_ID=your_client_id
NUXT_SALSEFORCE_CLIENT_SECRET=your_client_secret
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Development

- The application uses TypeScript for type safety
- Models are defined in the `models/` directory
- State management is handled by Pinia stores in the `stores/` directory
- API endpoints are configured in `nuxt.config.ts`

## API Endpoints

The application integrates with Salesforce through the following endpoints:

- `/api/auth` - Authentication
- `/api/login` - User login
- `/api/register` - User registration
- `/api/books` - Book management
- `/api/borrow` - Book borrowing
- `/api/pdf` - PDF file access
- `/api/info` - User information

## Data Models

### Book Models
- `BorrowedBook`: Represents a book borrowed by a user
- `AvailableBook`: Represents a book available in the library

### Authentication Models
- `AccessTokenResponse`: Represents the authentication token response

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Overview

![login](https://github.com/user-attachments/assets/d9c0cc42-ce7c-4126-bda8-92ec5712ff4e)
![register](https://github.com/user-attachments/assets/fadfaee8-7d4d-49a2-9016-191fee244b11)
![dashboard_1](https://github.com/user-attachments/assets/7fa38a09-41d2-4a95-9fb0-c7aebdeaffeb)
![dashboard_2](https://github.com/user-attachments/assets/06ba8a24-1569-433c-b1a5-76cb6aa7ef45)
![viewer](https://github.com/user-attachments/assets/1d7d2710-f259-439f-a01b-883332170871)
