import conexion from "./db"



export default function savePhrase(req,res){
    const user = req.body.name //nombre de usuario
    const boxname = req.body.boxname // Nombre de la caja

    if(req.method.toLowerCase()=="post"){

        if(parseInt(req.body.cantidad)<=6){

            const boxname= req.body.boxname
            const name= req.body.name
            const secretKey= req.body.secretKey
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
                    conexion.query(`insert into box (boxname, username, password) values ('${boxname}','${name}','${secretKey}')`,async (error)=>{
                        if(error){console.log(error)}
                    })
                    
                }
            })
            //Tarjeta 1
            const content1 = req.body.input21
            const title1= req.body.input11
            //Tarjeta 2

            const content2 = req.body.input22
            const title2= req.body.input12
            //Tarjeta 3

            const content3 = req.body.input23
            const title3= req.body.input13
            //Tarjeta 4 1

            const content4 = req.body.input24
            const title4= req.body.input14
            //Tarjeta 5

            const content5 = req.body.input25
            const title5= req.body.input15
            //Tarjeta 6

            const content6 = req.body.input26
            const title6= req.body.input16

            switch (req.body.cantidad) {
                case "1":
                    
                    
                    conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`,async (error)=>{
                        if(error){
                            console.log(error)
                        }
                    })
 
                    break;
                case "2":
                    
                    
                    conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`,async (error)=>{
                        if(error){console.log(error)}else{console.log("Insertado correctamente")}
                    })
                    conexion.query(`insert into phrase(content, title, box_name) values('${content2}','${title2}','${boxname}')`,async (error)=>{
                        if(error){console.log(error)}else{console.log("Insertado correctamente")}
                    })
                    
                    
                    break;
                case "3":
                    
                    
                conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content2}','${title2}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content3}','${title3}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                
                    
                    break;
                case "4":
                    
                    
                conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content2}','${title2}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content3}','${title3}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content4}','${title4}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                
                
                    
                    break;
                case "5":
                    
                    
                conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content2}','${title2}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content3}','${title3}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content4}','${title4}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content5}','${title5}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                
                
                    
                    break;
                case "6":
                    
                    
                conexion.query(`insert into phrase(content, title, box_name) values('${content1}','${title1}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content2}','${title2}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content3}','${title3}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content4}','${title4}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content5}','${title5}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                conexion.query(`insert into phrase(content, title, box_name) values('${content6}','${title6}','${boxname}')`, async (error)=>{
                    if(error){
                        console.log(error)
                    }
                });
                
                    
                    break;
                default:
                    console.log("No se pudo mandar nada de las tarjetas a la base de datos")
                    break;
            }
            res.send(`La caja y las tarjetas fueron guardadas correctamente. <a href='http://localhost:3000/box/${boxname}'>Click aqui para ver la caja creada</a>`)







        }else{
            res.send("Tienen que ser maximo 6 tarjetas. Cantidad de tarjetas digitadas: "+req.body.cantidad)
        }

        

       

        

    }

    
    
    
}

//consulta para buscar la caja de un usuario SELECT users.name, boxname, title, content FROM box,users,phrase WHERE users.name = box.username and box.boxname = phrase.box_name