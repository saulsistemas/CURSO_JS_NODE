const mongoose = require('mongoose')
const url = process.env.MONGO_DB_CNN
const dbConnection = async()=>{
    try {
        await mongoose.connect(url)

        console.log("base de datos online");
    } catch (error) {
        throw new error('Error al iniciar la BD')
        
    }
}

module.exports = {
    dbConnection,
}