import express from "express";
import { payments } from "../data/payments.js";

const router = express.Router();

router.post("/init", (req, res) => {
  const payment = {
    ref: "OSI-" + Date.now(),
    status: "paid"
  };

  payments.push(payment);
  res.json(payment);
});

export default router;