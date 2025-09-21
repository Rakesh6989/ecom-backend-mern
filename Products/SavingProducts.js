import{ featureProducts} from "../models/ProductList.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });
const MONGO_URI = process.env.MONGOURI;
console.log("MONGO_URI", MONGO_URI);

const productItems = [
  {
    id: 1,
    name: 'Dell Inspiron 15, 13th Gen Intel Core i5, 16GB RAM, 512GB SSD, 15.6" FHD Laptop',
    brand: "Dell",
    images: [
      "https://m.media-amazon.com/images/I/61k0gpxQwCL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61Xkk+I8kGL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/613Spym7-iL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61xkR83q-dL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61cbM95yWnL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61TEmmVFT3L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/71EXrCX25JL._SL1500_.jpg",
    ],
    description: `
This sleek ultrabook is perfect for users on the go. Its fast processor and smooth performance make multitasking effortless, whether you're working on documents, browsing, or streaming.

The high-resolution display ensures clear visuals, while the lightweight design allows easy portability. Ideal for students and professionals who need power without bulk.

Long-lasting battery life means you can work or play anywhere without constantly searching for a charger. With fast storage and responsive memory, everything runs efficiently.

Combine style, portability, and performance, and you get a laptop that fits seamlessly into your dynamic lifestyle.`,
    price: 52999,
    oldPrice: 59999,
    discount: Math.round(((59999 - 52999) / 59999) * 100) + "%",
    ratings: { average: 4.5, total: 1023 },
    instock: true,
    specifications: {
      processor: "Intel Core i5-1135G7",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6 inch FHD",
      os: "Windows 11",
      gpu: "Intel Iris Xe Graphics",
    },
    offers: ["Bank offer ₹2000 off", "Exchange upto ₹15000"],
    testimonials: [
      { user: "Priya", comment: "Perfect for office use.", rating: 5 },
      { user: "Rakesh", comment: "Good performance.", rating: 4 },
      { user: "Neha", comment: "Fast and smooth.", rating: 5 },
    ],
  },
  {
    id: 2,
    name: 'Lenovo IdeaPad Gaming 3, Ryzen 5, 16GB RAM, RTX 3050, 512GB SSD, 15.6" FHD Laptop',
    brand: "Lenovo",
    images: [
      "https://m.media-amazon.com/images/I/41TFSAlr4gL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71Cj3RJhqiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51RjxyCWWlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61H96HbSqTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61HzxNz06oL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/618eHMOxHzL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61ubkDRg+QL._SL1080_.jpg",
    ],
    description: `
Built for immersive gameplay, this gaming laptop delivers high performance with dedicated graphics and powerful processors. Experience smooth frame rates and stunning visuals in every game.

Its display brings every detail to life, and the responsive keyboard makes gaming sessions more enjoyable. Keep up with fast-paced action without lag or stutter.

Portability meets power, letting you take your gaming experience wherever you go. Fast storage ensures games load quickly, and the cooling system keeps performance stable.

Perfect for casual and hardcore gamers alike, this laptop turns every session into an intense, fun adventure.`,
    price: 62999,
    oldPrice: 74999,
    discount: Math.round(((74999 - 62999) / 74999) * 100) + "%",
    ratings: { average: 4.4, total: 587 },
    instock: true,
    specifications: {
      processor: "AMD Ryzen 5 5600H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6 inch FHD 144Hz",
      gpu: "NVIDIA RTX 3050 4GB",
    },
    offers: ["EMI starting ₹2999/month", "Extra 5% off with SBI Card"],
    testimonials: [
      { user: "Karan", comment: "Smooth gaming experience!", rating: 5 },
      { user: "Aditi", comment: "Display quality is good.", rating: 4 },
      { user: "Vikram", comment: "Runs all games smoothly.", rating: 5 },
    ],
  },
  {
    id: 3,
    name: 'Acer Aspire Go 14, Intel Core i5, 8GB RAM, 512GB SSD, 15.6" FHD Laptop',
    brand: "Acer",
    images: [
      "https://m.media-amazon.com/images/I/41D8ChZHcEL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61cQzA-BYwL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81aCWSKdz-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+lrkkpz6L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61cQzA-BYwL._SL1000_.jpg",
    ],
    description: `
This business laptop is designed for productivity and efficiency. Work on spreadsheets, presentations, and multitasking without slowdown, thanks to its fast processor and ample memory.

The crisp display ensures clear visuals for work presentations and video conferences. Lightweight and durable, it’s easy to carry to meetings or work trips.

With long battery life, you can stay productive all day. Fast storage keeps all your files and data accessible instantly, improving workflow efficiency.

Ideal for professionals, this laptop combines reliability, portability, and performance for a seamless work experience.`,
    price: 44999,
    oldPrice: 49999,
    discount: Math.round(((49999 - 44999) / 49999) * 100) + "%",
    ratings: { average: 4.2, total: 430 },
    instock: true,
    specifications: {
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6 inch FHD",
      os: "Windows 11",
      weight: "1.8kg",
    },
    offers: ["Bank offer ₹1500 off", "Free mouse included"],
    testimonials: [
      { user: "Aditi", comment: "Good for daily office work.", rating: 4 },
      { user: "Rohan", comment: "Lightweight and portable.", rating: 5 },
      { user: "Sanya", comment: "Battery lasts long.", rating: 4 },
    ],
  },
  {
    id: 4,
    name: 'Apple MacBook Air M2, 16GB RAM, 256GB SSD, 13.6" Retina Display',
    brand: "Apple",
    images: [
      "https://m.media-amazon.com/images/I/71b2wUYYkwL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61k4IsbwIKL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71d18PBLneL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ug2DDMjgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61BS1+dKYHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61o7ZLlIReL._SX679_.jpg",
      ,
    ],
    description: `
Enjoy the flexibility of a laptop and tablet in one device. This 2-in-1 convertible adapts to your needs, switching from work mode to entertainment or creative mode effortlessly.

The touch display is responsive and perfect for drawing, note-taking, or browsing. Lightweight design ensures portability, while performance remains smooth for multitasking.

Battery life lasts through long work or study sessions, and storage options keep your files ready at all times. It’s ideal for students, creatives, and professionals who want versatility.

Experience convenience and power in a single device that works exactly how you need it to.`,
    price: 99999,
    oldPrice: 114900,
    discount: Math.round(((114900 - 99999) / 114900) * 100) + "%",
    ratings: { average: 4.9, total: 890 },
    instock: true,
    specifications: {
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB SSD",
      display: "13.6 inch Retina",
      os: "macOS Ventura",
      weight: "1.24kg",
    },
    offers: ["No cost EMI 12 months", "Apple Care available"],
    testimonials: [
      {
        user: "Aarav",
        comment: "Excellent battery and lightweight!",
        rating: 5,
      },
      { user: "Maya", comment: "MacOS is smooth and fast.", rating: 5 },
      { user: "Kunal", comment: "Perfect for productivity.", rating: 4 },
    ],
  },
  {
    id: 5,
    name: 'HP Pavilion 14, 13th Gen Intel Core i5, 16GB RAM, 512GB SSD, 14" FHD Laptop',
    brand: "HP",
    images: [
      "https://m.media-amazon.com/images/I/41GQ7vEjQlL._SX300_SY300_QL70_FMwebp_.jpg`",
      "https://m.media-amazon.com/images/I/81VkqRHuCxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712kewcGJaL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81H7vrv1fuL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gzR3+tpvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81CfBPlasKL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81XOrGUiSSL._SL1500_.jpg",
    ],
    description: `
Built for immersive gameplay, this gaming laptop delivers high performance with dedicated graphics and powerful processors. Experience smooth frame rates and stunning visuals in every game.

Its display brings every detail to life, and the responsive keyboard makes gaming sessions more enjoyable. Keep up with fast-paced action without lag or stutter.

Portability meets power, letting you take your gaming experience wherever you go. Fast storage ensures games load quickly, and the cooling system keeps performance stable.

Perfect for casual and hardcore gamers alike, this laptop turns every session into an intense, fun adventure.`,
    price: 57999,
    oldPrice: 64999,
    discount: Math.round(((64999 - 57999) / 64999) * 100) + "%",
    ratings: { average: 4.4, total: 1023 },
    instock: true,
    specifications: {
      processor: "Intel Core i5-1240P",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14 inch FHD",
      gpu: "Intel Iris Xe Graphics",
    },
    offers: ["Bank offer ₹2500 off", "Exchange upto ₹15000"],
    testimonials: [
      { user: "Riya", comment: "Great for work and study.", rating: 5 },
      { user: "Saurabh", comment: "Slim and portable.", rating: 4 },
      { user: "Ankit", comment: "Battery lasts long.", rating: 5 },
    ],
  },
];

mongoose
  .connect(process.env.MONGOURI)
  .then(async () => {
    console.log("MongoDB Connected");
    // await featureProducts.deleteMany({});
    await featureProducts.insertMany(productItems);
    console.log("Products inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => console.log(err));
