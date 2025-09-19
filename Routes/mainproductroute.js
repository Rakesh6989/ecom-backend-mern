import express from "express";
import ProductsItems from "../models/ProductList.js";
const router = express.Router();

router.get("/render", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);

    let products;
    if (!isNaN(limit) && limit > 0) {
      products = await ProductsItems.aggregate([{ $sample: { size: limit } }]);
    } else {
      products = await ProductsItems.find({});
    }

    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something Went wrong", error: error.message });
  }
});

export default router;
