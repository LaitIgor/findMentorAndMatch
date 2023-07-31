import {useParams} from 'react-router-dom';

import AppTemplateHOC from "../../HOCs/AppTemplateHOC"

import userIco from '../../../assets/user-ico.png';
import styles from './matchedList.module';

import {userListForMatchmaking} from '../../../usersList';

const MatchedList = () => {
const {userId} = useParams();

const selectedUser = userListForMatchmaking.find((user) => userId === user.name.toLowerCase());
console.log(selectedUser, 'selectedUser');

selectedUser.suggestedMatches.sort((user1, user2) => user2.matchingPercent - user1.matchingPercent)

    return (
        <>
            <h3 className={styles['user-name']}>{selectedUser.fullName}</h3>

            <div className={styles['selected-user']}>
                    <img className={styles['selected-user__img']} src={userIco} alt="Icon" />
                    <p className={styles['selected-user__text']}> 
                    Display area for info such as:Name, title, competencies, language, work area & about me</p>
            </div>

            <div className={styles.suggestions}>
                <h2>{`Suggestions for ${selectedUser.fullName}`}</h2>

                
                {selectedUser.suggestedMatches.map((match) => {
                    return       <div className={styles['result__wrapper']}> <div key={match.name} className={styles['result']}>
                    <div className={styles['result__profile-wrapper']}> <img className={styles['result__img']} src={userIco} alt="Icon" /> <p>{match.name}</p></div>
                    <p className={styles['result__text']}> 
                    Display area for info such as:Name, title, competencies, language, work area & about me</p>
                </div>

                <div className={styles['matched-percent__wrapper']}>
                    <p>{match.matchingPercent}%</p>
                    <p>Match</p>
                    <button className='button-clean'>Details</button>
                </div>
                </div>
                })}


                    {/* <div className={styles['result']}>
                        <div className={styles['result__profile-wrapper']}> <img className={styles['result__img']} src={userIco} alt="Icon" /> <p>Name Name</p></div>
                        <p className={styles['result__text']}> 
                        Display area for info such as:Name, title, competencies, language, work area & about me</p>
                    </div>

                    <div className={styles['matched-percent__wrapper']}>
                        <p>100%</p>
                        <p>Match</p>
                        <button className='button-clean'>Details</button>
                    </div> */}
                

            </div>

        </>
    )
}

export default AppTemplateHOC(MatchedList);