import express from "express";
import mysql from "mysql2";

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
    debug: false, // Set to true for debugging
  });

  app.get("/", (req,res)=>{res.json("hellow this is backend")})

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
    const title = "The Nightmare";
    const desc= "I almost died from that scene";
    const cover= "cover.backend";
    const username = "Muofhe";
  
    const q = `INSERT INTO post (title, desc, cover, username) VALUES (?, ?, ?, ?)`;
    pool.query(q, [title, desc, cover, username], (err, result) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  
app.listen(8800, () => {
  console.log("Connected to backend.")
})
