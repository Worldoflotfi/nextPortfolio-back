const transporter = require('../config/nodemailerConfig');

const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;

    // Setup email data
    const mailOptions = {
        from: email,  // sender address
        to: 'medamineltf.100@gmail.com', // recipient address
        subject: `Message from ${name}`, // subject
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send message');
    }
};

module.exports = {
    sendContactEmail,
};
