import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><Link to='/'><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                    <li><Link to='/'><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                </ul>
                <div className="offcanvas__logo">
                    <Link to='/'><img src="assets/img/logo.png" alt="" /></Link>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__auth">
                    <Link to='/'>Login</Link>
                    <Link to='/'>Register</Link>
                </div>
            </div>


            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to='/'><h3><b>MIKE EMPIRE</b></h3></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to='/'>Home</Link></li>

                                    <li><Link to='/'>Categories</Link>
                                        <ul className="dropdown">
                                            <li><Link to='/'>Clothes</Link></li>
                                            <li><Link to='/'>Phones</Link></li>
                                            <li><Link to='/'>Shoes</Link></li>
                                            <li><Link to='/'>Electronics</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/'>Contact</Link></li>
                                    <li><Link to='/'>About Us</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><Link to='/'><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </Link></li>
                                    <li><Link to='/'><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar

