import styles from "../src/styles/Layout.module.css"

export default function Layout({children}){

    return(
       <div className={styles.content}>
        <h3>Layout</h3>
           
            <content >{children}</content>
            
       </div>
           
    )
}