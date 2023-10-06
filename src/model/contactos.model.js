import { sequelize } from "../db/mysql.js";
import { DataTypes } from 'sequelize'

const Contactos = sequelize.define("contacts", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    user: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

export { Contactos }