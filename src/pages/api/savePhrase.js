import conexion from "./db"



export default function savePhrase(req,res){
    const user = req.body.name //nombre de usuario
    const boxname = req.body.boxname // Nombre de la caja

    if(req.method.toLowerCase()=="post"){

        if(parseInt(req.body.cantidad)<=6){

            const boxname= req.body.boxname
            const name= req.body.name
            // Revisar si el usuario ya existe, si no existe, registrarlo
            conexion.query(`select * from users where name = '${name}' `,async (error, results)=>{
                if(error){
                    console.log(error)
                }else{
                    if(results.length !=0){
                        console.log("Usuario ya creado")

                    }else{
                        conexion.query(`insert into users (name) values ('${name}')`)
                    }
                }

            })

            // Revisar si el nombre de la caja ya existe
            conexion.query(`Select * from box where boxname = '${boxname}'`,async (error, results)=>{
                if(error){console.log(error)}
                
                if(results.length !=0){
                    res.send("Eliga otro nombre de caja porque ya existe")
                }else{
                    conexion.query(`insert into box (boxname, username) values ('${boxname}','${name}')`,async (error)=>{
                        if(error){console.log(error)}
                    })
                    
                }
            })

            switch (req.body.cantidad) {
                case "1":
                    
                    conexion.query(`insert into phrase('content', 'title', box_name) values('')`)
 
                    break;
                case "2":
                    
                    break;
                case "3":
                    
                    break;
                case "4":
                    
                    break;
                case "5":
                    
                    break;
                case "6":
                    
                    break;
                default:
                    break;
            }






        }else{
            res.send("Tienen que ser maximo 6 tarjetas.")
        }

       

        res.send(req.body.cantidad)

    }

    
    
    
}
