import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import contactRoutes from "./routes/contactroute.js";
import mainproductroute from "./routes/mainproductroute.js";
import trendingProducts from "./routes/trendingProducts.js";
import featureProdRoute from "./routes/featureProducts.js";

dotenv.config();
connectDB(); // 👈 bas call yahan se hoga

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", contactRoutes);
app.use("/products", trendingProducts);
app.use("/products", featureProdRoute);
app.use("/products", mainproductroute);

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
