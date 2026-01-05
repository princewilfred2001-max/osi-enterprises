import express from "express";
import { projects } from "../data/projects.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", protect, (req, res) => {
  const project = {
    id: Date.now(),
    type: req.body.type,
    description: req.body.description || "",
    status: "pending",
    owner: req.user.email
  };

  projects.push(project);
  res.json({ success: true, project });
});

router.get("/all", protect, (req, res) => {
  res.json(projects.filter(p => p.owner === req.user.email));
});

export default router;