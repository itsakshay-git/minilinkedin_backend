```markdown
# Backend - LinkedIn Clone (Express + MongoDB)

This is the backend for a LinkedIn-like social media application. It provides APIs for user registration, authentication, profile management, posting, and following users.

## 🚀 Features

- User login and registration with JWT authentication
- Protected routes with middleware
- CRUD for posts and profiles
- MongoDB integration with Mongoose
- Follows RESTful API principles

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcrypt for password hashing
- CORS

## 📁 Folder Structure
```

backend/
├── controllers/ # Route logic
├── middleware/ # Auth middleware
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── config/db.js # MongoDB connection setup
├── server.js # Entry point
└── .env # Environment config

```

```

## 🔐 Environment Variables

Create a `.env` file in the root of the `backend/` folder:

````env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


1. Setup Instructions
Clone the repository:

```bash
git clone <repo-url>
cd backend
````

2. Install dependencies:

```bash
npm install
Set up MongoDB and configure .env.
```

3. Start the server:

```bash
npm run dev
```

## API Endpoints

Auth
POST /api/auth/register

POST /api/auth/login

User
GET /api/users/me – Get logged-in user

GET /api/users/:id – Get user by ID

GET /api/users – List all users

Posts
GET /api/posts – All posts

GET /api/posts/user/:id – Posts by user

POST /api/posts – Create post (auth required)
