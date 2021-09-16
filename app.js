const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const a = parseInt(req.query.a ?? 1);
    const b = parseInt(req.query.b ?? 1);

    res.status(200).send(`${a + b}`);
});

module.exports = app;