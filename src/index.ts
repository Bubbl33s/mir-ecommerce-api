import express from "express";
import productRoutes from "./routes/productRoutes";

const app = express();
app.use(express.json());

// endpoints
app.use("/api", productRoutes);

const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
