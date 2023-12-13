import { Sequelize } from 'sequelize';

export const sequelize =  new Sequelize('zapatillas','postgres','1384',{
    host: 'localhost',
    dialect: 'postgres'
})
