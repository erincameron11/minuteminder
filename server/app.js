// nodejs file for starting the application
const express = require('express');

const app = express();

const PORT = 8888; 

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
})