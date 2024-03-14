import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express(); // Declare 'app' before using it

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
    debug: false,
});

app.use(express.json()); // Set up middleware
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello, this is the backend");
});

// Example: Get all posts
app.get("/post", (req, res) => {
    const q = "SELECT * FROM post";
    pool.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

// Example: Insert a new post
app.post("/post", (req, res) => {
    const { title, descr, cover, username } = req.body;
    const q = `INSERT INTO post (title, descr, cover, username) VALUES (?, ?, ?, ?)`;
    pool.query(q, [title, descr, cover, username], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

// Other routes and middleware can be added here

app.listen(8800, () => {
    console.log("Connected to backend");
});
