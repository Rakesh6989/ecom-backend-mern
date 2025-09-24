import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
const router = express.Router();

router.post("/register-user", async (req, res) => {
  const { name, phone, email, pass, cnfpass } = req.body;
  if (!name || !phone || !email || !pass || !cnfpass) {
   return res.status(400).json({ message: "Please fill all the fields" });
  }
  if (pass !== cnfpass) {
   return res
      .status(400)
      .json({ message: "Password and Confirm Password should be same" });
  }
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
     return res.status(409).json({ message: "Email Already Exist with us" });
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptpass = await bcrypt.hash(pass, salt);

    const userData = new User({
      name,
      phone,
      email,
      pass: bcryptpass,
    });
    await userData.save();
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
