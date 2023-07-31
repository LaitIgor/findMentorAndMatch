import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AdmissionForm from '../../HOCs/AdmissionFormHOC';
import {LanguageContext} from '../../../Providers/LanguageProvider';
import languages from '../../../dictionary';
import icons from '../../../assets/icons.svg'
import pageImage from '../../../assets/signup-x2.jpg';
const GlobeIcon = icons + '#globe';
const ChevronIcon = icons + '#chevron';

const SignupEmployee = () => {
const [termsAndCondChecked, setTermsAndCondChecked] = useState(false);
const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext);
const selectValue = selectedLanguage === 'dk' ? 'Danish' : 'English';

const dictionary = languages[selectedLanguage].signup;

const formSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value && !e.target[1].value) return
    alert(`email: ${e.target[0].value}, \n password: ${e.target[1].value}`);
}

    return (
            <>
            <h3 className='signupEmployee-form__header'>{dictionary.createEmployeeTitle}</h3>
            <form onSubmit={formSubmit}>
                <div className="signupEmployee-form__group signupEmployee-form__email">
                    <label htmlFor="email">{dictionary.emailLabel}</label>
                    <input type="email" placeholder={dictionary.inputPlaceholder} id='email'/>
                </div>
                <div className="signupEmployee-form__group signupEmployee-form__pass">
                    <label htmlFor="password">{dictionary.passwordLabel}</label>
                    <input type="password" id='password'/>
                </div>
                <div className="signupEmployee-form__group signupEmployee-form__pass">
                    <label htmlFor="confirmPass">{dictionary.passwordConfirm}</label>
                    <input type="password" id='confirmPass'/>
                </div>

                <div className="form__checkbox checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        onChange={() => setTermsAndCondChecked(!termsAndCondChecked)}
                        checked={termsAndCondChecked}
                        required
                    />
                    <label htmlFor="consent">{dictionary.termsAndCondText}
                        {/* {this.props.t('signup.i_accept')}  */}
                        <Link to='/privatlivspolitik-og-betingelser'>{dictionary.termsAndCondLink}</Link>
                    </label>
                </div>

                <button type='submit'>{dictionary.formBtn}</button>
            </form>

            <div className="signupEmployee-actions">
                <p>{dictionary.haveProfileText}
                    <Link to='/forgot-password'>{dictionary.haveProfileLink}</Link>
                </p>
            </div>

            <div className='signupEmployee-select__wrapper'>
                <label htmlFor="languages">
                    <svg style={{width: '18px', marginRight: '10px'}}>
                        <use xlinkHref={GlobeIcon}></use>
                    </svg>
                    <span>{selectValue}</span>
                    <svg style={{width: '12px', marginLeft: 'auto'}}>
                        <use xlinkHref={ChevronIcon}></use>
                    </svg>
                </label>
                <select 
                    className='signupEmployee-select' 
                    name="languages" 
                    id="languages" 
                    defaultValue='dk'
                    onChange={(e) => {
                        console.log(e.target.value);
                        setSelectedLanguage(e.target.value);
                    }}
                >
                    <option value="dk">Danish</option>
                    <option value="en">English</option>
                </select>
            </div>
            </>
    )
}

export default AdmissionForm(SignupEmployee, pageImage);