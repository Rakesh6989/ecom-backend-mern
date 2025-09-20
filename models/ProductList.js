import mongoose from "mongoose";
const productschema = mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    oldPrice: { type: String },
    discount: { type: String },
    ratings: {
      average: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },
    instock: { type: Boolean, default: true },
    specifications: { type: Map, of: String },
    offers: { type: [String], default: [] },
    testimonials: [
      {
        user: String,
        comment: String,
        rating: Number,
      },
    ],
  },
  { timestamps: true }
);
const ProductsItems = mongoose.model("ProductList", productschema);
const TrendingProducts = mongoose.model("TrendingProducts", productschema);
export { ProductsItems, TrendingProducts };
