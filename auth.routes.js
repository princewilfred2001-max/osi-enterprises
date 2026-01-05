import express from "express";
import jwt from "jsonwebtoken";
import { users } from "../data/users.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { name, email } = req.body;

  let user = users.find(u => u.email === email);
  if (!user) {
    user = { id: Date.now(), name, email };
    users.push(user);
  }

  const token = jwt.sign(user, "OSI_SECRET", { expiresIn: "7d" });

  res.json({
    success: true,
    token,
    user
  });
});

export default router;