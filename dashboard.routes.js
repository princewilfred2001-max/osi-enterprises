import express from "express";
import { projects } from "../data/projects.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/summary", protect, (req, res) => {
  res.json({
    total: projects.length,
    pending: projects.filter(p => p.status === "pending").length,
    active: projects.filter(p => p.status === "active").length,
    user: req.user.name
  });
});

export default router;