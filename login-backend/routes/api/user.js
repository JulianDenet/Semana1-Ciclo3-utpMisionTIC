const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const userController = require('../../controllers/UserController')

// (url)/api/user/
router.get( '/', async (req, res) => {
    try{
        const user = await User.findAll();
        res.status(200).json(user)
    } catch {

    }
} )

router.post('/register', async (req, res) => {
    
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500)
    }

})

//router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router;