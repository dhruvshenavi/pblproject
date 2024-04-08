const express = require('express');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user_credential", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true
}).then(() => {
    console.log(`connection sucess`);
}).catch((e) => {
    console.log(e);
})

// Define schema for tourist
const touristSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }, // New field for confirm password
    phone: { type: String, required: true }
});
const Tourist = mongoose.model('Tourist', touristSchema);

// Define schema for content creator
const contentCreatorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }, // New field for confirm password
    phone: { type: String, required: true }
});

// Create models for tourist and content creator
const ContentCreator = mongoose.model('ContentCreator', contentCreatorSchema);

module.exports = { Tourist, ContentCreator };

// Create Express router
const router = express.Router();

// Route handler for tourist signup
router.post('/signup/tourist', async (req, res) => {
    try {
        const { username, password, confirmPassword, phone } = req.body;
        // Create new tourist document
        const newTourist = new Tourist({ username, password, confirmPassword, phone });
        // Save tourist to database
        await newTourist.save();
        res.status(201).send('Tourist signed up successfully.');
    } catch (error) {
        console.error('Error signing up tourist:', error);
        res.status(500).send('An error occurred while signing up tourist.');
    }
});

// Route handler for content creator signup
router.post('/signup/provider', async (req, res) => {
    try {
        const { username, password, confirmPassword, phone } = req.body;
        // Create new content creator document
        const newContentCreator = new ContentCreator({ username, password, confirmPassword, phone });
        // Save content creator to database
        await newContentCreator.save();
        res.status(201).send('Content creator signed up successfully.');
    } catch (error) {
        console.error('Error signing up content creator:', error);
        res.status(500).send('An error occurred while signing up content creator.');
    }
});

module.exports = router;
