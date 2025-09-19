import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
const router = express.Router();
router.post("/register", async (req, res) => {
  const { name, phone, email, pass, cnfpass } = req.body;
  if (!name || !phone || !email || !pass || !cnfpass) {
    return res.status(400).json({ message: "All fileds are required" });
  }
  if (pass !== cnfpass) {
    return res.status(400).json({ message: "Password didn't match" });
  }
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser)
      return res.status(400).json({ message: "user Already Exist" });
    const salt = await bcrypt.genSalt(10);
    const bcryptpass = await bcrypt.hash(pass, salt);

    const user = new User({
      name,
      email,
      phone,
      pass: bcryptpass,
    });
    await user.save();
    res.status(201).json({ message: "user Created Successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "something went wrong" });
  }
});
export default router;
