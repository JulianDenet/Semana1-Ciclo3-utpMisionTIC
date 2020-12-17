const { User } = require('../models/');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.login = async (req, res, next) => {

    try {
            const user = await User.findOne( { where :  { email : req.body.email } } )
            if(user){
                // Evaluar contraseña
                const contrasenhaValida = bcrypt.compareSync(req.body.password, user.password)
            if (contrasenhaValida)
            {
                const token = jwt.sign( {
                    id: user.id,
                    username: user.username,
                    email: user.username,
                    rol: user.rol,
                }, 'mipalabrasecreta', {
                    expiresIn : 3600
                } )

                res.status(200).send({
                    auth : true,
                    tokenReturn : token,
                    user : user
                })

            }  else {
                res.status(401).json({ 'error' : 'Usuario o contraseña invalidos' })
            }

        } else {
            res.status(401).json({ 'error' : 'Usuario o contraseña invalidos' })
        }

    } catch (error) {
        res.status(500).json({ 'error' : 'Oops paso algo' })
        next()
    }


}

