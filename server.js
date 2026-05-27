const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON payloads (Page 12)
app.use(express.json());

// In-memory data store (Page 2)
let students = [];

// 1. GET ALL STUDENTS
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// 2. GET STUDENT BY ID
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});

// 3. POST NEW STUDENT (With Gatekeeper Rules - Page 11)
// Process new incoming registrations safely
app.post("/students", (req, res) => {
    const { name, email, course } = req.body;

    // Check if fields exist
    if (!name || !email || !course) {
        return res.status(400).json({
            error: "Registration failed. All fields (name, email, course) must be completed."
        });
    }

    // Verify email pattern syntax
    const basicMailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicMailFormat.test(email)) {
        return res.status(400).json({
            error: "The email address provided is structuraly invalid."
        });
    }

    // Block identical entries
    const isDuplicate = students.some(item => item.email.toLowerCase() === email.toLowerCase());
    if (isDuplicate) {
        return res.status(400).json({
            error: "This email address is already linked to an existing profile."
        });
    }

    const brandNewRecord = {
        id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name,
        email,
        course
    };

    students.push(brandNewRecord);

    res.status(201).json({
        info: "Success! Student has been logged in the system database.",
        data: brandNewRecord
    });
});
// 4. PUT (UPDATE) STUDENT BY ID (Added for full CRUD - Page 9)
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, course } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    // A. Presence Validation
    if (!name || !email || !course) {
        return res.status(400).json({
            message: "Name, email and course are required to update this record"
        });
    }

    // B. Syntactic Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid format: Provided string is not a valid email address"
        });
    }

    // C. Semantic Validation (Allow user to keep their own email, but prevent stealing someone else's)
    const emailConflict = students.some(s => s.email.toLowerCase() === email.toLowerCase() && s.id !== id);
    if (emailConflict) {
        return res.status(400).json({
            message: "Conflict: This email is already claimed by another registered student"
        });
    }

    // Execute safe mutations
    student.name = name;
    student.email = email;
    student.course = course;

    res.status(200).json({
        message: "Student updated successfully",
        student
    });
});

// 5. DELETE STUDENT BY ID
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully"
    });
});

// Catches structural system runtime crashes (e.g., malformed JSON request raw payloads)
app.use((err, req, res, next) => {
    console.error("System Exception Intercepted:", err.stack);
    res.status(500).json({
        message: "Internal Server Error: A system logic breakdown occurred.",
        error: err.message
    });
});

// Start the Application Engine
app.listen(PORT, () => {
    console.log(`Server running with architectural stability on port ${PORT}`);
});