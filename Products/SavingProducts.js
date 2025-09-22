import{ ProductsItems} from "../models/ProductList.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });
const MONGO_URI = process.env.MONGOURI;
console.log("MONGO_URI", MONGO_URI);

export const productItems = [
  {
    id: 31,
    name: 'HP 15s, 12th Gen Intel Core i3, 8GB RAM, 512GB SSD, 15.6" FHD Laptop',
    brand: "HP",
    images: [
      "https://m.media-amazon.com/images/I/71+gQ9gOTuL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81VkqRHuCxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71MSz1pC7jL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81H7vrv1fuL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gzR3+tpvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MSz1pC7jL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XOrGUiSSL._SL1500_.jpg",
    ],
    description: `
This laptop is tailored for content creators, supporting video editing, streaming, and creative workflows with ease.

Its high-resolution display shows every detail, and fast processors handle large media files without lag. SSD storage and ample RAM make editing and rendering smooth.

Portable design allows creators to work anywhere, while battery life ensures productivity on the go. Responsive keyboard and connectivity options enhance usability.

Ideal for YouTubers, streamers, and digital creators, this laptop combines creativity and efficiency perfectly.`,
    price: 36990,
    oldPrice: 42000,
    discount: Math.round(((42000 - 36990) / 42000) * 100) + "%",
    ratings: { average: 4.3, total: 1340 },
    instock: true,
    specifications: {
      processor: "Intel Core i3-1215U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6 inch FHD",
      os: "Windows 11",
      weight: "1.69kg",
    },
    offers: ["No Cost EMI on Credit Card", "Pay Later & Avail Cashback"],
    testimonials: [
      { user: "Rahul", comment: "Great for daily use!", rating: 5 },
      { user: "Aman", comment: "Lightweight and fast.", rating: 4 },
      { user: "Sonia", comment: "Battery backup is good.", rating: 5 },
    ],
  },
  {
    id: 32,
    name: 'Dell Inspiron 15, 11th Gen Intel Core i5, 16GB RAM, 512GB SSD, 15.6" FHD Laptop',
    brand: "Dell",
    images: [
      "https://m.media-amazon.com/images/I/712WiT-wexL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/814HgUR0+LL._SX679_.jpg",
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
    id: 33,
    name: 'Lenovo IdeaPad Gaming 3, Ryzen 5, 16GB RAM, RTX 3050, 512GB SSD, 15.6" FHD Laptop',
    brand: "Lenovo",
    images: [
      "https://m.media-amazon.com/images/I/81+SKGgJ9yL._SX679_.jpg",
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
    id: 34,
    name: 'Acer Aspire 5, Intel Core i5, 8GB RAM, 512GB SSD, 15.6" FHD Laptop',
    brand: "Acer",
    images: [
      "https://m.media-amazon.com/images/I/513p8BwV-RL._SX679_.jpg",
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
    id: 35,
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
    id: 36,
    name: 'HP Pavilion 14, 12th Gen Intel Core i5, 16GB RAM, 512GB SSD, 14" FHD Laptop',
    brand: "HP",
    images: [
      "https://m.media-amazon.com/images/I/417rsO6vKaL._SX300_SY300_QL70_FMwebp_.jpg",
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
  {
    id: 37,
    name: 'Lenovo ThinkPad E14, Intel Core i5, 8GB RAM, 256GB SSD, 14" FHD Laptop',
    brand: "Lenovo",
    images: [
      "https://m.media-amazon.com/images/I/41fEL7fLEpL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71Cj3RJhqiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/31SZo4lv5ML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61H96HbSqTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61HzxNz06oL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/31oEQyxHCqL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61ubkDRg+QL._SL1080_.jpg",
    ],
    description: `
This business laptop is designed for productivity and efficiency. Work on spreadsheets, presentations, and multitasking without slowdown, thanks to its fast processor and ample memory.

The crisp display ensures clear visuals for work presentations and video conferences. Lightweight and durable, it’s easy to carry to meetings or work trips.

With long battery life, you can stay productive all day. Fast storage keeps all your files and data accessible instantly, improving workflow efficiency.

Ideal for professionals, this laptop combines reliability, portability, and performance for a seamless work experience.`,
    price: 46999,
    oldPrice: 51999,
    discount: Math.round(((51999 - 46999) / 51999) * 100) + "%",
    ratings: { average: 4.5, total: 834 },
    instock: true,
    specifications: {
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      display: "14 inch FHD",
      os: "Windows 11",
      weight: "1.6kg",
    },
    offers: ["Bank offer ₹2000 off", "Free bag included"],
    testimonials: [
      { user: "Aditya", comment: "Perfect for office use.", rating: 5 },
      { user: "Neha", comment: "Build quality is strong.", rating: 5 },
      { user: "Vikram", comment: "Runs smoothly.", rating: 4 },
    ],
  },
  {
    id: 38,
    name: 'Acer Nitro 5, Ryzen 5, 16GB RAM, RTX 3060, 512GB SSD, 15.6" FHD Gaming Laptop',
    brand: "Acer",
    images: [
      "https://m.media-amazon.com/images/I/71xHNSCyRsL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61cQzA-BYwL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61H96HbSqTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41m5SaD3LbL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61cQzA-BYwL._SL1000_.jpg",
    ],
    description: `
Enjoy the flexibility of a laptop and tablet in one device. This 2-in-1 convertible adapts to your needs, switching from work mode to entertainment or creative mode effortlessly.

The touch display is responsive and perfect for drawing, note-taking, or browsing. Lightweight design ensures portability, while performance remains smooth for multitasking.

Battery life lasts through long work or study sessions, and storage options keep your files ready at all times. It’s ideal for students, creatives, and professionals who want versatility.

Experience convenience and power in a single device that works exactly how you need it to.`,
    price: 74999,
    oldPrice: 84999,
    discount: Math.round(((84999 - 74999) / 84999) * 100) + "%",
    ratings: { average: 4.6, total: 642 },
    instock: true,
    specifications: {
      processor: "AMD Ryzen 5 5600H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6 inch FHD 144Hz",
      gpu: "NVIDIA RTX 3060",
    },
    offers: ["EMI starting ₹3999/month", "Extra 5% off with SBI Card"],
    testimonials: [
      { user: "Kiran", comment: "Gaming is smooth and lag-free.", rating: 5 },
      { user: "Megha", comment: "Display is crisp and clear.", rating: 4 },
      {
        user: "Rohit",
        comment: "Battery backup is good for gaming.",
        rating: 5,
      },
    ],
  },
  {
    id: 39,
    name: 'Dell XPS 13, 13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 13.4" FHD Laptop',
    brand: "Dell",
    images: [
      "https://m.media-amazon.com/images/I/71CRvTZxi8L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/814HgUR0+LL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/613Spym7-iL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61xkR83q-dL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61cbM95yWnL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61TEmmVFT3L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/617dyTdQPUL._SX679_.jpg",
    ],
    description: `
Powerful and robust, this workstation laptop handles heavy workloads like 3D rendering, simulations, and software development with ease.

Its high-performance CPU and dedicated GPU allow smooth multitasking and fast processing of complex tasks. Large RAM and SSD storage ensure efficiency and speed.

The display delivers accurate colors and crisp visuals, perfect for designers, engineers, and content creators. Durable design ensures it can handle long working hours and heavy use.

Built for professionals who demand uncompromised performance, this laptop is a reliable partner for creativity and technical work.`,
    price: 109999,
    oldPrice: 124999,
    discount: Math.round(((124999 - 109999) / 124999) * 100) + "%",
    ratings: { average: 4.8, total: 945 },
    instock: true,
    specifications: {
      processor: "Intel Core i7-1260P",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "13.4 inch FHD",
      os: "Windows 11",
      weight: "1.2kg",
    },
    offers: ["Bank offer ₹5000 off", "Free premium bag"],
    testimonials: [
      { user: "Siddharth", comment: "Ultra-slim and powerful.", rating: 5 },
      { user: "Ananya", comment: "Excellent display quality.", rating: 5 },
      { user: "Raghav", comment: "Lightweight and fast.", rating: 4 },
    ],
  },
  {
    id: 40,
    name: 'Apple MacBook Pro 14 M1 Pro, 16GB RAM, 512GB SSD, 14" Liquid Retina XDR',
    brand: "Apple",
    images: [
      "https://m.media-amazon.com/images/I/61eA9PkZ07L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61k4IsbwIKL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61-RZxVEeCL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ug2DDMjgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61BS1+dKYHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61o7ZLlIReL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/91CewBJrUML._SX679_.jpg",
    ],
    description: `
Powerful and robust, this workstation laptop handles heavy workloads like 3D rendering, simulations, and software development with ease.

Its high-performance CPU and dedicated GPU allow smooth multitasking and fast processing of complex tasks. Large RAM and SSD storage ensure efficiency and speed.

The display delivers accurate colors and crisp visuals, perfect for designers, engineers, and content creators. Durable design ensures it can handle long working hours and heavy use.

Built for professionals who demand uncompromised performance, this laptop is a reliable partner for creativity and technical work.`,
    price: 184999,
    oldPrice: 199999,
    discount: Math.round(((199999 - 184999) / 199999) * 100) + "%",
    ratings: { average: 4.9, total: 620 },
    instock: true,
    specifications: {
      processor: "Apple M1 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14 inch Liquid Retina XDR",
      os: "macOS Ventura",
      weight: "1.6kg",
    },
    offers: ["No cost EMI 12 months", "Apple Care available"],
    testimonials: [
      { user: "Rohan", comment: "Perfect for video editing.", rating: 5 },
      { user: "Simran", comment: "Performance is mind-blowing.", rating: 5 },
      { user: "Akash", comment: "Battery life is excellent.", rating: 5 },
    ],
  },
  {
    id: 41,
    name: 'Lenovo Legion 5, Ryzen 7, 16GB RAM, RTX 3060, 1TB SSD, 15.6" FHD Gaming Laptop',
    brand: "Lenovo",
    images: [
      "https://m.media-amazon.com/images/I/81+SKGgJ9yL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Cj3RJhqiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51RjxyCWWlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61H96HbSqTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61HzxNz06oL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/618eHMOxHzL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61ubkDRg+QL._SL1080_.jpg",
    ],
    description: `
Optimized for creative work, this laptop delivers excellent performance for graphic design, video editing, and animation projects.

The high-resolution display offers true-to-life colors and sharp details, making every design precise. Fast processor and ample RAM allow smooth handling of heavy creative software.

Portable yet powerful, it supports long hours of work without overheating. SSD storage ensures quick access to large files and projects.

Ideal for artists, designers, and content creators, this laptop brings creativity and productivity together in one machine.`,
    price: 114999,
    oldPrice: 129999,
    discount: Math.round(((129999 - 114999) / 129999) * 100) + "%",
    ratings: { average: 4.7, total: 470 },
    instock: true,
    specifications: {
      processor: "AMD Ryzen 7 5800H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      display: "15.6 inch FHD 165Hz",
      gpu: "NVIDIA RTX 3060",
    },
    offers: ["EMI starting ₹4999/month", "Extra 5% off with SBI Card"],
    testimonials: [
      { user: "Kunal", comment: "Gaming performance is top-notch.", rating: 5 },
      { user: "Tanya", comment: "Fast and smooth gameplay.", rating: 5 },
      { user: "Vivek", comment: "Heats very less during gaming.", rating: 4 },
    ],
  },
  {
    id: 42,
    name: 'Acer Swift 3, Intel Core i5, 8GB RAM, 512GB SSD, 14" FHD Laptop',
    brand: "Acer",
    images: [
      "https://m.media-amazon.com/images/I/619X5s7lZQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61cQzA-BYwL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81aCWSKdz-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+lrkkpz6L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xcBBdAX9L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715tDe1ADAL._SX679_.jpg",
    ],
    description: `
This ultra-portable laptop combines sleek design with solid performance. Carry it anywhere, whether to office, school, or travel, without sacrificing functionality.

Its fast processor and smooth multitasking make it ideal for everyday tasks like browsing, streaming, or office work. The bright display ensures a clear viewing experience.

Long battery life keeps you productive on the go, and lightweight design adds convenience. Storage and memory are optimized for efficiency.

Perfect for users who value portability and performance, it’s a companion that fits seamlessly into your daily routine.`,
    price: 53999,
    oldPrice: 59999,
    discount: Math.round(((59999 - 53999) / 59999) * 100) + "%",
    ratings: { average: 4.4, total: 612 },
    instock: true,
    specifications: {
      processor: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "14 inch FHD",
      os: "Windows 11",
      weight: "1.2kg",
    },
    offers: ["Bank offer ₹1500 off", "Free mouse included"],
    testimonials: [
      { user: "Shreya", comment: "Very portable and fast.", rating: 5 },
      { user: "Ravi", comment: "Perfect for study and work.", rating: 4 },
      { user: "Meena", comment: "Good battery life.", rating: 4 },
    ],
  },
  {
    id: 43,
    name: 'HP Omen 16, Intel Core i7, 16GB RAM, RTX 3060, 1TB SSD, 16.1" FHD Gaming Laptop',
    brand: "HP",
    images: [
      "https://m.media-amazon.com/images/I/412UMSXXm-L._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71MSz1pC7jL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71MSz1pC7jL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81H7vrv1fuL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gzR3+tpvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MSz1pC7jL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Ulfg2py8L._SL1500_.jpg",
    ],
    description: `
Built for users who demand power, this high-end laptop handles intensive tasks effortlessly, from video editing to complex computations.

Its powerful processor and high-end graphics card deliver unmatched performance. Fast storage and large RAM ensure smooth multitasking, even with heavy workloads.

The display offers vibrant visuals, and the responsive keyboard enhances usability. Robust cooling keeps the laptop running optimally during extended sessions.

Ideal for professionals and enthusiasts who need top-tier performance in every task.`,
    price: 134999,
    oldPrice: 149999,
    discount: Math.round(((149999 - 134999) / 149999) * 100) + "%",
    ratings: { average: 4.8, total: 325 },
    instock: true,
    specifications: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      display: "16.1 inch FHD 165Hz",
      gpu: "NVIDIA RTX 3060",
    },
    offers: ["EMI starting ₹5999/month", "Extra 5% off with SBI Card"],
    testimonials: [
      { user: "Rajat", comment: "Gaming performance is amazing.", rating: 5 },
      { user: "Neha", comment: "Good cooling system.", rating: 4 },
      { user: "Akshay", comment: "Smooth gameplay always.", rating: 5 },
    ],
  },
  {
    id: 44,
    name: 'Apple MacBook Pro 16 M1 Max, 32GB RAM, 1TB SSD, 16" Liquid Retina XDR',
    brand: "Apple",
    images: [
      "https://m.media-amazon.com/images/I/81CJe0ZCp1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61k4IsbwIKL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71d18PBLneL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ug2DDMjgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61BS1+dKYHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61o7ZLlIReL._SX679_.jpg",
      ,
    ],
    description: `
Affordable yet reliable, this budget laptop covers all basic computing needs. Perfect for browsing, streaming, and office work without overspending.

Its lightweight and compact design make it easy to carry around, and the battery lasts through daily tasks. Storage and memory are optimized for essential performance.

Clear display and comfortable keyboard make everyday use enjoyable. Whether for students or casual users, it provides value for money.

A smart choice for anyone seeking an efficient, low-cost computing solution.`,
    price: 384999,
    oldPrice: 399999,
    discount: Math.round(((399999 - 384999) / 399999) * 100) + "%",
    ratings: { average: 4.9, total: 210 },
    instock: true,
    specifications: {
      processor: "Apple M1 Max",
      ram: "32GB",
      storage: "1TB SSD",
      display: "16 inch Liquid Retina XDR",
      os: "macOS Ventura",
      weight: "2.1kg",
    },
    offers: ["No cost EMI 12 months", "Apple Care included"],
    testimonials: [
      { user: "Arjun", comment: "Performance is insane.", rating: 5 },
      { user: "Isha", comment: "Perfect for video editing.", rating: 5 },
      { user: "Rishabh", comment: "Worth every penny.", rating: 5 },
    ],
  },
  {
    id: 45,
    name: 'Lenovo Yoga Slim 7, Intel Core i7, 16GB RAM, 512GB SSD, 14" FHD Laptop',
    brand: "Lenovo",
    images: [
      "https://m.media-amazon.com/images/I/314AIJE3c+L.jpg",
      "https://m.media-amazon.com/images/I/71Cj3RJhqiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/418eUe+uFtL.jpg",
      "https://m.media-amazon.com/images/I/61H96HbSqTL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61HzxNz06oL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/31oEQyxHCqL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61ubkDRg+QL._SL1080_.jpg",
      ,
    ],
    description: `
This mid-range gaming laptop is perfect for students who want both study and play in one device. Smooth performance handles both multitasking and gaming effortlessly.

Its graphics and display bring games to life, while responsive keys make gaming comfortable. Battery life ensures uninterrupted sessions between classes or study breaks.

Lightweight and portable enough for campus life, it balances performance, style, and affordability. Ideal for casual gaming and daily productivity.

A laptop that keeps students entertained and productive without compromise.`,
    price: 84999,
    oldPrice: 94999,
    discount: Math.round(((94999 - 84999) / 94999) * 100) + "%",
    ratings: { average: 4.6, total: 512 },
    instock: true,
    specifications: {
      processor: "Intel Core i7-1165G7",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14 inch FHD",
      os: "Windows 11",
      weight: "1.3kg",
    },
    offers: ["Bank offer ₹3000 off", "Free bag included"],
    testimonials: [
      { user: "Sakshi", comment: "Lightweight and fast.", rating: 5 },
      { user: "Rahul", comment: "Great battery life.", rating: 4 },
      { user: "Pooja", comment: "Very smooth performance.", rating: 5 },
    ],
  },
];

mongoose
  .connect(process.env.MONGOURI)
  .then(async () => {
    console.log("MongoDB Connected");
    // await featureProducts.deleteMany({});
    await ProductsItems.insertMany(productItems);
    console.log("Products inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => console.log(err));
