import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`hello world. The current time is ${new Date().toLocaleTimeString()}`);
});

app.listen(8000, () => {
    console.log('listening on http://localhost:8000');
})