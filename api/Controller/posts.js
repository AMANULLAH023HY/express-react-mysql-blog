
import jwt from 'jsonwebtoken'
import { db } from "../config/db.js";

// GET ALL POSTS
const getPostsController = (req, res) => {
  // Check if the 'cat' query parameter exists
  const q = req.query.cat
    ? "SELECT * FROM post WHERE cat = ?"
    : "SELECT * FROM post";

  // Get the value of the 'cat' query parameter
  const cat = req.query.cat;

  // Execute the query with or without the 'cat' parameter
  db.query(q, [cat], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// // GET Single POSTS by id

const getSinglePostsController = (req, res) => {
  const q =
    "SELECT `username`, `title`, `desc`, `cat`,`date` FROM users u JOIN post p ON u.id = p.uid WHERE p.id = ?";


  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};  


// ADD POST 
const addPostsController = (req, res) => {

    // Extract post data from the request body
    const { title, desc, img, cat, uid, date } = req.body;

    // Ensure all required fields are provided
    if (!title || !desc || !img || !cat || !uid || !date) {
      return res.status(400).json("All fields are required");
    }
  
    // Insert the new post into the database
    const insertQuery =
      "INSERT INTO post (title, `desc`, img, uid, cat, date) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [title, desc, img, uid, cat, date];
  
    db.query(insertQuery, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json("Post added successfully");
    });
};

const deletePostsController = (req, res) => {

    const token  = req.cookies.access_token

    if(!token){
      return res.status(401).json("Not authenticated");
    }

    jwt.verify(token,"jwtkey", (err,userInfo)=>{
      if(err) return res.status(403).json("Token is not valid!");
      const postId = req.params.id;
      const q = "DELETE FROM post WHERE `id` = ? AND  `uid` = ?";

      db.query(q,[postId, userInfo.id], (err,data)=>{
      if(err) return res.status(403).json("You can delete only your post!");

      return res.status(200).json("Post has been deleted");

      })

    })
};

const updatePostsController = (req, res) => {


    
};

export {
  getPostsController,
  getSinglePostsController,
  addPostsController,
  deletePostsController,
  updatePostsController,
};
