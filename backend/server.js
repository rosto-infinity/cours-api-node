const express = require("express");

const port = 5002

const app = express();

app.listen(port, () => console.log(`Le serveur a démané au port ${port}`));