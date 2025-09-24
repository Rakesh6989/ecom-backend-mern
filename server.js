import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js";
import mainproductroute from "./Routes/mainproductroute.js";
import trendingProducts from "./Routes/trendingProducts.js";
import contactRoutes from "./Routes/contactroute.js";
import  featureProdRoute from "./Routes/featureProducts.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGOURI;
app.use(cors());
console.log(MONGO_URI);
console.log("Mongo URI:", MONGO_URI);
app.use(express.json());
app.use("/", userRoutes);
app.use("/", contactRoutes);
app.use("/products", mainproductroute);
app.use("/products", trendingProducts);
app.use("/products", featureProdRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => console.log("Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log("Port is running on", PORT));
