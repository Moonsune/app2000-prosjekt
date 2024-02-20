const { default: mongoose} = require('mongoose');

const connection = {};

export const connectToDb = async () => {
    console.log('1');
    try {
        console.log('2');
        if (connection.isConnected){
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log('Using new connection');

    }catch (error){
        console.log(error);
        throw new Error('Error connecting to the database');

    }
}