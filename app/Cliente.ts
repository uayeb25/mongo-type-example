import mongoose = require("mongoose");

const uri: string = "";

mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Conexion exitosa");
    }
});

interface ICliente extends mongoose.Document {
    nombre: string;
    edad: number;
    carrera: string;
}


const ClienteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    carrera: {type: String, required: true}
});

const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export {Cliente}