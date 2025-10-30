import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/roleMiddleware.js";
const router = express.Router();

router.get("/verify-admin", verifyToken, verifyAdmin, (req, res) => {
  res
    .status(200)
    .json({ message: "Admin Validated successfully", user: req.user });
});
export default router;
