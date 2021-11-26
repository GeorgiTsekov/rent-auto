const router = require('express').Router();

const authService = require('../services/authService');
const { isGuest, isAuth } = require('../middlewares/authMiddleware');

router.post('/login', isGuest, async (req, res, next) => {
    const { email, password } = req.body;
    let { user, token } = await authService.login({ email, password });
    console.log(token)
    try {
        res.json({
            _id: user._id,
            name: user.name,
            email,
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
});

router.post('/register', isGuest, async (req, res, next) => {
    const { name, email, password, rePassword } = req.body;

    if (password !== rePassword) {
        res.locals.error = 'Password missmatch';

        return res.render('auth/register');
    }

    try {
        await authService.register({
            name,
            email,
            password
        });

        let { user, token } = await authService.login({ email, password });

        // res.header("Authorization", token).send(user);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.json({ ok: true });
});

module.exports = router;