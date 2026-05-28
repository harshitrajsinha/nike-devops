#!/bin/sh

echo "Running pre-start commands..."

# your commands
npm run db:push
npm run db:seed

echo "Starting app..."

# npm start

node server.js