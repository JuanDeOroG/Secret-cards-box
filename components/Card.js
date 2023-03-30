import styles from "@/styles/Card.module.css"

export default function Card({tituloTarjeta}){


    return(
        <div >
            <div className={styles.CardRed}>
                <img src="https://via.placeholder.com/150" alt="Regalo" />
                <h3>Caja Romantica</h3>
            </div>

            <div className={styles.CardBlue}>
                <img src="https://via.placeholder.com/150" alt="Regalo" />
                <h3>Caja Amistosa</h3>
            </div>

            <div className={styles.CardCumple}>
                <img src="https://via.placeholder.com/150" alt="Regalo" />
                <h3>Caja Cumpleañera</h3>
            </div>
            
          
        </div>
    )
}