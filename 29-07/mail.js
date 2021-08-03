const express = require('express');
const app = express();
const port = 8009;
var nodemailer = require('nodemailer');


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/:file', (req, res) => {
    var url = req.originalUrl;
    var forforget = url.includes("sendTheMail");
    if (forforget) {
        var mail = req.query.mail;
        console.log(mail);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'karan.r.addweb@gmail.com',
                pass: 'Addweb@10521'
            }
        });

        var mailOptions = {
            from: 'karan.r.addweb@gmail.com',
            to: `${mail}`,
            // to: 'karanraiyani2905@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.send(`${mail}` + "has been sent");
    } else {
        res.sendFile(__dirname + "/" + req.params.file + ".html");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});