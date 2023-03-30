import conexion from "./db"

conexion.query("insert into users (name) values('Juan');", async (error)=>{
  if(error){console.log(error)}
  else{
    console.log("Dato insertado.")
  }
})

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
