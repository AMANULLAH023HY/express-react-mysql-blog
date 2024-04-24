
import { db } from '../config/db.js';
import bcrypt from 'bcryptjs';

// Register Controller
const registerController = (req, res) => {
  // Check existing user
  const selectQuery = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created successfully");
    });
  });
};

// Login Controller
const loginController = (req, res) => {
  
};

// Logout Controller
const logoutController = (req, res) => {
  res.json("from controller");
};

export { registerController, loginController, logoutController };

