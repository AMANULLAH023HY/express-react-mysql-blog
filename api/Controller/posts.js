import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

// GET ALL POSTS Controller
const getPostsController = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM post WHERE cat = ?"
    : "SELECT * FROM post";

  const cat = req.query.cat;

  db.query(q, [cat], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// // GET Single POSTS by id Controller
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

// ADD POST Controller
const addPostsController = (req, res) => {
  const { title, desc, img, cat, uid, date } = req.body;

  if (!title || !desc || !img || !cat || !uid || !date) {
    return res.status(400).json("All fields are required");
  }

  // Insert the new post into the database
  const q =
    "INSERT INTO post (title, `desc`, img, uid, cat, date) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [title, desc, img, uid, cat, date];

  db.query(q, values, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json("Post added successfully");
  });
};

// POST DELETE Controller
const deletePostsController = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json("Not authenticated");
  }

  jwt.verify(token, process.env.SECRET, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const postId = req.params.id;
    const q = "DELETE FROM post WHERE `id` = ? AND  `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.status(200).json("Post has been deleted");
    });
  });
};

// POST UPDATE Controller
const updatePostsController = (req, res) => {
  const { id, title, desc, img, cat, date } = req.body;

  if (!id || !title || !desc || !img || !cat || !date) {
    return res.status(400).json("All fields are required");
  }

  // Update the post in the database
  const q =
    "UPDATE post SET title=?, `desc`=?, img=?, cat=?, date=? WHERE id=?";
  const values = [title, desc, img, cat, date, id];

  db.query(q, values, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("Post updated successfully");
  });
};

export {
  getPostsController,
  getSinglePostsController,
  addPostsController,
  deletePostsController,
  updatePostsController,
};
