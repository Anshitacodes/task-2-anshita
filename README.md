# Student Registration API

## Project Overview

The Student Registration API is a simple backend application developed using Node.js and Express.js.  
This project was created as part of a Full Stack Development internship task to demonstrate the fundamentals of backend API development and server-side logic.

The API allows users to:
- Add student records
- Retrieve all students
- Retrieve a student by ID
- Delete student records
- Validate incoming user data
- Handle HTTP requests and responses using REST API principles

This project focuses on backend concepts such as routing, request handling, JSON responses, validation, and status codes.

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework for API creation |
| JSON | Data exchange format |
| Git & GitHub | Version control and project hosting |

---

# Features

- RESTful API structure
- GET, POST, and DELETE endpoints
- Student data management
- Input validation
- JSON request and response handling
- Proper HTTP status codes
- Lightweight backend architecture

---

# API Endpoints

| Method | Endpoint | Description | Example |
|---|---|---|---|
| GET | `/students` | Retrieve all students | `http://localhost:3000/students` |
| GET | `/students/:id` | Retrieve student by ID | `http://localhost:3000/students/1` |
| POST | `/students` | Add a new student | Add JSON data |
| DELETE | `/students/:id` | Delete student by ID | `http://localhost:3000/students/1` |

---

# Example POST Request

## Endpoint

```http
POST /students
```

## Request Body

```json
{
  "name": "Anshita",
  "email": "anshita@gmail.com",
  "course": "BCA"
}
```

## Success Response

```json
{
  "message": "Student added successfully",
  "student": {
    "id": 1,
    "name": "Anshita",
    "email": "anshita@gmail.com",
    "course": "BCA"
  }
}
```

---

# Example DELETE Request

## Endpoint

```http
DELETE /students/1
```

## Success Response

```json
{
  "message": "Student deleted successfully"
}
```

---

# Validation Logic

The API validates incoming data before storing it.

Validation includes:
- Required fields check
- Email format verification
- Invalid request handling

Example:

```javascript
if (!email.includes("@")) {
    return res.status(400).json({
        message: "Invalid email format"
    });
}
```

---

# HTTP Status Codes Used

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid client request |
| 404 | Resource not found |

---

# How to Run the Project

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start the Server

```bash
node server.js
```

## Step 3: Open in Browser

```text
http://localhost:3000/students
```

---

# Project Structure

```text
student-api/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Learning Outcomes

Through this project, the following backend development concepts were practiced:

- REST API development
- Routing in Express.js
- Request and response handling
- JSON data management
- Input validation
- HTTP methods
- Error handling
- Basic backend architecture

---

# Author

Developed by Anshita as part of Full Stack Development Industrial Training.
