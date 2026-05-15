import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {

  res.json({
    success: true,
    message: "Booking API Working",
  });

});

export default router;