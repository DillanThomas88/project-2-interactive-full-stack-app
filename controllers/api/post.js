const router = require('express').Router();
const { User } = require('../../models');

const sendEmail = require("../../utils/sendEmail");

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        // console.log(userData)
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });

            return;
        }
        req.session.logged_in = true
        req.session.user_id = userData.id;
        res.json({ user: userData, message: 'You are now logged in!' });


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session)

        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        if (!newUser) {
            res
                .status(400)
                .json({ message: 'Failed to sign un' });
            return;
        }
        res.redirect('/')

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/request-new', async (req, res) => {
    try {
        const validEmail = await User.findOne(
            {
                where: {
                    email: req.body.accountEmail
                }
            });
        // console.log(validEmail)
        if (!validEmail) {
            res
                .status(400)
                .json({ message: 'Email not found, please try again' });
            return;
        }

        const link = `https://shoestring-app.herokuapp.com/password-reset?${validEmail.id}`;
        await sendEmail(req.body.accountEmail, "Your password reset link", `Here is your link to reset your password: ${link}`);

        res.send("password reset link sent to your email account");

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router