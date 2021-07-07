const express = require("express");
const router = express.Router();
const { pool } = require("../database");
const jwt = require("jsonwebtoken");
require("dotenv").config()


router.post("/", async (req, res) => {
  const { email } = req.body;
  const user = await pool.query(`SELECT * FROM Users WHERE email='${email}'`);
  const token = jwt.sign({ id: user.rows[0].id }, process.env.SECRET_KEY);
  res.send({
    first_name: user.rows[0].first_name,
    last_name: user.rows[0].last_name,
    username: user.rows[0].username,
    email: user.rows[0].email,
    token: token,
  });
});

module.exports = router;
