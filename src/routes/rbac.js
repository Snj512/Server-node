const express = require('express');
const verifyToken = require('../middleware/authmiddleware');
const authrole = require('../middleware/authrole');
const router = express.Router();

console.log('RBAC route loaded');

//Admin Access
router.get("/admin", verifyToken, authrole("admin"), (req, res) => {
  res.json({message: 'Admin Access Granted'});
});
//Manager Access
router.get("/manager", verifyToken, authrole("admin","manager"), (req, res) => {
  res.json({message: 'Admin & Managers Access Granted'});
});
//User Access
router.get("/user", verifyToken, authrole("admin", "manager", "user"), (req, res) => {
  res.json({message: 'All Access Granted'});
});

module.exports = router;