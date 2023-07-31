import {Link} from 'react-router-dom';
import AppTemplateHOC from '../../HOCs/AppTemplateHOC';

import styles from './matchmaking.module';

import userIco from '../../../assets/user-ico.png';

import {userListForMatchmaking} from '../../../usersList';

const Matchmaking = () => {
    return (
        <>
        <h2 className={styles['header-text']}>Matchmaking</h2>
        <div className={styles['matchmaking']}>
            <div className={styles['matchmaking__top']}>
                <div className={styles['select-block']}>
                    <label>Select program
                        <select name="program" id="program">
                            <option value="1">Program 1</option>
                            <option value="2">Program 2</option>
                        </select>
                    </label>
                </div>
                <button className={`${styles.batchBtn} button-clean`}>Batch match</button>
            </div>
            <div className={styles['matchmaking__content']}>

                <h3 className={styles['content__header']}>Enrolled mentees</h3>
                <div className={styles['result__wrapper']} style={{maxHeight: '430px', overflowY: 'scroll'}}>
                    {userListForMatchmaking.map((user) => {
                        return  <div key={user.name} className={styles['result']}>
                            <Link to={`/matched-list/${user.name.toLowerCase()}`}><img className={styles['result__img']} src={userIco} alt="Icon" />{user.name}</Link>
                            {/* <Link to='/matched-list'><img className={styles['result__img']} src={userIco} alt="Icon" />{user.name}</Link> */}
                            <p className={styles['result__text']}> 
                            {`Display area for info such as: ${user.name}, title, competencies, language, work area & about me`}</p>
                        </div>
                    })}
                </div>

            </div>
        </div>

        </>
    )
}

export default AppTemplateHOC(Matchmaking);