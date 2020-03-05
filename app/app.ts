import {Cliente, getall} from "./Cliente"

const cliente = new Cliente();

cliente.nombre = "IMIX";
cliente.edad = 32;
cliente.carrera = "IQ"

cliente.save((err:any) => {
    if(err){
        console.log(err)
    }else{
        console.log(cliente)
    }
})

getall();