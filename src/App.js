import React from 'react';
import './App.css';
import HomeScreen from './FrontEnd/HomeScreen'
function App() {
  return (
    <div>
      <HomeScreen />
      <section id="slider">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                  <li data-target="#slider-carousel" data-slide-to="1"></li>
                  <li data-target="#slider-carousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-sm-6">
                      <h1><span>MIKE'S EMPIRE</span>-SHOP</h1>
                      <h2>Fast Delivery Services</h2>
                      <p>Variety of products at your finger tips, we deliver your order right at your doorstep </p>
                      <button type="button" class="btn btn-default get">Get it now</button>
                    </div>
                    <div class="col-sm-6">
                      <img src="assets/images/home/girl1.jpg" class="girl img-responsive" alt="" />
                      <img src="assets/images/home/pricing.png" class="pricing" alt="" />
                    </div>
                  </div>
                  <div class="item">
                    <div class="col-sm-6">
                      <h1><span>MIKE'S EMPIRE</span>-SHOP</h1>
                      <h2>100% Guaranteed</h2>
                      <p>Variety of products at your finger tips, we deliver your order right at your doorstep  </p>
                      <button type="button" class="btn btn-default get">Get it now</button>
                    </div>
                    <div class="col-sm-6">
                      <img src="assets/images/home/girl2.jpg" class="girl img-responsive" alt="" />
                      <img src="assets/images/home/pricing.png" class="pricing" alt="" />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-sm-6">
                      <h1><span>MIKE'S EMPIRE</span>-SHOP</h1>
                      <h2>Fast Delivery Services</h2>
                      <p>Variety of products at your finger tips, we deliver your order right at your doorstep </p>
                      <button type="button" class="btn btn-default get">Get it now</button>
                    </div>
                    <div class="col-sm-6">
                      <img src="assets/images/home/girl3.jpg" class="girl img-responsive" alt="" />
                      <img src="assets/images/home/pricing.png" class="pricing" alt="" />
                    </div>
                  </div>

                </div>

                <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <h2>Category</h2>
                <div class="panel-group category-products" id="accordian">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                            Sportswear
                          </a>
                      </h4>
                    </div>
                    <div id="sportswear" class="panel-collapse collapse">
                      <div class="panel-body">
                        <ul>
                          <li><a href="#">Nike </a></li>
                          <li><a href="#">Under Armour </a></li>
                          <li><a href="#">Adidas </a></li>
                          <li><a href="#">Puma</a></li>
                          <li><a href="#">ASICS </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                            Mens
                          </a>
                      </h4>
                    </div>
                    <div id="mens" class="panel-collapse collapse">
                      <div class="panel-body">
                        <ul>
                          <li><a href="#">Fendi</a></li>
                          <li><a href="#">Guess</a></li>
                          <li><a href="#">Valentino</a></li>
                          <li><a href="#">Dior</a></li>
                          <li><a href="#">Versace</a></li>
                          <li><a href="#">Armani</a></li>
                          <li><a href="#">Prada</a></li>
                          <li><a href="#">Dolce and Gabbana</a></li>
                          <li><a href="#">Chanel</a></li>
                          <li><a href="#">Gucci</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                            Womens
                          </a>
                      </h4>
                    </div>
                    <div id="womens" class="panel-collapse collapse">
                      <div class="panel-body">
                        <ul>
                          <li><a href="#">Fendi</a></li>
                          <li><a href="#">Guess</a></li>
                          <li><a href="#">Valentino</a></li>
                          <li><a href="#">Dior</a></li>
                          <li><a href="#">Versace</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Kids</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Fashion</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Households</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Interiors</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Clothing</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Bags</a></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a href="#">Shoes</a></h4>
                    </div>
                  </div>
                </div>

                <div class="brands_products">
                  <h2>Brands</h2>
                  <div class="brands-name">
                    <ul class="nav nav-pills nav-stacked">
                      <li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
                      <li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
                      <li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
                      <li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
                      <li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
                      <li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
                      <li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
                    </ul>
                  </div>
                </div>
                <div class="shipping text-center">
                  <img src="assets/images/home/shipping.jpg" alt="" />
                </div>

              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Features Items</h2>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                      <img src="assets/images/home/new.png" class="new" alt="" />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product5.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                      <img src="assets/images/home/sale.png" class="new" alt="" />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="assets/images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              <div class="category-tab">
                <div class="col-sm-12">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                    <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                    <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                    <li><a href="#kids" data-toggle="tab">Kids</a></li>
                    <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade active in" id="tshirt" >
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="blazers" >
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="sunglass" >
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="kids" >
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="poloshirt" >
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="assets/images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommended_items">
                <h2 class="title text-center">recommended items</h2>

                <div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="assets/images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">
                <div class="companyinfo">
                  <h2><span>THE</span>-POST</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="col-sm-3">
                  <div class="video-gallery text-center">
                    <a href="#">
                      <div class="iframe-img">
                        <img src="assets/images/home/iframe1.png" alt="" />
                      </div>
                      <div class="overlay-icon">
                        <i class="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="video-gallery text-center">
                    <a href="#">
                      <div class="iframe-img">
                        <img src="assets/images/home/iframe2.png" alt="" />
                      </div>
                      <div class="overlay-icon">
                        <i class="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="video-gallery text-center">
                    <a href="#">
                      <div class="iframe-img">
                        <img src="assets/images/home/iframe3.png" alt="" />
                      </div>
                      <div class="overlay-icon">
                        <i class="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="video-gallery text-center">
                    <a href="#">
                      <div class="iframe-img">
                        <img src="assets/images/home/iframe4.png" alt="" />
                      </div>
                      <div class="overlay-icon">
                        <i class="fa fa-play-circle-o"></i>
                      </div>
                    </a>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="address">
                  <img src="assets/images/home/map.png" alt="" />
                  <p>505 S Alakahia, East/West Road, PH(Rivers State)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-widget">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">
                <div class="single-widget">
                  <h2>Service</h2>
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="#">Online Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Change Location</a></li>
                    <li><a href="#">FAQ’s</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="single-widget">
                  <h2>Quock Shop</h2>
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="#">T-Shirt</a></li>
                    <li><a href="#">Mens</a></li>
                    <li><a href="#">Womens</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Shoes</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="single-widget">
                  <h2>Policies</h2>
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privecy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Billing System</a></li>
                    <li><a href="#">Ticket System</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="single-widget">
                  <h2>About POST</h2>
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="#">Company Information</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Store Location</a></li>
                    <li><a href="#">Affillate Program</a></li>
                    <li><a href="#">Copyright</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3 col-sm-offset-1">
                <div class="single-widget">
                  <h2>About POST</h2>
                  <form action="#" class="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                    <p>Get the most recent updates from <br />our site and be updated your self...</p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <p class="pull-left">Copyright © 2021 MIKE'S EMPIRE All rights reserved.</p>
              <p class="pull-right">Designed by <span><a target="_blank" href="#">Emmastyler//</a></span></p>
            </div>
          </div>
        </div>

      </footer>

    </div>

  )
}
export default App
