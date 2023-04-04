import styles from "@/styles/Romantic.module.css"
import { useEffect, useState } from "react"
import RomanticCard from "../../components/RomanticCard"

export default function Romantic(){
    const [numero, setNumero] = useState(0)


    return(
        <div className={styles.romanticBg}>
            <h3>Put the cards inside the Romantic Box</h3>

            <label className={styles.label} for="cantidad">Digite la cantidad de tarjetas que quiere</label>
            <input className={styles.input} name="cantidadTarjeta" id="cantidadTarjeta" type="number" placeholder="Cantidad menor o igual a 6" />


            {
                numero<=6 ? (<button onClick={function(){
                    if(numero+parseInt(cantidadTarjeta.value)>6){
                        alert("Sólo se permite un maximo de 6 tarjetas")
                    }else{setNumero(numero + parseInt(cantidadTarjeta.value))}
                    
                }} >Poner tarjetas</button>) : (
                    <button onClick={function(){
                        alert("Digite la cantidad de tarjetas")
                    }} >Poner tarjetas</button>
                    
                )
            }
            
           
            
            {
                numero != 0 ? (
                    <RomanticCard cantidad={numero} ></RomanticCard>) : (<p>Dele al boton</p>
                )
            }
            
            
        </div>
    )
}