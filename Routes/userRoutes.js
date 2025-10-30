import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
const router = express.Router();

router.post("/register-user", async (req, res) => {
  const { fullName, email, password, confirmPassword, role } = req.body;
  if (!fullName || !email || !password || !confirmPassword || !role) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  if (password !== confirmPassword) {
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
    const bcryptpass = await bcrypt.hash(password, salt);
    const userData = new User({
      fullname: fullName,
      email,
      pass: bcryptpass,
      role,
    });
    await userData.save();
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.pass);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },

      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("✅ User logged in successfully",token);
    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
