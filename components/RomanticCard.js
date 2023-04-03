import styles from "@/styles/RomanticCard.module.css"


export default function RomanticCard({cantidad}){
    let etiquetas=[]
    for(let x=1;x<=cantidad;x++){
        etiquetas.push(x)

    }
    
    return(
        <form action="/api/savePhrase" method="post" className={styles.comodarCartas}>
            <div>
                <label>
                    Tu nombre:
                </label>
            <input type="text" name="name"   />
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
            <button type="submit">
                Guardar caja
            </button>
            <input type="text" name="cantidad" value={cantidad}/>
            </div>
            
        </form>
        
        
    )
}