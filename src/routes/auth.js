const express = require('express');
const { register, login } = require('../controller/authcontroller'); // path must be correct
const router = express.Router();

router.post("/login", login);       // must be a function
router.post("/register", register); // must be a function

module.exports = router;