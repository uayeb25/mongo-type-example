import mongoose = require("mongoose");

const uri: string = "mongodb://poo-lab1:b1Y8CrFSKJhZe8qTNcWnTIsXjRhG8uHtZnZ1BzolPsElq8IsWXNh637hhX6fmHUHG3X7JQYgEU5zoOoMHrKUsQ==@poo-lab1.documents.azure.com:10255/example-db?ssl=true&replicaSet=globaldb";


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

const Cliente = mongoose.model<ICliente>("cliente", ClienteSchema);

export {Cliente}


export const getall = function(): void{

    Cliente.find( (err: any, clientes: any) => {
        console.log(clientes);
    } );

}