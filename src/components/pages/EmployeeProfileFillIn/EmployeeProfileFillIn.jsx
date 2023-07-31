import {useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderEmployee from '../../headers/headerEmployee';
import UserProfileForm_1 from './Step_1/profileForm_1';
import UserProfileForm_2 from './Step_2/profileForm_2';
import LogoLink from '../../LogoLink';
import {
    Button,
    Box,
    Modal,
    Paper,
    Typography,
  } from '@mui/material';
  import {makeStyles} from '@mui/styles';
  import logo from '../../../assets/logo.png';

  import styles from './styles.module';


const EmployeeProfileFillIn = () => {
    const [formValues, setFormValues] = useState({});
    const [formStep, setFormStep] = useState(0);

    function nextStep() {
        setFormStep(formStep + 1)
    }

    function prevStep() {
        setFormStep(formStep - 1)
    }

    function formSubmit(e) {
        e.preventDefault()
        alert(`Form submitted with following data \n ${JSON. stringify(formValues)}`);
    }

    function formValuesSetter(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFormValues({...formValues, [name]: value})
    }

    return   (
        <>
        <HeaderEmployee hideNav={true}/>
            <div className="container">
                <form 
                    style={{height: '100%', display: 'grid', placeItems: 'center'}}
                    onSubmit={formSubmit}
                >
                    {formStep === 0 && <UserProfileForm_1 nextStep={nextStep} setValue={formValuesSetter} />}
                    {formStep === 1 && <UserProfileForm_2 prevStep={prevStep} setValue={formValuesSetter} />}
                </form>
            </div>
        </>
        
    )
    
}

export default EmployeeProfileFillIn;