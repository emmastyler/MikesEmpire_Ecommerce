import React from 'react'
import SearchBar from './Components/SearchBar'

const HomeScreen = () => {
    return (
        <div>
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-phone"></i>08048346175</a></li>
                                        <li><a href="#"><i className="fa fa-envelope"></i>info@mikesempire.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div>
                                    <a href="#"><h1><span id='shopName'>MIKE'S EMPIRE</span>-SHOP</h1></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="mainmenu pull-right">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><a href="#" className="active">Home</a></li>
                                        <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><a href="#">Products</a></li>
                                                <li><a href="#">Product Details</a></li>
                                                <li><a href="#">Checkout</a></li>
                                                <li><a href="#">Cart</a></li>
                                                <li><a href="#">Login</a></li>
                                            </ul>
                                        </li>
                                        <li>About Us</li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomeScreen
