#!/bin/sh

set -e

npm run db:push
npm run db:seed

npm start