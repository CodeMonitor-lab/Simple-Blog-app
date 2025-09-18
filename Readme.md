## Creating Vlog Application 

{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "nodemon": "nodemon server.js"
  },
  "author": "dev_nitsh",
  "license": "ISC",
  "description": "this is using a testing purpose application for data encryption using it.",
  "devDependencies": {
    "nodemon": "^3.1.9"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.3",
    "colors-cli": "^1.0.33",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.2",
    "zod": "^3.24.1"
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
