const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        })
        console.log(`BD conectada`);

    } catch (error) {
        console.log(error);
        process.exit(1); //Detiene la app
    }
}

module.exports = conectarDB