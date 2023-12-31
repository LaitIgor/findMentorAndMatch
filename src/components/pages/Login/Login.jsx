import {useContext} from 'react';
import {Link} from 'react-router-dom';
import AdmissionForm from '../../HOCs/AdmissionFormHOC';
import {LanguageContext} from '../../../Providers/LanguageProvider';
import languages from '../../../dictionary';
import icons from '../../../assets/icons.svg';
const GlobeIcon = icons + '#globe';
const ChevronIcon = icons + '#chevron';

const Login = () => {
const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext);
const selectValue = selectedLanguage === 'dk' ? 'Danish' : 'English';

const formSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value && !e.target[1].value) return
    alert(`email: ${e.target[0].value}, \n password: ${e.target[1].value}`);
}

    return (
            <>
                <h3 className='login-form__header'>{languages[selectedLanguage].formHeader}</h3>
                <form onSubmit={formSubmit}>
                    <div className="login-form__email login-form__group">
                        <label htmlFor="email">{languages[selectedLanguage].emailLabel}</label>
                        <input type="email" placeholder={languages[selectedLanguage].emailPlaceholder} id='email'/>
                    </div>
                    <div className="login-form__pass login-form__group">
                        <label htmlFor="password">{languages[selectedLanguage].passLabel}</label>
                        <input type="text" placeholder={languages[selectedLanguage].passPlaceholder} id='password'/>
                    </div>
                    <button type='submit'>Log ind</button>
                </form>

                <div className='login-actions'>
                    <p>{languages[selectedLanguage].forgotPassText}
                        <Link to='/forgot-password'>{languages[selectedLanguage].forgotPassLink}</Link>
                    </p>
                    <p>{languages[selectedLanguage].dontHaveLogin}
                        <Link to='/signup'>{languages[selectedLanguage].dontHaveLoginLink}</Link>
                    </p>
                </div>

                <div className='login-select__wrapper'>
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
                        className='login-select'
                        name="languages" 
                        id="languages" 
                        value={selectedLanguage}
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

export default AdmissionForm(Login)