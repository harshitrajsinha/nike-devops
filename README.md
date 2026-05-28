<div align="center">
  <br />
    <a href="https://youtu.be/fZdTYswuZjU" target="_blank">
      <img src="public/readme/hero.webp" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">Nike Ecommerce w/ Devin AI</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Assets](#links)
6. 🚀 [More](#more)

## <a name="introduction">✨ Introduction</a>

Nike-style eCommerce built with Devin AI, Next.js, Drizzle ORM, and Better Auth. In this project, you’ll master prompting as Devin helps generate sleek product pages powered by Next.js 15, TypeScript, and TailwindCSS. The backend runs on Neon PostgreSQL with Drizzle ORM, authentication is handled with Better Auth, and Zustand manages state — all packaged in a clean, modular UI to help you ship faster.

## <a name="tech-stack">⚙️ Tech Stack</a>
Next.js, Tailwind CSS, Typescript, Better Auth, Devin AI, Drizzle ORM, Neon

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/e-commerce.git
cd e-commerce
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a base64 encoded secret for better auth using - `openssl rand -base64 32`
Create a new file named `.env` in the root of your project and add the following content:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

POSTGRES_USER="admin"
POSTGRES_PASSWORD="secretpassword"
POSTGRES_DB="nikedb"
```

Replace the placeholder values with your credentials. You can get these by signing up at: [**NeonDB**](https://neon.com/), [**Better-Auth**](https://www.better-auth.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.`
