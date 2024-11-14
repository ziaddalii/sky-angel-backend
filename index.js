const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const scoreRoute = require("./routes/Score");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
// Allow specific origin (your frontend URL)
const corsOptions = {
  origin:'*', 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", scoreRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
