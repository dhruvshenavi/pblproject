// // const { MongoClient } = require('mongodb');

// // // Connection URI
// // const uri = 'mongodb://localhost:27017';

// // // Database Name
// // const dbName = 'user_credential';

// // // Create a new MongoClient
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // async function main() {
// //     try {
// //         // Connect the client to the server
// //         await client.connect();

// //         console.log('Connected to MongoDB');

// //         // Specify the database
// //         const db = client.db(dbName);

// //         // List all collections in the database
// //         const collections = await db.listCollections().toArray();

// //         console.log('Collections:');
// //         collections.forEach(collection => {
// //             console.log(collection.name);
// //         });
// //     } finally {
// //         // Close the client
// //         await client.close();
// //         console.log('Connection closed');
// //     }
// // }

// // main().catch(console.error);

// const express = require('express');
// const mongoose = require('mongoose');
// const { Tourist, ContentCreator } = require('./src/db/connect'); // Assuming models.js contains the schema definitions

// const app = express();
// const PORT = 5500;

// // Middleware to parse JSON request body
// app.use(express.json());

// // Connect to MongoDB server
// mongoose.connect("mongodb://localhost:27017/user_credential", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(async () => {
//     console.log(`Connected to MongoDB`);

//     // Add credentials
//     const credentials = {
//         username: 'testuser',
//         password: 'password123',
//         confirmPassword: 'password123',
//         phone: '1234567890'
//     };
    
//     console.log('Credentials:', credentials);

//     // Exit connection after displaying credentials
//     await mongoose.connection.close();
//     console.log('Connection closed');
// }).catch((e) => {
//     console.log(e);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const { Tourist } = require('./src/db/connect.js'); // Assuming models.js contains the schema definitions

const app = express();
const PORT = 5500;

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB server
mongoose.connect("mongodb://localhost:27017/user_credential", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(async () => {
    console.log(`Connected to MongoDB`);

    // Create a tourist
    const touristData = {
        username: 'testuser',
        password: 'password123',
        confirmPassword: 'password123',
        phone: '1234567890'
    };

    // Create a new tourist document
    const newTourist = new Tourist(touristData);

    // Save the tourist to the database
    await newTourist.save();

    console.log('Tourist added:', newTourist);
}).catch((e) => {
    console.log(e);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
