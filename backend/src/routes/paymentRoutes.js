import express from "express";

const router = express.Router();

router.post("/create-order", (req, res) => {

  res.json({
    success: true,
    message: "Payment Route Working",
  });

});

export default router;