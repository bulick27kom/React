// import './Info.css'
import styles from './Info.module.css'

console.log('styles :>> ', styles);

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from info component</h1>
            <button className={styles.myOtherButton}>
                Click me in the info component
            </button>
        </div>
    )
}

export default Info