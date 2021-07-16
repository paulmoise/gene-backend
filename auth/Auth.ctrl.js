import User from './Auth.model';
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'

function authCtrl() {

    const router = express.Router()

    router.post('/register', async (req, res) => {
        const { email, password } = req.body;
        try {
            const userFounded = await User.find({ email })
            if (userFounded.length > 0)
                res.status(409).json({ message: 'User already exists' });
            else {
                const hashPassword = await bcrypt.hash(password, 3)
                const user = new User({
                    ...req.body,
                    password: hashPassword
                });
                user.role = 'USER';
                const dbUser = await user.save();
                const token = await jwt.sign({ user }, 'OPEN-CTS');

                res.status(201).json({ accessToken: token })
            }
        } catch (error) {
            res.status(500).json({ error });
        }



    });

    router.post('/login', async (req, res) => {
        const { email, password } = req.body

        const foundedUsers = await User.find({ email: email });
        if (foundedUsers.length > 0) {
            const isConform = await bcrypt.compare(password, foundedUsers[0].password);
            if (isConform) {
                const token = await jwt.sign({ user: foundedUsers[0] }, 'OPEN-CTS');
                res.status(200).json({ accessToken: token })
            } else {
                res.status(403).json({ message: 'Bad credentials' })
            }
        } else {
            res.status(403).json({ message: 'Bad credentials' })
        }
    });


    router.post('/forget-password', async (req, res) => {
        const { email } = req.body;
        const dbUser = await User.find({ email });
        if (dbUser.length > 0) {
            const token = await jwt.sign({ email: email, id: dbUser[0]._id }, 'OPEN-CTS', { expiresIn: '1000s' })
            const content = `http://localhost:4200/auth/change-password/${token}`

            res.status(200).json({ link: content })
            /* transporter.sendMail(setMailOptions(email, content), function (err, data) {
                 if (err) {
                     console.log("Error " + err);
                 } else {
                     console.log("Email sent successfully");
                 }
             });*/

        } else {
            res.status(500).json({ message: 'No user with this email' })
        }
    });

    router.post('/change-password/:token', async (req, res) => {

        const { email, password } = req.body;
        let token = req.params.token

        try {

            const decoded = await jwt.verify(token, 'OPEN-CTS');
            const hashedPassword = await bcrypt.hash(password, 3)
            const user = { email: email, password: hashedPassword }
            const result = await User.updateOne({_id: decoded.id}, {...user})
            console.log(result)
            const accessToken = jwt.sign({ email:email, id: decoded.id}, 'OPEN-CTS')
            res.status(200).json({ accessToken: accessToken })

        } catch (error) {
            res.status(404).json({ message: error })
        }


    })


    return router;
}


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // type: 'OAuth2',
        user: 'm.p.gangbadja@gmail.com',
        pass: "L'enigmatik_12 Google"
        //user: process.env.MAIL_USERNAME,
        //pass: process.env.MAIL_PASSWORD,
        //clientId: process.env.OAUTH_CLIENTID,
        //clientSecret: process.env.OAUTH_CLIENT_SECRET,
        //refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

function setMailOptions(to, content) {
    return {
        from: 'm.p.gangbadja@gmail.com',
        to: to,
        subject: 'Nodemailer Project',
        text: content
    };
}



export default authCtrl;
