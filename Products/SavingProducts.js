import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  TrendingProducts,
  featureProducts,
  ProductsItems,
} from "../models/ProductList.js";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });

const Mongo_uri = process.env.MONGOURI;
console.log("Mongo_uri", Mongo_uri);

const run = async () => {
  try {
    await mongoose.connect(Mongo_uri);
    console.log("MongoDB Connected Successfully");

    const collections = [
      { model: TrendingProducts, category: "trending" },
      { model: featureProducts, category: "feature" },
      { model: ProductsItems, category: "all" },
    ];
    await Promise.all(
      collections.map(async ({ model, category }) => {
        const docs = await model.find();
        await Promise.all(
          docs.map(async (doc) => {
            docs.prodCategory = category;
            await doc.save();
          })
        );
      })
    );

    console.log(`Updated ${category} products`);
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error updating products:", error);
  }
};

run();
