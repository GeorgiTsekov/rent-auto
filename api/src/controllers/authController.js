const router = require('express').Router();

const authService = require('../services/authService');
const { auth } = require('../middlewares/authMiddleware');

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const { user, accessToken } = await authService.login({ email, password });

        res.json({
            _id: user._id,
            name: user.name,
            email,
            accessToken
        });
    } catch (error) {
        next(error);
    }
});

router.post('/register', async (req, res, next) => {
    const { name, email, password, rePassword } = req.body;

    try {
        await authService.register({
            name,
            email,
            password,
            rePassword
        });

        let { user, accessToken } = await authService.login({ email, password });

        // res.header("Authorization", token).send(user);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            accessToken
        });
    } catch (error) {
        next(error);
    }
});

router.get('/logout', auth, (req, res) => {
    res.json({ ok: true });
});

module.exports = router;