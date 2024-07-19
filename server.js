const express = require('express');

const bodyParser = require('body-parser');

const { v4: uuidv4 } = require('uuid');

  

const app = express();

const port = 3000;

  

let messages = {};

  

app.use(bodyParser.json());

app.use(express.static('public')); // Serve static files from the "public" directory

  

[app.post](http://app.post)('/send', (req, res) => {

    const { message } = req.body;

    const id = uuidv4();

    messages[id] = message;

    res.json({ url: `/message/${id}` });

});

  

app.get('/message/:id', (req, res) => {

    const id = [req.params.id](http://req.params.id);

    const message = messages[id];

    if (message) {

        res.send(`

            <html>

            <head><title>Message</title></head>

            <body>

                <h1>Your Message:</h1>

                <p>${message}</p>

            </body>

            </html>

        `);

    } else {

        res.status(404).send('Message not found');

    }

});

  

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});