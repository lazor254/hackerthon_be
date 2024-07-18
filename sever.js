const express = require('express'); // Import express correctly

const app = express();

app.use(express.static('public')); // Serve static files from 'public' folder

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
