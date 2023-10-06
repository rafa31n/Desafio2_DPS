import { Contactos } from "../model/contactos.model.js";

export const ContactosController = {

    crear: async (req, res) => {
        try {
            const { body } = req
            const contacto = await Contactos.create({
                nombre: body.nombre,
                apellido: body.apellido,
                telefono: body.telefono,
                user: "andres"
            })

            if (contacto) {
                res.status(200).send('ok');
                return;
            } else {
                res.status(500).send('No se pudo crear el contacto');
            }
        } catch (error) {
            res.status(500).send(error);
        }

    },

    mostrar: async (req, res) => {

        try {

            const contactos = await Contactos.findAll();

            if (contactos) {
                res.status(200).send(contactos);
                return;
            }

        } catch (error) {
            res.status(500).send(error);
        }
    },

    eliminar: async (req, res) => {
        try {
            const { body } = req

            const deleteContact = await Contactos.destroy({
                where: {
                    id: body.id
                }
            })

            if (deleteContact) {
                res.status(200).send('ok');
                return;
            }

        } catch (error) {
            res.status(500).send(error);
        }
    }
}