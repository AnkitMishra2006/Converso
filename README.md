# 📘 Converso – Real-time AI Teaching Platform

<div align="center">
  <img src="./public/images/logo.svg" alt="Converso Logo" width="100" height="100" />
  
  **A voice-powered AI teaching platform for personalized learning experiences**
  
  [🚀 Live Demo](https://converso-six.vercel.app/) • [📖 Documentation](#-table-of-contents) • [🐛 Report Bug](https://github.com/AnkitMishra2006/Converso/issues) • [💡 Request Feature](https://github.com/AnkitMishra2006/Converso/issues)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Usage Guide](#-usage-guide)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

Converso is a cutting-edge AI-powered educational platform that creates personalized learning experiences through voice-enabled conversational companions. Built with modern web technologies, it offers real-time interaction, session management, and comprehensive learning analytics.

**Key Capabilities:**

- 🎯 **Personalized Learning**: AI companions tailored to specific subjects and learning styles
- 🗣️ **Voice Interaction**: Real-time speech-to-text and text-to-speech capabilities
- 📊 **Progress Tracking**: Comprehensive analytics and session history
- 🔐 **Secure Authentication**: Enterprise-grade security with Clerk
- 📱 **Cross-Platform**: Fully responsive design for all devices

---

## ✨ Features

### 🎙️ Voice-Powered Learning

- Real-time voice interaction with AI companions
- Custom voice selection (male/female, casual/formal styles)
- Live transcription and conversation history
- Speech-to-text and text-to-speech integration via VAPI

### 📚 Companion Management

- **Create Custom Companions**: Name, subject, topic, voice, and teaching style
- **Subject Coverage**: Mathematics, Science, Language, History, Coding, Economics
- **Flexible Duration**: 15-60 minute learning sessions
- **Search & Filter**: Find companions by subject or topic

### 🔖 Session Management

- **Bookmark Favorites**: Save and organize preferred companions
- **Session History**: Track all completed learning sessions
- **Progress Analytics**: View learning statistics and achievements
- **Recent Sessions**: Quick access to recently used companions

### 🧑‍🏫 User Experience

- **Intuitive Dashboard**: Clean, modern interface with Tailwind CSS
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Themes**: Comfortable viewing in any environment
- **Accessibility**: WCAG-compliant design patterns

### 🔧 Developer Features

- **Error Monitoring**: Integrated Sentry for real-time error tracking
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Zod schema validation with React Hook Form
- **API Integration**: Server actions with Next.js App Router

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.4.2 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: Radix UI primitives + custom components
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + custom SVG icons
- **Animations**: Lottie React for interactive elements

### Backend & Services

- **Database**: Supabase (PostgreSQL with real-time capabilities)
- **Authentication**: Clerk.dev with role-based access control
- **Voice AI**: VAPI for speech processing and AI conversations
- **Monitoring**: Sentry for error tracking and performance monitoring
- **File Storage**: Supabase Storage for assets

### Development & Deployment

- **Package Manager**: npm/yarn
- **Build Tool**: Next.js with Turbopack (development)
- **Deployment**: Vercel with automatic deployments
- **Code Quality**: ESLint + TypeScript strict mode
- **Version Control**: Git with conventional commits

---

## 🏗️ Architecture

### Application Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   (Next.js)     │    │   (Supabase)    │    │   Services      │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • React 19      │◄──►│ • PostgreSQL    │    │ • VAPI (Voice)  │
│ • TypeScript    │    │ • Row Level     │◄──►│ • Clerk (Auth)  │
│ • Tailwind CSS  │    │   Security      │    │ • Sentry (Logs) │
│ • Radix UI      │    │ • Real-time     │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Database Design

```sql
-- Core Tables
companions (id, name, subject, topic, voice, style, duration, author, created_at)
session_history (id, companion_id, user_id, created_at)
bookmarks (id, companion_id, user_id, created_at)

-- Relationships
companions.author → clerk_users.id
session_history.companion_id → companions.id
bookmarks.companion_id → companions.id
```

### Authentication Flow

```
User Login → Clerk Authentication → JWT Token → Supabase RLS → Protected Resources
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0 or higher
- **npm/yarn**: Latest stable version
- **Git**: For version control

### 1. Clone the Repository

```bash
git clone https://github.com/AnkitMishra2006/Converso.git
cd converso
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local  # If example file exists
# or create manually
touch .env.local
```

### 4. Configure Environment Variables

See [Environment Variables](#-environment-variables) section for detailed setup.

### 5. Database Setup

```bash
# Supabase will handle database creation
# Ensure your Supabase project has the required tables
# (See Database Schema section)
```

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
```

### 7. Open Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

### Required Variables

Create a `.env.local` file with the following configuration:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# VAPI Voice Integration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your-vapi-token

# Sentry Monitoring (Optional but recommended)
SENTRY_AUTH_TOKEN=your-sentry-auth-token
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
```

### Getting API Keys

#### Clerk Setup

1. Visit [Clerk Dashboard](https://dashboard.clerk.dev)
2. Create a new application
3. Copy the publishable and secret keys
4. Configure authentication providers (Google, GitHub, etc.)

#### Supabase Setup

1. Visit [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Go to Settings > API
4. Copy URL and anon key
5. Set up Row Level Security (RLS) policies

#### VAPI Setup

1. Visit [VAPI Dashboard](https://vapi.ai)
2. Create an account and project
3. Generate a web token
4. Configure voice models and settings

#### Sentry Setup (Optional)

1. Visit [Sentry Dashboard](https://sentry.io)
2. Create a new project
3. Copy the DSN and auth token
4. Configure error monitoring

---

## 🗄️ Database Schema

### Tables Overview

#### `companions`

Stores AI teaching companion configurations

```sql
CREATE TABLE companions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  topic TEXT NOT NULL,
  voice TEXT NOT NULL,
  style TEXT NOT NULL,
  duration INTEGER NOT NULL,
  author TEXT NOT NULL, -- Clerk user ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `session_history`

Tracks user learning sessions

```sql
CREATE TABLE session_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  companion_id UUID REFERENCES companions(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL, -- Clerk user ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `bookmarks`

Manages user bookmarked companions

```sql
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  companion_id UUID REFERENCES companions(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL, -- Clerk user ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(companion_id, user_id)
);
```

### Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE companions ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- Companions policies
CREATE POLICY "Public companions are viewable by everyone"
ON companions FOR SELECT USING (true);

CREATE POLICY "Users can create companions"
ON companions FOR INSERT WITH CHECK (auth.uid()::text = author);

-- Session history policies
CREATE POLICY "Users can view own sessions"
ON session_history FOR SELECT USING (auth.uid()::text = user_id);

CREATE POLICY "Users can create own sessions"
ON session_history FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Bookmarks policies
CREATE POLICY "Users can view own bookmarks"
ON bookmarks FOR SELECT USING (auth.uid()::text = user_id);

CREATE POLICY "Users can manage own bookmarks"
ON bookmarks FOR ALL USING (auth.uid()::text = user_id);
```

---

## 📁 Project Structure

```
converso/
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.tsx               # Root layout with providers
│   ├── 📄 page.tsx                 # Home page (popular companions)
│   ├── 📄 loading.tsx              # Global loading component
│   ├── 📄 global-error.tsx         # Global error boundary
│   ├── 📄 globals.css              # Global styles and Tailwind
│   ├── 📁 api/                     # API routes
│   │   └── 📁 sentry-example-api/
│   ├── 📁 companions/              # Companion-related pages
│   │   ├── 📄 page.tsx            # Companion library
│   │   ├── 📁 [id]/               # Individual companion session
│   │   │   └── 📄 page.tsx
│   │   └── 📁 new/                # Create new companion
│   │       └── 📄 page.tsx
│   ├── 📁 my-journey/             # User dashboard
│   │   └── 📄 page.tsx
│   ├── 📁 sign-in/                # Authentication pages
│   │   └── 📁 [[...sign-in]]/
│   └── 📁 subscription/            # Premium features
│
├── 📁 components/                   # Reusable UI components
│   ├── 📄 CompanionCard.tsx        # Companion display card
│   ├── 📄 CompanionComponent.tsx   # Voice interaction interface
│   ├── 📄 CompanionForm.tsx        # Companion creation form
│   ├── 📄 CompanionsList.tsx       # Tabular companion list
│   ├── 📄 CTA.tsx                  # Call-to-action section
│   ├── 📄 Navbar.tsx               # Navigation header
│   ├── 📄 NavItems.tsx             # Navigation menu items
│   ├── 📄 SearchInput.tsx          # Search functionality
│   ├── 📄 SubjectFilter.tsx        # Subject filtering
│   └── 📁 ui/                      # Base UI components
│       ├── 📄 button.tsx           # Custom button component
│       ├── 📄 form.tsx             # Form wrapper components
│       ├── 📄 input.tsx            # Input field component
│       ├── 📄 select.tsx           # Select dropdown component
│       ├── 📄 table.tsx            # Table components
│       ├── 📄 textarea.tsx         # Textarea component
│       ├── 📄 accordion.tsx        # Accordion component
│       └── 📄 label.tsx            # Label component
│
├── 📁 lib/                         # Utility functions and configurations
│   ├── 📄 supabase.ts             # Supabase client configuration
│   ├── 📄 utils.ts                # Utility functions (cn, colors)
│   ├── 📄 vapi.sdk.ts             # VAPI SDK initialization
│   └── 📁 actions/                # Server actions
│       └── 📄 companion.actions.ts # Companion CRUD operations
│
├── 📁 types/                       # TypeScript type definitions
│   ├── 📄 index.d.ts              # Global type definitions
│   └── 📄 vapi.d.ts               # VAPI-specific types
│
├── 📁 constants/                   # Application constants
│   ├── 📄 index.ts                # Global constants
│   └── 📄 soundwaves.json         # Audio visualization data
│
├── 📁 public/                      # Static assets
│   ├── 📁 icons/                  # SVG icons
│   ├── 📁 images/                 # Image assets
│   └── 📁 readme/                 # Documentation images
│
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 next.config.ts              # Next.js configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 components.json             # Shadcn/ui configuration
├── 📄 eslint.config.mjs           # ESLint configuration
├── 📄 postcss.config.mjs          # PostCSS configuration
├── 📄 middleware.ts               # Next.js middleware
├── 📄 instrumentation.ts          # Instrumentation setup
└── 📄 README.md                   # Project documentation
```

---

## 📖 Usage Guide

### Creating Your First Companion

1. **Sign In**: Use the sign-in button in the navigation
2. **Navigate to Builder**: Click "Create Companion" or go to `/companions/new`
3. **Fill the Form**:
   - **Name**: Give your companion a unique name
   - **Subject**: Choose from available subjects (Math, Science, etc.)
   - **Topic**: Specify the learning topic
   - **Voice**: Select voice type and style
   - **Duration**: Set session length (15-60 minutes)
4. **Create**: Click "Build Your Companion"
5. **Start Learning**: Begin your voice-powered learning session

### Managing Learning Sessions

#### Starting a Session

1. Browse companions on the home page or companion library
2. Click on a companion card to enter the session
3. Click the microphone button to start voice interaction
4. Speak naturally with your AI companion

#### Session Features

- **Live Transcription**: See your conversation in real-time
- **Voice Control**: Toggle microphone on/off
- **Session Timer**: Track remaining time
- **Conversation History**: Review the full dialogue

#### Bookmarking Companions

- Click the bookmark icon on any companion card
- Access bookmarked companions from your dashboard
- Remove bookmarks by clicking the filled bookmark icon

### Dashboard Overview

Access your personal dashboard at `/my-journey`:

#### Stats Overview

- **Total Sessions**: Number of completed learning sessions
- **Companions Created**: Your custom companion count
- **Learning Time**: Total time spent in sessions

#### Accordion Sections

- **Bookmarked Companions**: Quick access to saved companions
- **Recent Sessions**: History of completed learning sessions
- **Created Companions**: Companions you've built

### Search and Filtering

#### Global Search

- Use the search bar to find companions by name or topic
- Results update in real-time as you type
- Search works across all public companions

#### Subject Filtering

- Filter companions by subject category
- Combine with search for refined results
- Available subjects: Math, Science, Language, History, Coding, Economics

### Voice Interaction Tips

#### Best Practices

- **Clear Audio**: Use a good microphone in a quiet environment
- **Natural Speech**: Speak conversationally, not robotically
- **Wait for Responses**: Allow the AI to complete responses
- **Ask Questions**: Engage actively with follow-up questions

#### Troubleshooting

- **No Audio**: Check microphone permissions in browser
- **Poor Recognition**: Speak clearly and reduce background noise
- **Connection Issues**: Refresh the page and restart session

---

## 🔌 API Reference

### Server Actions

#### Companion Management

```typescript
// Create a new companion
createCompanion(formData: CreateCompanion): Promise<Companion>

// Get all companions with optional filtering
getAllCompanions(params: GetAllCompanions): Promise<Companion[]>

// Get specific companion by ID
getCompanion(id: string): Promise<Companion>

// Get user's created companions
getUserCompanions(userId: string): Promise<Companion[]>
```

#### Session Management

```typescript
// Add session to history
addToSessionHistory(companionId: string): Promise<void>

// Get recent sessions across all users
getRecentSessions(limit?: number): Promise<Companion[]>

// Get user's session history
getUserSessions(userId: string, limit?: number): Promise<Companion[]>
```

#### Bookmark Management

```typescript
// Add companion to bookmarks
addBookmark(companionId: string, path: string): Promise<void>

// Remove companion from bookmarks
removeBookmark(companionId: string, path: string): Promise<void>

// Get user's bookmarked companions
getBookmarkedCompanions(userId: string): Promise<Companion[]>
```

#### Permission Checks

```typescript
// Check if user can create new companions
newCompanionPermissions(): Promise<boolean>
```

### Type Definitions

```typescript
interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface Companion {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  voice: string;
  style: string;
  author: string;
  created_at: string;
}
```

### Voice Integration (VAPI)

```typescript
// Initialize VAPI client
import { vapi } from "@/lib/vapi.sdk";

// Start voice conversation
vapi.start({
  assistantId: "companion-id",
  conversationConfig: {
    // Voice configuration
  },
});

// Stop conversation
vapi.stop();

// Handle voice events
vapi.on("speech-start", () => {});
vapi.on("speech-end", () => {});
vapi.on("call-end", () => {});
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

#### Automatic Deployment

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment**: Add all environment variables in Vercel dashboard
3. **Deploy**: Automatic deployments on every push to main branch

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Environment Variables in Vercel

Go to your Vercel project dashboard and add all required environment variables from the [Environment Variables](#-environment-variables) section.

### Other Deployment Options

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next

# Environment variables
# Add the same variables as listed above
```

#### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Supabase database tables created
- [ ] RLS policies enabled
- [ ] Clerk authentication configured
- [ ] VAPI integration tested
- [ ] Sentry error monitoring setup
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. **Fork the Repository**

```bash
git clone https://github.com/your-username/converso.git
cd converso
```

2. **Create Feature Branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Install Dependencies**

```bash
npm install
```

4. **Set Up Environment**
   Follow the [Getting Started](#-getting-started) guide

5. **Make Changes**

- Write clean, documented code
- Follow existing code style
- Add tests for new features
- Update documentation as needed

6. **Test Your Changes**

```bash
npm run dev  # Test locally
npm run build  # Test production build
npm run lint  # Check code style
```

7. **Commit and Push**

```bash
git add .
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

8. **Create Pull Request**

- Provide clear description of changes
- Include screenshots for UI changes
- Reference any related issues

### Code Style Guidelines

- **TypeScript**: Use strict type checking
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS with custom design system
- **Naming**: Use descriptive, camelCase naming
- **Comments**: Document complex logic and APIs

### Issue Reporting

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots or videos if applicable

### Feature Requests

For new features, please provide:

- Clear use case description
- Proposed solution
- Alternative solutions considered
- Impact on existing functionality

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Converso Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <p>Built with ❤️ by the Converso Team</p>
  <p>
    <a href="https://converso-ankitmishra2006s-projects.vercel.app/">🌐 Live Demo</a> •
    <a href="https://github.com/AnkitMishra2006/Converso/issues">🐛 Report Bug</a> •
    <a href="https://github.com/AnkitMishra2006/Converso/issues">💡 Request Feature</a>
  </p>
</div>
