const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/all", async (req, res) => {
    try {
        const doctors = await User.find({ role: "doctor" }).select("-password");
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: "Galti ho gayi list nikaalne mein" });
    }
});

router.post("/update-profile/:id", async (req, res) => {
    try {
        const { specialization, fees, experience, bio } = req.body;
        
        await User.findByIdAndUpdate(req.params.id, {
            specialization, 
            fees, 
            experience, 
            bio
        });

        res.json({ message: "Doctor profile updated successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Update nahi ho paya" });
    }
});

module.exports = router;