export default function boxview(req,res){

    const {boxview} = req.query
    console.log(req.query)

    res.send(boxview) //si voy a esta url se muestra el valor digitdo en la url http://localhost:3000/api/box/233
}




// 