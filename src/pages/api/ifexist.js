import conexion from "./db";
export default function ifexist(req, res){

    const boxname = req.body.boxname

    console.log("Nombre de caja. ",boxname)

    conexion.query(`SELECT * from box where boxname = '${boxname}'`, async (error,results)=>{
        if(error){console.log(error)}else{
            if(results.length == 0){
                console.log("No hay una caja llamada asi")
                res.status(200).json({result:false})
            }else{
                console.log("ya existe una caja llamada asi")

                res.status(200).json({result:true})
            }
        }
    })




    
}