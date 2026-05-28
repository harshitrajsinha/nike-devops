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

### Challenging part of dockerizing this project:

Frontend of the project interacts with Postgres database via Drizzle ORM. To load data to the database, we need to execute to command before booting the application - `npm run db:push` to load tables to database and `npm run db:seed` to generate product images.<br><br>
**Problem**: Nextjs projects require a `standalone` output configuration to shrink the build size. This configuration however, removes `drizzle-kit` package in the final build, required for running the above commands and on running these commands result in drizzle-kit not found error.

**Solution-1** - Run database container preemptively. Before building the application, run the commands to load the required data to database. `But` this would mean managing database separately than through Docker compose.

**Solution-2** - If to manage through Docker compose, install the dependency in the final stage. `But` this would bloat the final image size and would cost significant image build time every time we have to perform re-deployment.

**Solution-3 (Implemented)** - Create a separate migration service that uses the build stage image of frontend to run the migration for database and sucessfully exit rather than creating application build. The migration would have data persistance using docker volumes so that until and unless the host machine is not corrputed, data remains intact even if frontend container restarts.

**Solution-4 (probably, Best)** - To opt for database as a service from cloud service providers like NeonDB or Supabase, run the migration commands during build stage. `But` we need to be careful that if the app re-deploys, the commands should not re-run and create duplicate migration on database.

<br><br>
![Deployment](https://raw.githubusercontent.com/harshitrajsinha/nike-devops/289d2cb189dda634a246cad4e409b86a5105274e/assets/Screenshot%202026-05-28%20185241.png)
