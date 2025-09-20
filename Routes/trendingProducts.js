import express from "express";
import { TrendingProducts } from "../models/ProductList.js";
const router = express.Router();
router.get("/trending-products", async (req, res) => {
  try {
    const trendingProducts = await TrendingProducts.find({});

    res.status(200).json( trendingProducts );
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
