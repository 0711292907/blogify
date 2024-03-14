import express from "express";
import mysql from "mysql2";
import cors from "cors";


// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
    debug: false, // Set to true for debugging
  });
  app.use(express.json());
  const app = express();
  app.use(cors());
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
    req.body.title,
    req.body.descr,
    req.body.title,
     req.body.username,
  
    let q = `INSERT INTO post (title, descr, cover, username) VALUES (?, ?, ?, ?)`;
    pool.query(q, [title, descr, cover, username], (err, result) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json("post succefully inserted");
    });
  });
  
  
app.listen(8800, () => {
  console.log("Connected to backend.")
})
