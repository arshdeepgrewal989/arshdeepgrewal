const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const port = process.env.PORT || 3050


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req,res,next) => {
    res.send('API Status: Good too go ')
});

app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');        

    const msg= {
        to: 'anotheraprod@gmail.com',
        from: req.body.email,
        subject: 'Contact ArshdeepG',
        text: req.body.message
    }

    sendGrid.send(msg)
    .then(result => {

        res.status(200).json({
            success: true
            
        });

    })
    .catch(err => {

        console.log('error: ', err);
        res.status(401).json({
            success: false
        });

    });
});

app.listen(port, () => console.log('server started on port', port))
//app.listen(3050, '0.0.0.0');