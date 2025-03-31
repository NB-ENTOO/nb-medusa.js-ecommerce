# Enterprise Equipment Configuration Platform Technical Context

## Deployment Environment

### Environment Setup
- **Local Environment**: Windows 10 (where Cursor AI is running)
- **Remote Environment**: Proxmox LXC running Ubuntu (where project files are hosted)
- **Containerization**: Docker installed on the remote Ubuntu system
- **Connection**: Files are accessed remotely from Windows to the Ubuntu host
- **Path Structure**: Remote path is `/home/admin/docker`
- **Reference Implementation**: B2B Starter located in `/medusa/reference files/b2b-starter-medusa-main reference/`

### Command Adaptation
- Commands should be written for Ubuntu/Linux environment
- File operations happen on the remote system, not Windows
- Docker commands should be executed in the remote Ubuntu context
- SSH is used to connect from Windows to the remote system

### Development
- **Development**: Docker Compose-based local environment
- **Production**: TBD (AWS/GCP/Azure)
- **CI/CD**: GitHub Actions

## Core Technology Stack

### Backend
- **Medusa.js**: Base platform (Node.js)
- **Express**: Web server framework
- **PostgreSQL**: Primary database
- **Redis**: Caching and queue processing
- **TypeScript**: Type-safe JavaScript
- **REST API**: Primary interface for service interactions
- **JWT**: Authentication mechanism
- **PDFKit/React-PDF**: PDF generation
- **NodeMailer/SendGrid**: Email delivery
- **Compatibility Engine**: Component validation system

### Frontend
- **React.js**: UI framework
- **Next.js**: React framework with SSR capabilities
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and caching
- **Redux/Context API**: State management
- **React-PDF**: PDF generation in browser
- **Component Library**: Enterprise UI components
- **Technical Spec Renderer**: Specification display
- **Design System**: Based on B2B Starter
  - Clean, modern interface
  - Responsive grid layouts
  - Component-based architecture
  - Consistent typography
  - Enterprise-grade UI patterns

### UI Component Structure
1. **Layout Components** (from B2B Starter)
   - Header with navigation
   - Footer with links
   - Sidebar for configuration
   - Main content area
   - Modal dialogs
   - Toast notifications

2. **Feature Components** (adapted for ETB functionality)
   - Component selector
   - Configuration wizard
   - Technical spec viewer
   - Price calculator
   - Compatibility checker
   - Quotation form

3. **Common Components** (from B2B Starter)
   - Buttons
   - Forms
   - Cards
   - Tables
   - Loading states
   - Error messages

### DevOps & Tooling
- **Docker**: Containerization
- **Git**: Version control
- **NPM/Yarn**: Package management
- **ESLint/Prettier**: Code quality tools
- **Jest**: Testing framework
- **PDF Testing**: PDF generation validation
- **Email Testing**: Email delivery testing

## System Architecture

### Core Components
- **API Layer**: REST API endpoints
- **Configuration Engine**: Component configuration logic
- **Compatibility Engine**: Component validation system
- **Pricing Engine**: Dynamic price calculation
- **PDF Generator**: Technical specification PDFs
- **Email Service**: Sales team notification
- **Component Management**: Component catalog system
- **Technical Spec Generator**: Specification creation

### Frontend Architecture
- **Layout Components**
  - Header with navigation
  - Footer with links
  - Sidebar for configuration
  - Main content area
  - Modal dialogs
  - Toast notifications

- **Feature Components**
  - Component selector
  - Configuration wizard
  - Technical spec viewer
  - Price calculator
  - Compatibility checker
  - Quotation form

- **Design Patterns**
  - Card-based layouts
  - Grid systems
  - Responsive breakpoints
  - Loading states
  - Error handling
  - Form validation

### Key Concepts
- **Components**: Server parts, enterprise equipment
- **Configurations**: Component combinations
- **Compatibility Rules**: Component interaction rules
- **Technical Specifications**: System requirements
- **Pricing Models**: Dynamic pricing calculations
- **Quotations**: Generated technical proposals
- **Email Templates**: Sales notification formats

## Development Setup
- NodeJS version >=16.0.0
- PostgreSQL instance
- Redis instance (optional, but recommended)
- Medusa CLI
- PDF generation tools
- Email service configuration
- Component catalog management
- Environment configuration
- B2B Starter reference implementation

## Operational Requirements
- Regular database backups
- Redis for production performance
- Proper API authentication
- Rate limiting for public endpoints
- Secure environment variable management
- PDF generation optimization
- Email delivery reliability
- Component catalog updates
- Technical specification accuracy
- Compatibility rule validation
- Frontend performance optimization
- Mobile responsiveness
- Accessibility compliance
- UI consistency with B2B Starter

## Docker Compose Configuration
- **Services**:
  - `medusa-server`: Backend API service
  - `postgres`: PostgreSQL database
  - `redis`: Redis cache
  - `storefront`: Next.js frontend
  - `admin`: Medusa admin dashboard
- **Networks**: Internal Docker network for service communication
- **Volumes**: Persistent storage for database and cache
- **Environment Variables**: Managed through .env files 