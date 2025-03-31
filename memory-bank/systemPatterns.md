# Medusa.js System Architecture & Patterns

## Architectural Overview

### Headless Commerce Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Medusa Core    │    │   External      │
│   Applications  │◄───┤   Commerce API   │◄───┤   Systems       │
│   (React/Next)  │    │   (Node.js)      │    │   (Payments etc)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Database      │
                       │   (PostgreSQL)  │
                       └─────────────────┘
```

## Core Design Patterns

### Service-Based Architecture
Medusa uses service classes that encapsulate business logic. Services are responsible for interacting with repositories, emitting events, and exposing methods for specific entity operations.

```typescript
// Example service pattern
class ProductService {
  constructor(
    private productRepository,
    private eventBusService
  ) {}

  async create(productData) {
    // Validate data
    // Create product
    // Emit event
    // Return result
  }
}
```

### Repository Pattern
Repositories abstract database interactions for specific entities.

```typescript
// Example repository pattern
class ProductRepository {
  constructor(manager) {
    this.manager = manager;
  }

  async findOne(id) {
    return this.manager.findOne(Product, id);
  }
}
```

### Plugin System
Medusa's plugin architecture allows extending functionality without modifying core code.

```typescript
// Example plugin registration
const loader = {
  services: [
    {
      name: "stripe",
      load: () => new StripeService(),
    },
  ],
};
```

### Event-Driven Architecture
Events facilitate communication between different parts of the system.

```typescript
// Example event emission and handling
// Emitting
eventBusService.emit("product.created", { id: product.id });

// Subscribing
class ProductSubscriber {
  constructor({ eventBusService }) {
    eventBusService.subscribe("product.created", this.handleProductCreated);
  }

  handleProductCreated = async (data) => {
    // Handle event
  };
}
```

### Strategy Pattern
Strategies provide interchangeable implementations for specific functionality.

```typescript
// Example strategy pattern
class FulfillmentService {
  constructor(fulfillmentProviders) {
    this.fulfillmentProviders = fulfillmentProviders;
  }

  async createFulfillment(method, data) {
    const provider = this.fulfillmentProviders[method];
    return provider.createFulfillment(data);
  }
}
```

## Medusa-Specific Patterns

### Entity Hierarchies
Complex relationships between entities (e.g., Products → Variants → Options).

### Customization Levels
1. **Configuration** - Environment variables and settings
2. **Plugins** - Extending functionality via plugins
3. **Override** - Replacing core services with custom implementations
4. **API Extension** - Adding custom endpoints and routes

### Data Flow Patterns
1. **Request Validation** - Incoming data validation
2. **Service Processing** - Business logic in services
3. **Repository Persistence** - Data storage via repositories
4. **Event Propagation** - Post-processing via events
5. **Response Formatting** - Standardized API responses 