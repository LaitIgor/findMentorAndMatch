import AppTemplateHOC from "../../HOCs/AppTemplateHOC";
import styles from './adminWelcome.module'

const AdminHome = () => {
    return (
        <>
           <div className={styles.content}>
            <div className={styles.block}><ul className={styles.list}><li>Descriptive bullet point text to explain function of page</li></ul><div className={styles.image}>Img. of page</div></div>
            <div className={styles.block}><ul className={styles.list}><li>Descriptive bullet point text to explain function of page</li></ul><div className={styles.image}>Img. of page</div></div>
            <div className={styles.block}><ul className={styles.list}><li>Descriptive bullet point text to explain function of page</li></ul><div className={styles.image}>Img. of page</div></div>
            <div className={styles.block}><ul className={styles.list}><li>Descriptive bullet point text to explain function of page</li></ul><div className={styles.image}>Img. of page</div></div>
           </div>
        </>
    )
}

export default AppTemplateHOC(AdminHome);