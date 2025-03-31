# Medusa.js E-Commerce Technical Context

## Deployment Environment

### Environment Setup
- **Local Environment**: Windows 10 (where Cursor AI is running)
- **Remote Environment**: Proxmox LXC running Ubuntu (where project files are hosted)
- **Containerization**: Docker installed on the remote Ubuntu system
- **Connection**: Files are accessed remotely from Windows to the Ubuntu host
- **Path Structure**: Remote path is `/home/admin/docker`

### Command Adaptation
- Commands should be written for Ubuntu/Linux environment
- File operations happen on the remote system, not Windows
- Docker commands should be executed in the remote Ubuntu context
- SSH is used to connect from Windows to the remote system

## Core Technology Stack

### Backend
- **Medusa.js**: Headless commerce engine (Node.js)
- **Express**: Web server framework
- **PostgreSQL**: Primary database
- **Redis**: Caching and queue processing
- **TypeScript**: Type-safe JavaScript
- **REST API**: Primary interface for service interactions
- **JWT**: Authentication mechanism

### Frontend
- **React.js**: UI framework
- **Next.js**: React framework with SSR capabilities
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and caching
- **Redux/Context API**: State management
- **Medusa React**: Official React hooks for Medusa
- **Medusa Admin**: Admin dashboard interface

### DevOps & Tooling
- **Docker**: Containerization
- **Git**: Version control
- **NPM/Yarn**: Package management
- **ESLint/Prettier**: Code quality tools
- **Jest**: Testing framework

## Medusa.js Architecture

### Core Components
- **API Layer**: REST API endpoints
- **Services**: Business logic implementation
- **Models**: Data structure definitions
- **Repositories**: Database interaction
- **Subscribers**: Event handling
- **Strategies**: Pluggable implementation patterns
- **Loaders**: Module initialization
- **Plugins**: Extensibility modules

### Key Concepts
- **Entities**: Products, Variants, Orders, Customers, etc.
- **Services**: Core business logic modules
- **Plugins**: Extensions for payment, shipping, notifications, etc.
- **Events**: System for handling asynchronous operations
- **Migrations**: Database structure management
- **Customization**: Override capabilities at multiple levels

## Development Setup
- NodeJS version >=16.0.0
- PostgreSQL instance
- Redis instance (optional, but recommended)
- Medusa CLI
- Database migration tools
- Environment configuration

## Operational Requirements
- Regular database backups
- Redis for production performance
- Proper API authentication
- Rate limiting for public endpoints
- Secure environment variable management
- Payment processor security compliance 