import { DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';

export const Stock = sequelize.define('stock', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})

