# User Management System

A full-stack user management application built with **React** (frontend) and **Node.js** (backend). This application allows you to manage users by adding, editing, deleting, and retrieving user data stored in **MongoDB**.

## Features
- Add, edit, and delete users.
- View a list of all users with interactive react flow.
- Retrieve specific user details.
- Persistent data storage with **MongoDB**.
- Responsive and user-friendly interface.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud instance)

## Installation

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

#### Backend
```bash
cd api
npm install
```

#### Frontend
```bash
cd ../client-side
npm install
```

### Environment Variables
Create a `.env` file in the `backend` directory with the following variables:

```
MONGODB_URI=<Your MongoDB Connection URI>
PORT=<Backend Server Port>
```

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/mydatabase
PORT=5000
```

## Run the Application

### Backend (Node.js Server)
Start the server using **nodemon**:
```bash
cd api
nodemon index.js
```

### Frontend (React App)
Start the React development server:
```bash
cd client-side
npm run dev
```

## API Endpoints

### Add a User
**POST** `/adduser`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "hobbies": ["Reading", "Hiking"]
  }
  ```

### Get All Users
**GET** `/users`

### Get Specific User
**GET** `/user/:id`

### Edit User
**PUT** `/user/edit/:id`
- **Request Body**:
  ```json
  {
    "name": "Updated Name",
    "age": 35,
    "hobbies": ["Swimming", "Painting"]
  }
  ```

### Delete User
**DELETE** `/delete/user/:id`

## Commands Summary

### Backend
- Install dependencies: `npm install`
- Start the server: `nodemon index.js`

### Frontend
- Install dependencies: `npm install`
- Start the development server: `npm run dev`


---

Feel free to contribute or report any issues!

