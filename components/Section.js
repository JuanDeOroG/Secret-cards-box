import styles from "@/styles/Section.module.css"

export function Section({children}){

    return(
        <section className={styles.fondo}>
            {children}
        </section>
    )
}