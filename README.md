# Student Registration API - DecodeLabs Project 2

A lightweight, robust RESTful API built with Express.js to manage student records adhering to architectural best practices.

## Setup Instructions
1. Run `npm install` to install dependencies.
2. Run `npm start` to spin up the local development server.
3. The server will run on `http://localhost:3000`.

## API Documentation

### 1. Get All Students
* **URL:** `/students`
* **Method:** `GET`
* **Success Response:** `200 OK`

### 2. Get Student By ID
* **URL:** `/students/:id`
* **Method:** `GET`
* **Success Response:** `200 OK`
* **Error Response:** `404 Not Found` (If ID does not exist)

### 3. Register a Student
* **URL:** `/students`
* **Method:** `POST`
* **Payload (JSON):**
  ```json
  {
    "name": "Alex Doe",
    "email": "alex@decodelabs.com",
    "course": "Full Stack Development"
  }