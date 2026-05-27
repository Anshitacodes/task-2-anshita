# Student Registration REST API (DecodeLabs - Project 2)

An enterprise-grade, lightweight RESTful API built with Node.js and Express.js to manage a student registry. This project serves as **Project 2: Backend API Development (The Nervous System)** track under the DecodeLabs Industrial Training Program.

The core objective of this milestone is to master backend application logic, strict data validation, error handling, and the seamless architectural flow of data between a client and a server before transitioning into complex database persistence layers.

---

## 🚀 Key Architectural Features

* **Complete CRUD Lifecycle:** Implements full resource management via HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).
* **The Gatekeeper Rule (Strict Validation):** * *Syntactic Validation:* Enforces formal RegEx verification for valid email structures.
  * *Semantic Validation:* Prevents logical data corruption by blocking duplicate email registrations.
* **Nested Sub-Resources:** Adheres to strict RESTful design patterns by allowing access to isolated nested pathways (e.g., fetching specific student courses via `/students/:id/courses`).
* **System Resilience:** Equipped with a global Error Handling Protocol middleware to gracefully intercept structural exceptions (like malformed client JSON payloads) without crashing the application runtime engine.

---

## 🛠️ Tech Stack & Tools

* **Runtime Environment:** Node.js (CommonJS)
* **Backend Framework:** Express.js (v5.x)
* **Testing Client:** Chrome DevTools Console / Fetch API

---

## 📂 API Directory & Endpoints

| HTTP Method | Route | Description | Target Payload / Response |
| :--- | :--- | :--- | :--- |
| **GET** | `/students` | Fetch all registered records | Returns an Array of objects |
| **GET** | `/students/:id` | Fetch a single student record | Matches specific numeric ID |
| **GET** | `/students/:id/courses` | Fetch nested sub-resource data | Returns specific course arrays |
| **POST** | `/students` | Register a brand new student | Requires validation (`name`, `email`, `course`) |
| **PUT** | `/students/:id` | Modify an existing student profile | Performs safe, non-destructive mutations |
| **DELETE** | `/students/:id` | Remove a record completely | Safely purges record from memory |

---

## 💻 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
   cd YOUR_REPOSITORY_NAME
