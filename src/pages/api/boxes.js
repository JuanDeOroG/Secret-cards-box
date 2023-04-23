import conexion from "./db"



export default function boxes(req, res) {
  conexion.query(`SELECT users.name, boxname, title, content, password FROM box,users,phrase WHERE users.name = box.username and box.boxname = phrase.box_name and box.boxname = '${req.body.cajaBuscada}' `,async (error,results)=>{
    if(error){console.log(error)}else{
      res.status(200).json({ results:results })

    }
  })



  
}
