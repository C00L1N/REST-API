# 🚀 REST API Practice (Node.js + Express + MongoDB)
This is a simple REST API practice project built with Node.js, Express, and MongoDB(Mongoose)
It provide basic user authentication and CRUD operations for learning purposes

## ⚙️ Features
- User Registeration (with hashed password + salt)
- User Authentication (session token stored in cookies)
- Get all users (protected route)
- Delete user by ID
- Middleware for authentication (isAuthenticated)
- MongoDB connection using Mongoose

## 🛠️ Tech Stack
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="15" height="15"/> Node.js - runtime
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="15" height="15"/> Express.js - web framework
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="15" height="15"/> Mongoose - MongoDB ODM
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="15" height="15"/> TypeScript - for type safety
- <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lodash.svg" width="15" height="15" alt="Lodash"/> Lodash - for object utilities
- 🍪 Cookie-parser - for reading cookies

## Project Structure
```
src
├── controllers           # Request handlers for business logic
│   ├── authentication.ts # User registration & authentication
│   └── users.ts          # User CRUD operations
│
├── db                    # Database models & helper functions
│   └── users.ts
│
├── helpers               # Utility functions
│   └── index.ts
│
├── middleware            # Express middlewares
│   └── index.ts
│
├── router                # API route definitions
│   ├── authentication.ts
│   ├── users.ts
│   └── index.ts
│
└── index.ts              # Main entry point (Express setup)
```

## 🔧 Installation & Setup
1. Clone the repo
   ```
   git clone 
