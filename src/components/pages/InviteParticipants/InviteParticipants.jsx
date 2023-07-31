import AppTemplateHOC from "../../HOCs/AppTemplateHOC";

import styles from './inviteParticipants.module';

const InviteParticipants = () => {
    return (
        <>
            <h1 className={styles['header-text']}>Invite Participants</h1>
            <div className={styles['invite__wrapper']}>
                <div className={styles['invite__template-block']}>
                    <h4 className={styles['template-block__header']}>Explaining text for box below</h4>
                    <div className={styles['invite__template-content']}>Textbox for admin to list employee emails with comma as delimiter</div>
                </div>
                <div className={styles['invite__template-block']}>
                    <div className={styles['template-header']}><h4 className={styles['template-block__header']}>Explaining text for box below</h4> <button className={`${styles['template-button']} button-clean`}>Template button</button></div>
                    <div className={styles['invite__template-content']}>Textbox for free input for text to be included in enrollment email</div>
                </div>
                <button className='button-clean'>Send</button>
            </div>
        </>
    )
}

export default AppTemplateHOC(InviteParticipants)