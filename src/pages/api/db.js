const pool = require("mysql")

const conexion = pool.createPool({
    connectionLimit:100,
    host:"localhost",
    user:"root",
    password:"",
    database:"secretcards",
    multipleStatements:true
})

conexion.getConnection((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Conexion a la bd exitosa.")
    }
})

module.exports = conexion;