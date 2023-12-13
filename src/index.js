import app from './app.js'
import {sequelize} from './database/database.js'
const PORT = 3001;

import './models/Stock.js'

async function main() {
    try {
        await sequelize.sync({force:true})
        app.listen(PORT)
        console.log(`'Server is listening on port: ${PORT}'`);
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

main();
