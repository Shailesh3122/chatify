import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Hello JS Login");
});

router.get("/logout", (req, res) => {
  res.send("Hello JS Logout");
});

router.get("/signup", (req, res) => {
  res.send("Hello JS Signup");
});

export default router;
