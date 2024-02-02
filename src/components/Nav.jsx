import {Link, useLocation} from 'react-router-dom';
import '../styles/Nav.css'


function Nav() {
    const currentTab = useLocation().pathname;

    const showLinks = () => {
        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.custom-mobile-nav');
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    };

    return (
        <>
            <div className='mb-5 navbar d-flex align-items-center'>
                <Link className={currentTab === '/' ? 'nav-item nav-link glow m-3' : 'nav-item nav-link my-3'}>
                    Jacob Kovacs
                </Link>
            <div className='d-flex justify-content-end'>
            <ul id='custom-nav' className='custom-nav'>
                <li className='nav-item'>
                    <Link
                    to='/about'
                    className={currentTab === '/about' ? 'my-3 nav-link glow' : 'my-3 nav-link'}
                    >
                    About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/projects'
                    className={currentTab === '/projects' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/contact'
                    className={currentTab === '/contact' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/resume'
                    className={currentTab === '/resume' ? 'nav-link glow my-3 ' : 'nav-link my-3 '}
                    >
                    Resume
                    </Link>
                </li>
            </ul>
            </div>
                <button className="hamburger mx-4" onClick={() => showLinks()}>
                    <div className="bar"></div>
                </button>
            </div>
        </>
    )
}
export default Nav;