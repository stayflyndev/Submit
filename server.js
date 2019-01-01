const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


const path = require('path');

const nodemailer = require('nodemailer');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});


const clientID = process.env.AUTH_USER;

const authuser = process.env.AUTH_USER;
const authclient = process.env.AUTH_CLIENT;

app.listen(8080);
console.log(" listening on port");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
app.post('/contact', function (req, res)

 {
    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            type: "OAuth2",
            user: "torir.adams@gmail.com", // generated ethereal user
            // generated ethereal password
            clientId: "642386995386-6s6tpdktu7gpn3ecq5m01gtfr9vu7knq.apps.googleusercontent.com",
            clientSecret: '7ZVk9NNEqzvY6d_pQltXxLTn',
            refreshToken: '1/N3DbXki-3wL7i8li24JTDd2_JwWA-OWzvMDD3wzecO8'

        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"info mailer" <info@yourtechsis.com>', // sender address
        to: 'info@yourtechsis.com', // list of receivers
        subject: 'new message ✔', // Subject line
        text: req.body.message, // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // return console.log("there is an error")
            console.log(error.message);
        } else
        console.log('Message sent: %s');
        res.status(200).json({message: req.body.message})
        // Preview only available when sending through an Ethereal account
        console.log("js");

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});


