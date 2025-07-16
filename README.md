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
   git clone git clone https://github.com/C00L1N/REST-API.git
   ```
   ```
   cd REST-API
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Set up MongoDB connection
   edit the `MONGO_URL` inside `server.ts` with your MongoDB URL:
   ```
   const MONGO_URL = 'your-mongodb-connection-string';
   ```
4. Run the server
   ```
   npm start
   ```
   You should see:
   ```
   Server running on http://localhost:8080
   ✅ MongoDB Connection Successful
   ```

## API Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST   | `/auth/register` | Register a new user | ❌ |
| POST   | `/auth/login` | Logging in credentials | ❌ |
| GET   | `/user` | Get all users | ✅ |
| DELETE | `/users/:id` | Delete user by ID | ✅ |
| PATCH | `/users/:id` | Updates username by ID | ✅ |

## 🧪 Testing with Postman
### 1️⃣ Register a user
POST `http://localhost:8080/auth/register`  
body -> raw -> JSON:
```
{
   "email": "example@email.com",
   "password": "123456",
   "username": "example"
}
```
Expected response: `200 OK` with the created user JSON.

### 2️⃣ Logging in
POST `http://localhost:8080/auth/login`
body -> raw -> JSON:
```
{
   "email": "example@gmail.com",
   "password": "123456"
}
```

### 3️⃣ Get all users (requires auth)
GET `http://localhost:8080/users`  
Make sure you're logged in and have a valid cookie `COOLIN-AUTH`.

### 4️⃣ Delete a user by ID
DELETE `http://localhost:8080/users/<user_id>`  
Example:
```
DELETE http://localhost:8080/users/6877b55aa43db589cccf45c1
```
Returns the deleted user or `404` if not found. 

### 5️⃣ Update Username
PATCH `http://localhost:8080/users/<user_id>`
Example:
```
PATCH http://localhost:8080/users/6877b55aa43db589cccf45c1
```
Returns updated username in JSON format or `404` if not found

## 🔐 Authentication Flow
- After login, a **session token** is stored in a cookie `COOLIN-AUTH`.
- The middleware `isAuthenticated` reads the cookie and validates it.
- If valid, it attaches `req.identity` for downstream routes.
- If missing/invalid, it retirns `403 Forbidden`.

## 📌 Notes
- This is a **practice project** for learning REST APIs, not production-ready.
- No refresh token/logout mechanism yet.
- For production, you should use **JWT** or a proper session store.

## 🙏 Credits
Thanks to youtuber **Code With Antonio** I was able to complete his tutorial video link below:  
[![Watch the tutorial on YouTube](https://img.youtube.com/vi/b8ZUb_Okxro/0.jpg)](https://youtu.be/b8ZUb_Okxro?si=fDau8dlPV50ibpdj)

