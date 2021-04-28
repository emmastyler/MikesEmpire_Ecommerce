import React from 'react'
import Category from '../Components/Category'
import Navbar from '../Components/Navbar'
import NewProducts from '../Components/NewProducts'
import SearchBar from '../Components/SearchBar'
import Slider from '../Components/Slider'

const HomeScreen = () => {
    return (
        <div className="App">
            <div className="maincontainer">
                <div id="preloder">
                    <div class="loader"></div>
                </div>

                <Navbar />

                <Category />

                <NewProducts />

                <Slider />


                <section class="trend spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="trend__content">
                                    <div class="section-title">
                                        <h4>Hot Trend</h4>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/ht-1.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Chain bucket bag</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/ht-2.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Pendant earrings</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/ht-3.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="trend__content">
                                    <div class="section-title">
                                        <h4>Best seller</h4>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/bs-1.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Cotton T-Shirt</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/bs-2.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/bs-3.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Round leather bag</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="trend__content">
                                    <div class="section-title">
                                        <h4>Feature</h4>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/f-1.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Bow wrap skirt</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/f-2.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Metallic earrings</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                    <div class="trend__item">
                                        <div class="trend__item__pic">
                                            <img src="assets/img/trend/f-3.jpg" alt="" />
                                        </div>
                                        <div class="trend__item__text">
                                            <h6>Flap cross-body bag</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="discount">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 p-0">
                                <div class="discount__pic">
                                    <img src="assets/img/discount.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 p-0">
                                <div class="discount__text">
                                    <div class="discount__text__title">
                                        <span>Discount</span>
                                        <h2>Winter 2021</h2>
                                        <h5><span>Sale</span> 50%</h5>
                                    </div>
                                    <div class="discount__countdown" id="countdown-time">
                                        <div class="countdown__item">
                                            <span>22</span>
                                            <p>Days</p>
                                        </div>
                                        <div class="countdown__item">
                                            <span>18</span>
                                            <p>Hour</p>
                                        </div>
                                        <div class="countdown__item">
                                            <span>46</span>
                                            <p>Min</p>
                                        </div>
                                        <div class="countdown__item">
                                            <span>05</span>
                                            <p>Sec</p>
                                        </div>
                                    </div>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="services spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="services__item">
                                    <i class="fa fa-car"></i>
                                    <h6>Free Shipping</h6>
                                    <p>For all oder over $99</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="services__item">
                                    <i class="fa fa-money"></i>
                                    <h6>Money Back Guarantee</h6>
                                    <p>If good have Problems</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="services__item">
                                    <i class="fa fa-support"></i>
                                    <h6>Online Support 24/7</h6>
                                    <p>Dedicated support</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="services__item">
                                    <i class="fa fa-headphones"></i>
                                    <h6>Payment Secure</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="instagram">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-1.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-2.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-3.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-4.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-5.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div class="instagram__item set-bg" data-setbg="assets/img/instagram/insta-6.jpg">
                                    <div class="instagram__text">
                                        <i class="fa fa-instagram"></i>
                                        <a href="#">@ ashion_shop</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-7">
                                <div class="footer__about">
                                    <div class="footer__logo">
                                        <a href="#"><img src="assets/img/logo.png" alt="" /></a>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            cilisis.</p>
                                    <div class="footer__payment">

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-5">
                                <div class="footer__widget">
                                    <h6>Quick links</h6>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Blogs</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4">

                            </div>
                            <div class="col-lg-4 col-md-8 col-sm-8">
                                <div class="footer__newslatter">
                                    <h6>NEWSLETTER</h6>
                                    <form action="#">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit" class="site-btn">Subscribe</button>
                                    </form>
                                    <div class="footer__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="footer__copyright__text">
                                    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Heart</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>


                <div class="search-model">
                    <div class="h-100 d-flex align-items-center justify-content-center">
                        <div class="search-close-switch">+</div>
                        <form class="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeScreen
