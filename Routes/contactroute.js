import express from "express";
import contactUs from "../models/contactus.js";
const router = express.Router();
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contactdata = new contactUs({
      name,
      email,
      message,
    });
    await contactdata.save();
    res.status(201).json({ message: "Thanks     for contact Us" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

router.get("/contact", async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) {
      res.status(400).json({ message: "Email is Required" });
    }
    const result = await contactUs.find({ name });
    res.status(201).json({ message: "All Results are Here", data: result });
  } catch (e) {
    res.status(500).json({ mesage: "something went wrong", e });
  }
});

export default router;
