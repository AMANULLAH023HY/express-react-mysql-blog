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

const getSinglePostsController = (req, res) => {};

const addPostsController = (req, res) => {};

const deletePostsController = (req, res) => {};

const updatePostsController = (req, res) => {};

export {
  getPostsController,
  getSinglePostsController,
  addPostsController,
  deletePostsController,
  updatePostsController,
};
