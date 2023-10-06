import { Usuario } from "../model/user.model.js"
import bcrypt from 'bcryptjs'

export const userController = {

    crear: async (req, res) => {
        try {

            const { body } = req
            const password = body.password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const userOne = await Usuario.findOne({
                where: {
                    email: body.email
                }
            })

            if(userOne){
                res.send('El correo ya se encuentra registrado')
                return;
            }

            const user = await Usuario.create({
                username: body.username,
                email: body.email,
                password: hash
            })

            if (user) {
                res.status(200).send('ok');
                const usuarioCreado = user.dataValues
                console.log(usuarioCreado)
            }

        } catch (error) {
            console.log(error)
            return;
        }

    },

    login: async (req, res) => {

        try {
            const { body } = req
            const email = body.email
            const password = body.password

            const user = await Usuario.findOne({
                where: {
                    email: email
                }
            })

            if(user){
                const usuario = user.dataValues;
                const passwordBd = usuario.password

                const verify = bcrypt.compareSync(password, passwordBd);
                if(verify){
                    res.status(200).send('ok')
                    return;
                }else{
                    res.send('password incorrecta')
                    return;
                }
                
            }else{
                res.send('correo incorrecto')
                return;
            }

        } catch (error) {
            res.send(e)
        }
    }
}