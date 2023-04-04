


export default function savePhrase(req,res){

    let tarjetas = {}

    if(req.method.toLowerCase()=="post"){

        if(parseInt(req.body.cantidad)<=6){

            switch (req.body.cantidad) {
                case "1":
                    
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
                    res.send("Hubo un error.")
                    break;
            }






        }

       


    }

    
    
    
}
