# Cash Cup Event Management System

## Project Overview

Cash Cup is a professional sports tournament management platform founded in Jeddah, Saudi Arabia. The system manages the complete lifecycle of football/soccer tournaments - from player registration and team formation through tournament execution, live score tracking, and prize distribution (including cryptocurrency options).

### Core Mission
Transform local and regional football tournaments into professionally managed events with transparent operations, digital contract management, and real-time match tracking.

### Key Stakeholders
- **Public Users**: Fans and spectators accessing tournament information
- **Players**: Registered athletes with contracts and tournament participation
- **Team Managers**: Organization administrators managing rosters and operations
- **System Administrators**: Platform operators ensuring integrity and smooth operations

## Technical Stack

### Frontend
- **Framework**: Next.js 14+ with React 18+
- **Styling**: Tailwind CSS with DaisyUI component library
- **State Management**: Zustand for global state, React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Real-time Updates**: Server-Sent Events (SSE) for live scores
- **Image Handling**: Next/Image with Uploadthing for uploads

### Backend
- **API**: Next.js API Routes (REST)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk (OTP-based authentication)
- **File Storage**:
  - AWS S3 for document storage (contracts, etc.)
  - Uploadthing for static assets
  - MongoDB GridFS for app data
- **Email Service**: Resend
- **Payment Processing**: Stripe (fiat and crypto conversions)
- **E-Signature**: Dropbox Sign API
- **PDF Generation**: React-PDF or Puppeteer

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **Monitoring**: Vercel Analytics + Sentry
- **Testing**: Playwright for E2E tests

## Styling Approach

### Brand Colors (Light Mode)
```css
:root {
  /* Primary accent - sporty, energetic */
  --color-primary: #FF4D00;       /* Electric Orange */

  /* Secondary - near black for text */
  --color-secondary: #0A0A0A;

  /* Backgrounds */
  --color-base-100: #FFFFFF;      /* Pure white */
  --color-base-200: #F8F9FA;      /* Light gray cards */
  --color-base-300: #E5E7EB;      /* Borders */

  /* Text */
  --color-neutral: #1F2937;       /* Charcoal body text */

  /* Feedback */
  --color-success: #059669;       /* Emerald */
  --color-error: #DC2626;         /* Red */
  --color-warning: #D97706;       /* Amber */
  --color-info: #2563EB;          /* Blue */
}
```

### Typography
- **Headings**: Montserrat (weights 700-900) - bold, uppercase, tight tracking
- **Body**: Inter (weights 400-600) - clean, modern, highly readable

### Design Principles
- **Light mode** - clean white backgrounds
- **Minimalist** - functional, no unnecessary decoration
- **Premium sports aesthetic** - bold typography, sharp edges
- **Mobile-first** responsive design
- **Subtle interactions** - border color changes on hover
- **Strong hierarchy** - clear visual distinction between elements

### DaisyUI Custom Theme
```javascript
// Defined in globals.css using @plugin "daisyui/theme"
{
  name: "cashcup",
  prefersdark: false,
  color-scheme: "light",

  "--color-primary": "#ff4d00",
  "--color-primary-content": "#ffffff",
  "--color-secondary": "#0a0a0a",
  "--color-secondary-content": "#ffffff",
  "--color-base-100": "#ffffff",
  "--color-base-200": "#f8f9fa",
  "--color-base-300": "#e5e7eb",
  "--color-base-content": "#0a0a0a",
  "--color-neutral": "#1f2937",
  "--color-success": "#059669",
  "--color-error": "#dc2626",
  "--color-warning": "#d97706",
  "--color-info": "#2563eb",

  "--radius-selector": "0.25rem",
  "--radius-field": "0.25rem",
  "--radius-box": "0.5rem"
}
```

### CSS Utility Classes
- `.font-heading` - Montserrat, uppercase, bold (for headings)
- `.font-body` - Inter, regular (for body text)
- `.stat-card` - Bordered card with hover effect

## Features to Build

### Phase 1: Core Platform (Weeks 1-4)
- [ ] Authentication system with Clerk OTP
- [ ] User role management (Player, Manager, Admin)
- [ ] Basic responsive layout with navigation
- [ ] Database schema implementation
- [ ] Home page with fixtures widget

### Phase 2: Public Features (Weeks 5-6)
- [ ] Events hub with filtering/sorting
- [ ] Player showcase with stat cards
- [ ] Team profiles with rosters
- [ ] Live score updates via SSE
- [ ] Mobile-optimized views

### Phase 3: Player Features (Weeks 7-8)
- [ ] Player dashboard
- [ ] Digital contract viewing/signing
- [ ] Tournament check-in system
- [ ] Profile management
- [ ] Personal statistics view

### Phase 4: Manager Features (Weeks 9-10)
- [ ] Team management dashboard
- [ ] Roster control (add/remove players)
- [ ] Player transfer/swap requests
- [ ] Tournament registration
- [ ] Entry fee payment via Stripe
- [ ] Sponsor logo management

### Phase 5: Admin Features (Weeks 11-12)
- [ ] Admin control panel
- [ ] Transfer approval system
- [ ] QR code player check-in
- [ ] Tournament configuration
- [ ] Prize pool management
- [ ] Match score input interface
- [ ] Audit log viewing

### Phase 6: Advanced Features (Weeks 13-14)
- [ ] Email notification system
- [ ] Cryptocurrency payout options
- [ ] Advanced analytics dashboards
- [ ] PDF contract generation
- [ ] Comprehensive testing

## All Pages (Role-Based Access)

### Public Access (No Auth)
```
/                           # Home with live fixtures
/events                     # Tournament calendar and archive
/events/[id]               # Single event details
/players                   # Player database
/players/[id]              # Player profile
/teams                     # Team directory
/teams/[id]                # Team profile
/login                     # OTP authentication
/signup                    # Registration (Player/Manager)
```

### Player Access (Auth Required)
```
/dashboard                 # Player dashboard
/dashboard/profile         # Edit personal info
/dashboard/contracts       # View/sign contracts
/dashboard/tournaments     # My tournaments
/dashboard/check-in        # Tournament check-in
/dashboard/statistics      # Personal stats
```

### Manager Access (Auth Required)
```
/manager                   # Manager dashboard
/manager/team             # Team profile management
/manager/roster           # Player roster control
/manager/transfers        # Transfer requests
/manager/tournaments      # Tournament registration
/manager/payments         # Entry fee payments
/manager/sponsors         # Sponsor management
/manager/analytics        # Team analytics
```

### Admin Access (Auth Required)
```
/admin                    # Admin dashboard
/admin/tournaments        # Tournament management
/admin/tournaments/create # Create tournament
/admin/tournaments/[id]   # Manage specific tournament
/admin/transfers          # Approve transfers
/admin/users             # User management
/admin/check-in          # QR check-in interface
/admin/scores            # Live score input
/admin/payments          # Prize distribution
/admin/audit             # System audit logs
/admin/analytics         # Platform analytics
```

## All Flows (Role-Based)

### Public User Flows
1. **Browse Tournaments**: Home → Events → Filter/Sort → View Details
2. **Track Live Matches**: Home → Live Fixtures → Auto-refresh scores
3. **Discover Players**: Players → Filter by Position/Stats → View Profile
4. **Follow Teams**: Teams → Select Team → View Roster/News

### Player Flows
1. **Registration**: Signup → OTP Verification → Create Profile → Await Approval
2. **Join Team**: Receive Invitation → Review Contract → E-Sign → Join Roster
3. **Tournament Participation**: View Tournaments → Check-in → Play → View Results
4. **Transfer Process**: Receive Transfer Offer → Review Terms → Accept/Decline

### Manager Flows
1. **Team Setup**: Register → Create Team Profile → Add Sponsors → Configure
2. **Player Recruitment**: Browse Players → Send Contract → Await Signature → Add to Roster
3. **Tournament Entry**: Browse Events → Register Team → Pay Fee → Manage Lineup
4. **Transfer Management**: Initiate Transfer → Negotiate Terms → Submit for Approval

### Admin Flows
1. **Tournament Creation**: Define Rules → Set Prize Pool → Configure Brackets → Publish
2. **Match Management**: Start Match → Input Scores → Update Live → Finalize Results
3. **Transfer Approval**: Review Request → Verify Contracts → Approve/Reject → Notify
4. **Prize Distribution**: Calculate Winnings → Choose Payment Method → Process Payout

## Database Schema

### Core Collections

```javascript
// Users Collection
{
  _id: ObjectId,
  clerkId: String (unique),
  email: String,
  phone: String,
  role: ['player', 'manager', 'admin'],
  status: ['pending', 'active', 'suspended'],
  createdAt: Date,
  updatedAt: Date
}

// Players Collection
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  name: String,
  dateOfBirth: Date,
  gender: ['male', 'female'],
  nationality: String,
  height: Number, // cm
  weight: Number, // kg
  preferredFoot: ['left', 'right', 'both'],
  position: ['GK', 'DEF', 'MID', 'FWD'],
  jerseyNumber: Number,
  bio: String,
  profileImage: String,
  currentTeamId: ObjectId (ref: Teams),
  contractEndDate: Date,
  statistics: {
    matchesPlayed: Number,
    goals: Number,
    assists: Number,
    yellowCards: Number,
    redCards: Number,
    mvpAwards: Number
  },
  achievements: [{
    title: String, // 'MVP', 'Top Scorer', etc
    tournamentId: ObjectId,
    date: Date
  }],
  status: ['available', 'contracted', 'suspended'],
  createdAt: Date,
  updatedAt: Date
}

// Teams Collection
{
  _id: ObjectId,
  name: String (unique),
  managerId: ObjectId (ref: Users),
  logo: String,
  coverImage: String,
  description: String,
  foundedDate: Date,
  homeVenue: String,
  contactEmail: String,
  contactPhone: String,
  socialMedia: {
    instagram: String,
    twitter: String,
    facebook: String
  },
  sponsors: [{
    name: String,
    logo: String,
    tier: ['primary', 'secondary'],
    startDate: Date,
    endDate: Date
  }],
  roster: [{
    playerId: ObjectId (ref: Players),
    joinedDate: Date,
    contractId: ObjectId (ref: Contracts)
  }],
  statistics: {
    tournamentsWon: Number,
    matchesPlayed: Number,
    winRate: Number
  },
  bankDetails: {
    accountName: String,
    iban: String,
    bankName: String
  },
  cryptoWallets: {
    btc: String,
    eth: String
  },
  status: ['active', 'inactive', 'suspended'],
  createdAt: Date,
  updatedAt: Date
}

// Tournaments Collection
{
  _id: ObjectId,
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  venue: String,
  format: ['knockout', 'league', 'group+knockout'],
  maxTeams: Number,
  entryFee: {
    amount: Number,
    currency: String
  },
  prizePool: {
    total: Number,
    currency: String,
    distribution: {
      first: Number,
      second: Number,
      third: Number
    },
    cryptoEquivalent: {
      btc: Number,
      eth: Number
    }
  },
  registeredTeams: [{
    teamId: ObjectId (ref: Teams),
    registrationDate: Date,
    paymentStatus: ['pending', 'paid'],
    paymentId: String
  }],
  matches: [ObjectId (ref: Matches)],
  rules: String,
  status: ['upcoming', 'registration', 'ongoing', 'completed'],
  createdBy: ObjectId (ref: Users),
  createdAt: Date,
  updatedAt: Date
}

// Matches Collection
{
  _id: ObjectId,
  tournamentId: ObjectId (ref: Tournaments),
  homeTeamId: ObjectId (ref: Teams),
  awayTeamId: ObjectId (ref: Teams),
  matchDate: Date,
  venue: String,
  round: String, // 'Group A', 'Quarter-Final', etc
  score: {
    home: Number,
    away: Number
  },
  events: [{
    type: ['goal', 'yellowCard', 'redCard', 'substitution'],
    playerId: ObjectId (ref: Players),
    minute: Number,
    description: String
  }],
  lineup: {
    home: [ObjectId (ref: Players)],
    away: [ObjectId (ref: Players)]
  },
  checkedInPlayers: [{
    playerId: ObjectId,
    checkInTime: Date,
    qrCode: String
  }],
  officials: {
    referee: String,
    assistants: [String]
  },
  status: ['scheduled', 'live', 'completed', 'postponed'],
  createdAt: Date,
  updatedAt: Date
}

// Contracts Collection
{
  _id: ObjectId,
  playerId: ObjectId (ref: Players),
  teamId: ObjectId (ref: Teams),
  startDate: Date,
  endDate: Date,
  terms: String,
  salary: {
    amount: Number,
    currency: String,
    frequency: String
  },
  bonuses: [{
    type: String,
    amount: Number,
    condition: String
  }],
  documentUrl: String, // S3 URL
  signatureStatus: ['pending', 'signed'],
  signatureData: {
    signedAt: Date,
    signatureId: String, // Dropbox Sign ID
    ipAddress: String
  },
  status: ['draft', 'sent', 'active', 'expired', 'terminated'],
  createdBy: ObjectId (ref: Users),
  createdAt: Date,
  updatedAt: Date
}

// Transfers Collection
{
  _id: ObjectId,
  playerId: ObjectId (ref: Players),
  fromTeamId: ObjectId (ref: Teams),
  toTeamId: ObjectId (ref: Teams),
  transferFee: {
    amount: Number,
    currency: String
  },
  requestedBy: ObjectId (ref: Users),
  approvedBy: ObjectId (ref: Users),
  contractId: ObjectId (ref: Contracts),
  reason: String,
  status: ['pending', 'approved', 'rejected'],
  rejectionReason: String,
  createdAt: Date,
  updatedAt: Date
}

// Payments Collection
{
  _id: ObjectId,
  type: ['entry_fee', 'prize_payout', 'transfer_fee'],
  amount: Number,
  currency: String,
  fromEntity: {
    type: ['team', 'tournament'],
    id: ObjectId
  },
  toEntity: {
    type: ['team', 'player', 'platform'],
    id: ObjectId
  },
  stripePaymentId: String,
  cryptoTxHash: String,
  method: ['card', 'bank', 'btc', 'eth'],
  status: ['pending', 'processing', 'completed', 'failed'],
  metadata: Object,
  createdAt: Date,
  updatedAt: Date
}

// AuditLogs Collection
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  action: String,
  entity: String,
  entityId: ObjectId,
  changes: Object,
  ipAddress: String,
  userAgent: String,
  timestamp: Date
}

// Notifications Collection
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  type: String,
  title: String,
  message: String,
  data: Object,
  read: Boolean,
  emailSent: Boolean,
  createdAt: Date
}
```

## File Structure

```
cash-cup/
├── .env.local
├── .gitignore
├── claude.md
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md
│
├── public/
│   ├── logo/
│   ├── icons/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── events/
│   │   │   ├── players/
│   │   │   └── teams/
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   │
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── profile/
│   │   │   ├── contracts/
│   │   │   └── tournaments/
│   │   │
│   │   ├── manager/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── team/
│   │   │   ├── roster/
│   │   │   └── transfers/
│   │   │
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── tournaments/
│   │   │   ├── transfers/
│   │   │   └── audit/
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       ├── players/
│   │       ├── teams/
│   │       ├── tournaments/
│   │       ├── matches/
│   │       ├── contracts/
│   │       ├── payments/
│   │       └── sse/
│   │
│   ├── components/
│   │   ├── ui/           # DaisyUI custom components
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── features/     # Feature-specific components
│   │   ├── forms/        # Reusable form components
│   │   └── charts/       # Analytics visualizations
│   │
│   ├── lib/
│   │   ├── db/
│   │   │   ├── connect.ts
│   │   │   └── models/
│   │   ├── auth/
│   │   ├── email/
│   │   ├── payments/
│   │   ├── storage/
│   │   └── utils/
│   │
│   ├── hooks/           # Custom React hooks
│   ├── stores/          # Zustand stores
│   ├── types/           # TypeScript types
│   └── styles/          # Additional styles
│
├── tests/
│   ├── e2e/            # Playwright tests
│   └── fixtures/       # Test data
│
└── scripts/
    ├── seed.js         # Database seeding
    └── migrate.js      # Database migrations
```

## Coding Standards

### General Principles
- **Type Safety**: Full TypeScript with strict mode
- **Component Architecture**: Functional components with hooks
- **State Management**: Zustand for global, React Query for server
- **Error Handling**: Comprehensive try-catch with Sentry logging
- **Code Quality**: ESLint + Prettier with pre-commit hooks

### Naming Conventions
```typescript
// Files and folders: kebab-case
player-profile.tsx
api-utils.ts

// Components: PascalCase
PlayerCard.tsx
MatchFixture.tsx

// Functions and variables: camelCase
const getUserProfile = () => {}
let matchScore = 0

// Constants: UPPER_SNAKE_CASE
const MAX_TEAM_SIZE = 25
const API_TIMEOUT = 5000

// Types and Interfaces: PascalCase with I/T prefix
interface IPlayer {}
type TMatchStatus = 'live' | 'completed'

// Enums: PascalCase with members in UPPER_SNAKE_CASE
enum UserRole {
  PLAYER = 'player',
  MANAGER = 'manager'
}
```

### React/Next.js Best Practices
```typescript
// Use function declarations for pages
export default function PlayerProfile() {
  return <div>...</div>
}

// Use arrow functions for components
const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  return <div>...</div>
}

// Custom hooks must start with 'use'
const usePlayerData = (id: string) => {
  // hook logic
}

// Avoid inline styles, use Tailwind classes
// ❌ Bad
<div style={{ margin: '10px' }}>

// ✅ Good
<div className="m-2.5">
```

### API Design Standards
```typescript
// RESTful endpoints
GET    /api/players          // List
GET    /api/players/:id      // Single
POST   /api/players          // Create
PUT    /api/players/:id      // Update
DELETE /api/players/:id      // Delete

// Response format
{
  success: boolean,
  data?: any,
  error?: {
    code: string,
    message: string
  },
  meta?: {
    page: number,
    total: number
  }
}

// Status codes
200 - Success
201 - Created
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 - Server Error
```

### Database Query Patterns
```typescript
// Always use lean() for read-only queries
const players = await Player.find().lean()

// Use select() to limit fields
const player = await Player.findById(id)
  .select('name position team')
  .lean()

// Pagination pattern
const page = parseInt(req.query.page) || 1
const limit = parseInt(req.query.limit) || 20
const skip = (page - 1) * limit

const players = await Player.find()
  .skip(skip)
  .limit(limit)
  .sort({ createdAt: -1 })

// Always use transactions for multi-document updates
const session = await mongoose.startSession()
session.startTransaction()
try {
  // operations
  await session.commitTransaction()
} catch (error) {
  await session.abortTransaction()
  throw error
} finally {
  session.endSession()
}
```

## Security Concerns

### Authentication & Authorization
- **OTP Only**: No password storage, only OTP via Clerk
- **Role-Based Access**: Middleware to check user roles
- **Session Management**: Secure HTTP-only cookies
- **Rate Limiting**: Implement on all API endpoints

### Data Protection
```typescript
// Input validation with Zod
const playerSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  dateOfBirth: z.string().datetime()
})

// SQL Injection prevention (MongoDB)
// Always use parameterized queries
// Never use string concatenation for queries

// XSS Prevention
// Sanitize all user input
// Use Next.js built-in protections
// Content Security Policy headers
```

### File Security
- **Upload Validation**: Check file types and sizes
- **Virus Scanning**: Implement for contract uploads
- **Access Control**: Pre-signed URLs for S3
- **Document Encryption**: For sensitive contracts

### Payment Security
- **PCI Compliance**: Use Stripe, never store card data
- **Webhook Validation**: Verify Stripe signatures
- **Idempotency Keys**: Prevent duplicate charges
- **Audit Trail**: Log all financial transactions

### API Security
```typescript
// Rate limiting
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP
})

// CORS configuration
const cors = {
  origin: process.env.ALLOWED_ORIGINS?.split(','),
  credentials: true
}

// API key for admin operations
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key']
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ error: 'Forbidden' })
  }
  next()
}
```

## Environment Variables

```bash
# Application
NEXT_PUBLIC_APP_URL=https://cashcupsports.com
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://...
DB_NAME=cashcup

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Storage
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=me-south-1
AWS_S3_BUCKET=cashcup-documents
UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...

# Payment (Stripe)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend)
RESEND_API_KEY=re_...
EMAIL_FROM=noreply@cashcupsports.com

# E-Signature (Dropbox Sign)
DROPBOX_SIGN_API_KEY=...
DROPBOX_SIGN_CLIENT_ID=...

# Crypto Rates API
COINBASE_API_KEY=...
COINBASE_API_SECRET=...

# Analytics
NEXT_PUBLIC_GA_ID=G-...
SENTRY_DSN=...

# Admin
ADMIN_API_KEY=...
ADMIN_EMAIL=admin@cashcupsports.com

# Feature Flags
ENABLE_CRYPTO_PAYOUTS=true
ENABLE_QR_CHECKIN=true
ENABLE_EMAIL_NOTIFICATIONS=true
```

## Development Notes

### Getting Started
```bash
# Clone repository
git clone https://github.com/cashcup/platform.git
cd platform

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Set up database
npm run db:setup
npm run db:seed

# Run development server
npm run dev

# Run tests
npm run test:e2e
```

### Git Workflow
```bash
# Branch naming
feature/add-player-stats
bugfix/transfer-approval-error
hotfix/payment-processing

# Commit messages
feat: add player statistics dashboard
fix: resolve transfer approval workflow
docs: update API documentation
test: add e2e tests for payment flow
refactor: optimize database queries
```

### Testing Strategy
1. **E2E Testing (Playwright)**
   - Complete user flows
   - Critical paths: Registration, Payment, Transfers
   - Cross-browser testing

2. **Integration Tests**
   - API endpoint testing
   - Database operations
   - Third-party service mocks

3. **Manual Testing Checklist**
   - Mobile responsiveness
   - Live score updates
   - Payment flows
   - Email notifications
   - QR code scanning

### Performance Optimization
- **Image Optimization**: Use Next/Image with proper sizing
- **Code Splitting**: Dynamic imports for heavy components
- **Database Indexing**: Create indexes on frequently queried fields
- **Caching Strategy**:
  - Static pages: ISR with 60s revalidation
  - API responses: Redis for live scores
  - Browser: Aggressive caching for assets

### Monitoring & Analytics
- **Error Tracking**: Sentry for production errors
- **Performance**: Vercel Analytics + Web Vitals
- **User Analytics**: Google Analytics 4
- **Custom Dashboards**:
  - Tournament participation rates
  - Payment success rates
  - User engagement metrics
  - System health dashboard

### Deployment Checklist
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] SSL certificates active
- [ ] Email templates tested
- [ ] Payment webhooks configured
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] Backup strategy in place
- [ ] Monitoring alerts set up

### Support & Maintenance
- **Database Backups**: Daily automated backups
- **Update Schedule**: Security patches weekly, features bi-weekly
- **User Support**: In-app help center + email support
- **Documentation**: Keep README and API docs updated
- **Change Log**: Maintain CHANGELOG.md for all releases

### Known Limitations & Future Enhancements
- Currently football/soccer only (multi-sport support possible)
- English language only (Arabic localization planned)
- Web-only platform (mobile apps in roadmap)
- Manual score entry (API integration possible)

### Important Contacts
- **Technical Lead**: [TBD]
- **Database Admin**: [TBD]
- **Security Officer**: [TBD]
- **Customer Support**: cashcup.info@gmail.com

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:setup        # Initialize database
npm run db:seed         # Seed test data
npm run db:migrate      # Run migrations
npm run db:backup       # Backup database

# Testing
npm run test:e2e        # Run E2E tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report

# Code Quality
npm run lint            # Run ESLint
npm run format          # Run Prettier
npm run type-check      # TypeScript check

# Deployment
npm run deploy:staging  # Deploy to staging
npm run deploy:prod     # Deploy to production
```

---

*Last Updated: October 2024*
*Version: 1.0.0*
