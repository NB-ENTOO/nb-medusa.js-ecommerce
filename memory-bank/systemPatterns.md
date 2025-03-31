# Enterprise Equipment Configuration System Architecture & Patterns

## Architectural Overview

### Component-Based Configuration Architecture
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

## Core Design Patterns

### Component Management System
```typescript
// Component definition pattern
interface Component {
  id: string;
  name: string;
  type: ComponentType;
  specifications: TechnicalSpecs;
  compatibility: CompatibilityRules[];
  pricing: PricingModel;
  availability: StockStatus;
}

// Component service pattern
class ComponentService {
  constructor(
    private componentRepository,
    private compatibilityService,
    private pricingService
  ) {}

  async validateConfiguration(components: Component[]) {
    // Check compatibility
    // Validate technical requirements
    // Calculate pricing
    // Return validation result
  }
}
```

### Configuration Engine
```typescript
// Configuration state pattern
interface ConfigurationState {
  selectedComponents: Component[];
  validationStatus: ValidationResult;
  pricing: PriceBreakdown;
  technicalSpecs: TechnicalSpecifications;
}

// Configuration service pattern
class ConfigurationService {
  constructor(
    private componentService,
    private pricingService,
    private specGenerator
  ) {}

  async updateConfiguration(componentId: string, action: ConfigurationAction) {
    // Update configuration
    // Validate changes
    // Recalculate pricing
    // Update specifications
    // Return new state
  }
}
```

### Quotation System
```typescript
// Quotation generation pattern
class QuotationService {
  constructor(
    private pdfGenerator,
    private emailService,
    private configurationService
  ) {}

  async generateQuotation(configuration: ConfigurationState) {
    // Generate PDF
    // Format technical specifications
    // Calculate final pricing
    // Send to sales team
    // Return quotation reference
  }
}
```

### Compatibility Engine
```typescript
// Compatibility rule pattern
interface CompatibilityRule {
  componentId: string;
  requiredComponents: string[];
  incompatibleComponents: string[];
  technicalRequirements: TechnicalRequirement[];
}

// Compatibility service pattern
class CompatibilityService {
  constructor(
    private ruleRepository,
    private validationEngine
  ) {}

  async validateCompatibility(components: Component[]) {
    // Check component compatibility
    // Validate technical requirements
    // Return validation result
  }
}
```

## Frontend Design Patterns

### Layout Components
```typescript
// Header component pattern (from B2B Starter)
interface HeaderProps {
  navigation: NavigationItem[];
  user: User;
  cart: Cart;
}

// Sidebar component pattern (adapted for configuration)
interface SidebarProps {
  configuration: ConfigurationState;
  components: Component[];
  onComponentSelect: (component: Component) => void;
}

// Main content area pattern (from B2B Starter)
interface MainContentProps {
  children: React.ReactNode;
  layout: 'grid' | 'list' | 'detail';
}
```

### Feature Components
```typescript
// Component selector pattern (adapted from B2B product selector)
interface ComponentSelectorProps {
  components: Component[];
  selected: Component[];
  onSelect: (component: Component) => void;
  onDeselect: (component: Component) => void;
}

// Configuration wizard pattern (new for ETB functionality)
interface ConfigurationWizardProps {
  steps: ConfigurationStep[];
  currentStep: number;
  onStepComplete: (step: number) => void;
}

// Technical spec viewer pattern (new for ETB functionality)
interface TechnicalSpecViewerProps {
  specifications: TechnicalSpecifications;
  format: 'table' | 'list' | 'tree';
}
```

### State Management
```typescript
// Configuration context pattern (adapted from B2B cart context)
interface ConfigurationContext {
  state: ConfigurationState;
  dispatch: ConfigurationDispatch;
  actions: ConfigurationActions;
}

// Component selection pattern (new for ETB functionality)
interface ComponentSelectionState {
  selected: Component[];
  compatible: Component[];
  incompatible: Component[];
  validation: ValidationResult;
}
```

## System-Specific Patterns

### Component Hierarchies
Complex relationships between components:
- Base Systems → Components → Sub-components
- Technical Specifications → Requirements → Validations
- Pricing Models → Component Prices → Configuration Prices

### Customization Levels
1. **Component Templates** - Pre-defined component configurations
2. **Pricing Rules** - Dynamic pricing calculations
3. **Compatibility Rules** - Component interaction rules
4. **Technical Requirements** - System specifications

### Data Flow Patterns
1. **Component Selection** - User component selection
2. **Configuration Validation** - Compatibility checking
3. **Price Calculation** - Dynamic pricing updates
4. **Specification Generation** - Technical spec creation
5. **Quotation Generation** - PDF creation and delivery

### Integration Patterns
1. **PDF Generation** - Technical specification formatting
2. **Email Delivery** - Sales team notification
3. **Price Calculation** - Dynamic pricing engine
4. **Compatibility Checking** - Component validation
5. **Technical Specs** - Specification generation

### UI/UX Patterns
1. **Responsive Design** (from B2B Starter)
   - Mobile-first approach
   - Breakpoint system
   - Flexible layouts
   - Touch-friendly interfaces

2. **Component Selection** (adapted from B2B product selection)
   - Grid/List views
   - Filtering system
   - Search functionality
   - Quick view options

3. **Configuration Interface** (new for ETB functionality)
   - Step-by-step wizard
   - Real-time validation
   - Visual feedback
   - Progress tracking

4. **Technical Display** (new for ETB functionality)
   - Tabbed interfaces
   - Expandable sections
   - Comparison views
   - Specification tables

5. **User Feedback** (from B2B Starter)
   - Toast notifications
   - Loading states
   - Error messages
   - Success confirmations

### Component Adaptation Patterns
1. **Layout Components**
   - Header: Navigation + Configuration status
   - Sidebar: Component selection + Configuration steps
   - Main content: Component display + Configuration wizard
   - Footer: Links + Contact information

2. **Feature Components**
   - Product cards → Component cards
   - Cart → Configuration summary
   - Checkout → Quotation generation
   - Product details → Technical specifications

3. **Common Components**
   - Buttons: Primary, Secondary, Tertiary
   - Forms: Input fields, Selectors, Checkboxes
   - Cards: Component cards, Configuration cards
   - Tables: Specification tables, Price breakdowns
   - Modals: Configuration steps, Validation messages
   - Loading states: Component loading, Configuration processing 