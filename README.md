# Enterprise Equipment Configuration Platform

A modern, component-based platform for configuring enterprise equipment, inspired by ETB Technologies and built with Medusa.js.

## 🎯 Project Objective

This platform enables enterprise customers to:
- Configure complex equipment systems through an intuitive interface
- Generate detailed technical specifications
- Create accurate quotations
- Validate component compatibility
- Manage enterprise equipment configurations

## 🏗️ Architecture

The platform is built using a modern, containerized architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Configuration  │    │   External      │
│   Applications  │◄───┤   Engine API     │◄───┤   Systems       │
│   (React/Next)  │    │   (Node.js)      │    │   (PDF/Email)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Database      │
                       │   (PostgreSQL)  │
                       └─────────────────┘
```

## 🚀 Features

### Core Features
- Component-based configuration system
- Real-time compatibility validation
- Dynamic pricing calculation
- Technical specification generation
- Quotation system
- Email notifications

### Technical Features
- Docker-based development environment
- PostgreSQL database
- Redis caching
- RESTful API
- JWT authentication
- PDF generation
- Email delivery

## 🛠️ Tech Stack

- **Backend**: Medusa.js (Node.js)
- **Frontend**: Next.js with TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Containerization**: Docker & Docker Compose
- **UI Framework**: React with Tailwind CSS
- **State Management**: Redux/Context API
- **PDF Generation**: PDFKit/React-PDF
- **Email Service**: NodeMailer/SendGrid

## 🚦 Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js 20.x
- Git

### Development Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd medusa
   ```

2. Copy environment template:
   ```bash
   cp backend/.env.template backend/.env
   ```

3. Start the development environment:
   ```bash
   docker-compose up -d
   ```

4. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../storefront && npm install
   cd ../admin && npm install
   ```

5. Start the development servers:
   ```bash
   # Backend
   cd backend && npm run dev
   
   # Storefront
   cd storefront && npm run dev
   
   # Admin
   cd admin && npm run dev
   ```

### Access Points
- Storefront: http://localhost:8000
- Admin Dashboard: http://localhost:9000
- API: http://localhost:9000/api

## 📁 Project Structure

```
medusa/
├── backend/           # Medusa.js backend
├── storefront/       # Next.js storefront
├── admin/           # Admin dashboard
├── memory-bank/     # Project documentation
├── docs/           # Additional documentation
└── docker/         # Docker configuration
```

## 🔄 Development Workflow

1. **Feature Development**
   - Create feature branch
   - Implement changes
   - Write tests
   - Create pull request
   - Code review
   - Merge to main

2. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests
   - Performance testing

3. **Deployment**
   - Staging deployment
   - Production deployment
   - Monitoring
   - Backup

## 📝 Documentation

- [Project Brief](memory-bank/projectbrief.md)
- [Technical Context](memory-bank/techContext.md)
- [System Patterns](memory-bank/systemPatterns.md)
- [Progress Tracking](memory-bank/progress.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- Project Lead: [Name]
- Technical Lead: [Name]
- Frontend Developer: [Name]
- Backend Developer: [Name]

## 📞 Support

For support, please contact [contact information]. 