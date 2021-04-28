import React from 'react'
import { Link } from 'react-router-dom'

const NewProducts = () => {
    return (
        <div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-3">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-xs-3">
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-3 col-md-4 col-xs-3 mix">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-1.jpg">
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Buttons tweed blazer</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-2.jpg">
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-2.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Flowy striped skirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-3.jpg">
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-3.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Cotton T-Shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-4.jpg">
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-4.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Slim striped pocket shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-5.jpg">
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-5.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Fit micro corduroy shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-6.jpg">
                                    <div className="label sale">Sale</div>
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-6.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Tropical Kimono</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix women men kid accessories cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-7.jpg">
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-7.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Contrasting sunglasses</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-3 mix women men kid accessories cosmetic">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="assets/img/product/product-8.jpg">
                                    <div className="label">Sale</div>
                                    <ul className="product__hover">
                                        <li><Link to="assets/img/product/product-8.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to='/'><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to='/'><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to='/'>Water resistant backpack</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0 <span>$ 59.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default NewProducts
