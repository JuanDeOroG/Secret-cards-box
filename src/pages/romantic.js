import styles from "@/styles/Romantic.module.css"
import {  useState } from "react"
import RomanticCard from "../../components/RomanticCard"

export default function Romantic(){
    const [numero, setNumero] = useState(0)


    return(
        <div className={styles.romanticBg}>
            <h3>Insert the Cards into your Romantic Box</h3>

            <label className={styles.label} for="cantidad">Type how many Cards you have:</label>
            <input className={styles.input} name="cantidadTarjeta" id="cantidadTarjeta" type="number" placeholder="1 - 6" max={6} />


            {
                numero<=6 ? (<button onClick={function(){
                    if(numero+parseInt(cantidadTarjeta.value)>6 ){
                        alert("You can create max 6 cards")
                    }else{
                        setNumero(numero + parseInt(cantidadTarjeta.value))
                    }
                    
                }} >Poner tarjetas</button>) : (
                    <button onClick={function(){
                        alert("type how many cards you have.")
                    }} >Poner tarjetas</button>
                    
                )
            }
            
           
            
            {
                numero != 0 ? (
                    <RomanticCard cantidad={numero} ></RomanticCard>) : (<p>Click On button</p>
                )
            }
            
            
        </div>
    )
}