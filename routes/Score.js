const express = require("express");
const router = express.Router();
const { Score } = require("../models/Score");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    
    const { name, stars, time } = req.body;

    await Score.create({
      name,
      stars,
      time,
    });



    
    const highScores = await Score.find().sort({ stars: -1 }).limit(10);
    console.log(highScores);

    res.status(200).json({
      message: "successfully registered!",
      data: highScores,
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

module.exports = router;

