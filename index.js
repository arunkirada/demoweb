const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Node app is running at http://localhost:${PORT}`);
});

