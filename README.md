
# 📝 MERN Blogging Application

A full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React, Node.js) with secure authentication and RESTful APIs. Users can register, log in, create blogs, and interact through comments.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🧑‍💻 User Registration & Login (bcrypt password hashing)
- 📝 Create and view blog posts
- 💬 Add and view comments on blogs
- 🔒 Protected routes (only authenticated users can create blogs/comments)
- 🌐 Public access to view blogs and comments
- ⚡ RESTful API architecture

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Authentication & Security:**
- JSON Web Tokens (JWT)
- bcrypt.js

---

## 📁 Project Structure

```

mern-blog-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.js
│   └── package.json

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mern-blog-app.git
cd mern-blog-app
````

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

(Optional) If backend runs on 3000:

```
PORT=3001
```

Run frontend:

```bash
npm start
```

---

## 🔗 API Endpoints

### Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Blogs

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | /api/blogs     | Get all blogs      |
| GET    | /api/blogs/:id | Get single blog    |
| POST   | /api/blogs     | Create blog (Auth) |

### Comments

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | /api/comments/:blogId | Get comments by blog |
| POST   | /api/comments/:blogId | Add comment (Auth)   |

---

## 🔐 Authentication Flow

* User logs in → receives JWT token
* Token stored in localStorage (frontend)
* Token sent in headers for protected requests:

```
Authorization: Bearer <token>
```

* Backend middleware verifies token and grants access

---

## 🧠 Key Learnings

* Full-stack integration (React ↔ Express ↔ MongoDB)
* JWT-based authentication & middleware
* REST API design and route structuring
* MongoDB data modeling with references
* Secure password handling using bcrypt

---

## 📌 Future Improvements

* Blog edit & delete functionality
* User-specific dashboards
* Improved UI/UX
* Pagination & search
* Deployment (Render / Netlify / MongoDB Atlas)
