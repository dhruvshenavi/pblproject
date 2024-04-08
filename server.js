const express = require('express');
const mongoose = require('mongoose');
const { Tourist, ContentCreator } = require('./src/db/connect'); // Assuming models.js contains the schema definitions

const app = express();
const PORT = 5500;

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB server
mongoose.connect("mongodb://localhost:27017/user_credential", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true
}).then(() => {
    console.log(`Connected to MongoDB`);
}).catch((e) => {
    console.log(e);
});

// Route to handle tourist signup
// Route handler for tourist signup
app.post('/signup/tourist', async (req, res) => {
    try {
        // Extract tourist signup data from request body
        const { username, password, confirmPassword, phone } = req.body;

        // Validate password match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Create new Tourist document
        const newTourist = new Tourist({
            username,
            password,
            confirmPassword,
            phone
        });

        // Save the tourist data to the database
        await newTourist.save();

        res.status(201).json({ message: 'Tourist signup successful' }); // Return JSON response
    } catch (error) {
        console.error('Error signing up tourist:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' }); // Return JSON response
    }
});


// Route to handle content creator signup
// Route handler for content creator signup
app.post('/signup/provider', async (req, res) => {
    try {
        // Extract content creator signup data from request body
        const { username, password, confirmPassword, phone } = req.body;

        // Validate password match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Create new ContentCreator document
        const newContentCreator = new ContentCreator({
            username,
            password,
            confirmPassword,
            phone
        });

        // Save the content creator data to the database
        await newContentCreator.save();

        res.status(201).json({ message: 'Content creator signup successful' }); // Return JSON response
    } catch (error) {
        console.error('Error signing up content creator:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' }); // Return JSON response
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
