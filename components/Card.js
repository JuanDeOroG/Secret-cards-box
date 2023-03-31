import styles from "@/styles/Card.module.css"
import Link from "next/link"

export default function Card(){


    return(
        <div >
            <div className={styles.CardRed}>
                <img src="https://via.placeholder.com/150" alt="Regalo" />
                <h3><Link href={"/romantic"}>Caja Romantica</Link></h3>
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