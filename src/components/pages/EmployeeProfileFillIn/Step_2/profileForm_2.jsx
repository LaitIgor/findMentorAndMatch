
import styles from './styles.module';

const UserProfileForm_2 = ({prevStep, setValue}) => {
    return  (
    <> 
        <div style={{width: '100%', textAlign: 'left'}}>
            <div className={styles['block-wrapper']}>
                <h4 className={styles['dev-header']}>Development areas</h4>
                <div className={styles['dev-inner']}>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="stratThink" id="1" onChange={setValue} />
                        <label htmlFor="1">Strategic Thinking</label>
                    </div>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="probSolv" id="2" onChange={setValue} />
                        <label htmlFor="2">Problem Solving</label>
                    </div>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="example3" id="3" onChange={setValue} />
                        <label htmlFor="3">Example 3</label>
                    </div>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="example4" id="4" onChange={setValue} />
                        <label htmlFor="4">Example 4</label>
                    </div>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="example5" id="5" onChange={setValue} />
                        <label htmlFor="5">Example 5</label>
                    </div>
                    <div className={styles['checkbox-wrapper']}>
                        <input type="checkbox" name="example6" id="6" onChange={setValue} />
                        <label htmlFor="6">Example 6</label>
                    </div>

                </div>
            </div>

            <div className={styles['block-wrapper']}>
                <h4 className={styles['dev-header']}>About Me</h4>
                <div style={{textAlign: 'center'}}>
                <textarea 
                    className={styles['about__text']}
                    name="aboutMyself" 
                    placeholder='Tell us about yourself'
                    id="aboutMyself" cols="60" 
                    rows="10" 
                    onChange={setValue}
                />
                </div>
                
            </div>
        </div>
        <button className={styles.next} onClick={prevStep}>Prev</button>
        <button type='submit' className={styles.next} style={{backgroundColor: 'green'}}>Finish</button>
    </>
    )
   
}

export default UserProfileForm_2;