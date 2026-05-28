<div align="center">
  <br />
    <a href="https://youtu.be/fZdTYswuZjU" target="_blank">
      <img src="public/readme/hero.webp" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">Nike Ecommerce</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [DevOpsification of Project](#devops-project)

## <a name="introduction">Introduction</a>

Nike-style eCommerce built with Next.js, Drizzle ORM, and Better Auth.The backend runs on Postgres with Drizzle ORM, authentication is handled with Better Auth.
## <a name="tech-stack">Tech Stack</a>
Next.js, Tailwind CSS, Typescript, Better Auth,Drizzle ORM, Postgres

## <a name="quick-start">Quick Start</a>


**Prerequisites**

Make sure you have the following installed on your machine: Git, Node.js, npm

**Cloning the Repository**

```bash
git clone https://github.com/harshitrajsinha/nike-devops.git
cd e-commerce
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a base64 encoded secret for better auth using - `openssl rand -base64 32` and new file named `.env` in the root of your project and add the following content:

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

**Running the Project**

```bash
npm run db:push # on first run to load db tables
npm run db:seed # on first run to load product images
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.`
<hr>

# <a name="devops-project">DevOpsification of Project</a>