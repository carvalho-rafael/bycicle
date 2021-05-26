import nodemailer from 'nodemailer';

export default async function handle(req, res) {
    const { name, email, age, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASS,
        },
    });

    try {
        let info = await transporter.sendMail({
            from: 'rafael@carvalhorafael.dev.br',
            to: 'rafaelvfcarvalho@gmail.com',
            subject: 'Bycicle Contact',
            html:
                `<p><b>${name}, ${age} anos</b></p>\
                <p>Email: ${email}</p>\
                <p>Message: ${message}</p>`,
        });
    } catch (error) {
        res.json({ 'message': 'erro' });
    }

    res.json({ 'message': 'ok' });
}