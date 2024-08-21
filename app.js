// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World! yay... it works with the new private key!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
