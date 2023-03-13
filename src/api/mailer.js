import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
})

const mailOptions = {
    from: 'sergei.shvetsov.v@gmail.com',
    to: 'sergei.shvetsov.v@gmail.com',
    subject: 'test submit post',
    text: 'text',
}

transporter.sendMail(mailOptions)
