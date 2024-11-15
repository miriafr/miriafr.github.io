import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
const router = express.Router();

//set up server to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "********@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: email,
        to: "*********@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p> Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
        } else {
            res.json({code: 200, status: "Message Sent"});
        }
    })
})