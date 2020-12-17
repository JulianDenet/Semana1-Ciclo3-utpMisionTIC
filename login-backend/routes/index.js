const router = require('express').Router();
const apiRouterUser = require('./api/user')

router.use('/user',apiRouterUser )
module.exports = router;