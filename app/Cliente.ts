import mongoose = require("mongoose");

interface ICliente extends mongoose.Document {
    nombre: string;
    edad: number;
    carrera: string;
}


const ClienteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true}
});

const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export {Cliente}