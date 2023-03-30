import conexion from "./db";



export default function vername(req,res){

    let resultado = conexion.query("Select * from users", async(error, results)=>{
        if(error){
           console.log("Hubo un error")
    
        }else{
    
            
            res.status(200).json({ data: results }) 
        }
    
        
    })
    
    
}
