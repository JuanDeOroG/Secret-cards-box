import styles from "@/styles/RomanticCard.module.css"


export default function RomanticCard({cantidad}){
    let etiquetas=[]
    for(let x=1;x<=cantidad;x++){
        etiquetas.push(x)

    }
    
    return(
        <div>
        
            {etiquetas.map((etiqueta)=>(
                
                <div className={styles.card} key={etiqueta}>
                    <img className={styles.cardimage} src="https://via.placeholder.com/150" alt="Imagen de ejemplo" class="card-image"/>
                    <div className={styles.cardcontent}>
                        <label for="input1">Campo 1:</label>
                        <input type="text" id="input1"/>
                        <label for="input2">Campo 2:</label>
                        <input type="text" id="input2"/>
                    </div>
                </div>   
            ))}
                         


            
        </div>
        
        
    )
}