require('dotenv').config();

const express = require('express');
const path = require('path');
const seed = require('./routes/seed.routers');
const designations = require('./routes/designation.routes');

const app = express();
app.use(express.json());

app.use(seed);
app.use(designations);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/frontend/build/index.html'))
);

app.get('/', (req, res) => {
    res.send('The server is running...');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`serve at http://localhost:${port}`));
