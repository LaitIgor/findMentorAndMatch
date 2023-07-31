import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Burger from '../../Burger';
import LogoLink from '../../LogoLink/';

import styles from './headerEmployee.module';

const navLinks = [
    {path: '/employees', linkText: 'Employees'},
    {path: '/news', linkText: 'News'},
    {path: '/programs', linkText: 'Programs'},
    {path: '/about', linkText: 'Abouts'},
    {path: '/contact', linkText: 'Contact us'},
]

export const HeaderEmployee = (props) => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const hideNav = props.hideNav ? 'hideElem' : '';

    useEffect(() => {
        function checkWindowWidth() {
            const width = window.innerWidth;
            if (width > 1168) setBurgerOpen(false)
        }

        checkWindowWidth();
        window.addEventListener('resize', checkWindowWidth)

        return () => {
            window.removeEventListener('resize', checkWindowWidth);
            console.warn('Header component unmounted');
        }
    }, [])

    return (
        <>
        <header className={styles['header-main']}>
            <LogoLink />
            <div className={`${styles['header-nav__wrapper']} ${hideNav}`}>
                <nav className={`${styles['header-nav']} ${burgerOpen ? styles['mobileNav'] : ''}`}>
                    <ul className={styles['header-list']}>
                        {navLinks.map(({path, linkText}) => (
                            <li key={linkText} className={styles['header-list__item']}>
                                <Link 
                                to={path} 
                                onClick={() => setBurgerOpen(false)} 
                                className={styles['header-list__link']}>{linkText}
                                </Link>
                            </li>
                        ))}   
                    </ul>
                </nav>
                <Burger open={burgerOpen} toggleBurger={setBurgerOpen} />
                <div className={`${styles['login-btn__wrapper']} ${burgerOpen ? styles['mobileActionBtn'] : ''}`} >
                    <Link className={styles['login-btn']} to='/login'>Login</Link>
                    {/* Remove later */}
                    <Link className={`${styles['login-btn']} ${styles['login-btn--orange']}`} to='/apphome'>App</Link>
                </div>
            </div>
        </header>
        </>
    )
}