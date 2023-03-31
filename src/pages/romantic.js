import styles from "@/styles/Romantic.module.css"
import { useEffect, useState } from "react"
import RomanticCard from "../../components/RomanticCard"

export default function Romantic(){
    const [numero, setNumero] = useState(0)


    return(
        <div className={styles.romanticBg}>
            <h3>Put the cards inside the Romantic Box</h3>

            <label className={styles.label} for="cantidad">Digite la cantidad de tarjetas que quiere</label>
            <input className={styles.input} name="cantidadTarjeta" id="cantidadTarjeta" type="number" placeholder="Digite la cantidad de tarjetas" />
            <button onClick={function(){
                setNumero(numero + parseInt(cantidadTarjeta.value))
            }} >Poner tarjetas</button>
 
            {
                numero != 0 ? (
                    <RomanticCard cantidad={numero} ></RomanticCard>) : (<p>Dele al boton</p>
                )
            }
            
        </div>
    )
}