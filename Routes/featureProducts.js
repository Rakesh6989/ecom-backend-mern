import express from "express";
import { featureProducts } from "../models/ProductList.js";
const router = express.Router();

router.get("/featured-products", async (req, res) => {
  try {
    const featuresProd = await featureProducts.find({});
    res.status(200).json(featuresProd);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something Went Wrong !", error: e.message });
  }
});
export default router;
