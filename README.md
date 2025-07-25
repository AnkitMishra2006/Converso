# 📘 Converso – Real-time AI Teaching Platform

Converso is a voice-powered AI teaching platform built with **Next.js**, **TypeScript**, **Supabase**, and **Clerk** for real-time personalized learning experiences through conversational companions.
Deployed Link: [Converso](https://converso-ankitmishra2006s-projects.vercel.app/)

---

### 🌟 Features

- 🎙️ Voice-enabled AI teaching companions
- 📚 Companion creation with customizable name, subject, topic, voice, and style
- 🔖 Bookmark and manage learning sessions
- 🧑‍🏫 User authentication using Clerk
- 📊 Dashboard with learning stats
- 🧩 Sentry integration for error monitoring
- 🔍 Search and subject filtering
- 🌐 Fully responsive UI with Tailwind CSS

---

### 📁 Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, TypeScript
- **Backend**: Supabase (DB + API), VAPI for voice integration
- **Auth**: Clerk.dev
- **Monitoring**: Sentry
- **Deployment**: Vercel

---

### 🚀 Getting Started

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/converso.git
cd converso
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

#### 3. Environment Setup

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_token
SENTRY_AUTH_TOKEN=your_token
```

#### 4. Run Locally

```bash
npm run dev
```

App will be live at `http://localhost:3000`.

---

### 🔐 Authentication

Clerk provides seamless sign-in/sign-up flows. Use `<SignInButton />`, `<UserButton />`, and protected server components via `@clerk/nextjs`.

---

### 🛠️ Companion Creation Flow

1. Navigate to `/companions/new`
2. Fill the form (subject, topic, voice, style, duration)
3. Click **Build Your Companion**
4. Interact via voice sessions with real-time transcripts

---

### 📊 Dashboard

Accessible via `/my-journey`:

- Recent sessions
- Bookmarked companions
- Created companions

---

### 📦 Deployment

Deployed on **Vercel**.

Ensure your environment variables are set in Vercel dashboard before deploying.

---

### 📄 License

MIT © 2025 Converso Team
