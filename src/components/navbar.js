import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import LogoNav from "../assets/Logo-navbar.svg";
import './navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>

            <div>
            
        
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                       <a href="/"><img src={LogoNav} alt="Logo" /></a>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <a href="" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={80}
                                    duration={500}
                                >
                                    Nós
                                </Link>
                                 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="clientes"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Clientes
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="partners"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Lideranças
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" rel="noreferrer" className="nav-links" onClick={closeMobileMenu}>
                            <Link
                                onClick={closeMobileMenu}
                                activeClass="active"
                                to="contato"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                Contato
                            </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" rel="noreferrer" href="https://www.linkedin.com/company/do-it-wfs/" target="_blank"><i class="fab fa-linkedin-in"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" rel="noreferrer" href="https://www.instagram.com/doitbrandingtech/" target="_blank"><i class="fab fa-instagram"/></a>
                        </li>
                    </ul>
                </div>
            </nav>  
            </div>
        </>
    )
}

export default Navbar;