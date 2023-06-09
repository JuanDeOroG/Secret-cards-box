import styles from "@/styles/RomanticCard.module.css"
import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"


export default function RomanticCard({cantidad}){
    let etiquetas=[]
    for(let x=1;x<=cantidad;x++){
        etiquetas.push(x)

    }
    const [inputBoxname, setInputBoxname] = useState("")
    const [existe, setExiste] = useState(false)

    const router = useRouter()

    async function ifExist(){
        const res = await axios.post(`http://localhost:3000/api/ifexist`, {boxname:inputBoxname})
        const data = res.data
        console.log(data.result)
        setExiste(data.result)
    }
    return(
        <form id="formCards" action="/api/savePhrase" method="post" className={styles.comodarCartas}>
            <div>
            <label>Choose one Username: </label>
            <input type="text" name="name"   /> <br></br>
            
            <label onClick={ifExist}>BoxName: </label>
            <input type="text" name="boxname" id="boxname" onChange={()=>setInputBoxname(boxname.value)}  /><br></br>
            <label>Secret Key: </label>
            <input type="text" name="secretKey" id="secretKey"   />
            </div>
            {etiquetas.map((etiqueta)=>(
                
                <div className={styles.card} key={etiqueta}>
                    <img className={styles.cardimage} src="https://via.placeholder.com/150" alt="Imagen de ejemplo" class="card-image"/>
                    <div className={styles.cardcontent}>
                        <label>Titulo de tarjeta:</label>
                        <input type="text" name={`input1${etiqueta}` } />
                        <label >Frase:</label> <br></br>
                        <textarea type="text" name={`input2${etiqueta}`}></textarea>
                    </div>
                </div>   
            ))}

            <div>         
            <button type="button" onClick={()=>{
        const regex = /^[a-zA-Z0-9]*$/;
        if(regex.test(boxname.value)){
            if(existe == false){formCards.submit()}else{alert("The boxname already exist, type a different boxname")}
            
        }else{
            alert("Don't use punctuation marks and white spaces")
        }
        
    }}>
                Guardar caja
            </button>
            <input type="text" name="cantidad" value={cantidad}/>
            </div>
            
        </form>
        
        
    )
}

