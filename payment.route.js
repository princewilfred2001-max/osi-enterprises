import express from "express";
import { payments } from "../data/payments.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/init", protect, (req, res) => {
  const payment = {
    ref: "OSI-" + Date.now(),
    status: "paid",
    user: req.user.email
  };

  payments.push(payment);
  res.json(payment);
});

export default router;