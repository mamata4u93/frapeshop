import React from "react";
import { Button, DatePicker, Switch, section } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-web-vector-icons';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/use-theme";
import logo from "../assets/imgs/theme/logo.svg";
import cat from "../assets/imgs/shop/cat_13.png";
import cat_11 from "../assets/imgs/shop/cat_11.png";
import cat_12 from "../assets/imgs/shop/cat_12.png";
import cat_9 from "../assets/imgs/shop/cat_9.png";
import cat_1 from "../assets/imgs/shop/cat_1.png";
import cat_2 from "../assets/imgs/shop/cat_2.png";
import cat_3 from "../assets/imgs/shop/cat_3.png";
import cat_4 from "../assets/imgs/shop/cat_4.png";
import cat_5 from "../assets/imgs/shop/cat_5.png";
import cat_15 from "../assets/imgs/shop/cat_15.png";
import cat_14 from "../assets/imgs/shop/cat_14.png";
import banner_1 from "../assets/imgs/banner/banner_1.png";
import banner_2 from "../assets/imgs/banner/banner_2.png";
import banner_3 from "../assets/imgs/banner/banner_3.png";
import product_1_1 from "../assets/imgs/shop/product_1_1.jpg";
import product_1_2 from "../assets/imgs/shop/product_1_2.jpg";
import product_2_1 from "../assets/imgs/shop/product_2_1.jpg";
import product_2_2 from "../assets/imgs/shop/product_2_2.jpg";
import product_3_1 from "../assets/imgs/shop/product_3_1.jpg";
import product_3_2 from "../assets/imgs/shop/product_3_2.jpg";
import product_4_1 from "../assets/imgs/shop/product_4_1.jpg";
import product_4_2 from "../assets/imgs/shop/product_4_2.jpg";
import product_5_1 from "../assets/imgs/shop/product_5_1.jpg";
import product_5_2 from "../assets/imgs/shop/product_5_2.jpg";
import product_6_1 from "../assets/imgs/shop/product_6_1.jpg";
import product_6_2 from "../assets/imgs/shop/product_6_2.jpg";
import product_7_1 from "../assets/imgs/shop/product_7_1.jpg";
import product_7_2 from "../assets/imgs/shop/product_7_2.jpg";
import product_8_1 from "../assets/imgs/shop/product_8_1.jpg";
import product_8_2 from "../assets/imgs/shop/product_8_2.jpg";

import product9 from "../assets/imgs/shop/product-9-1.jpg";
import product10 from "../assets/imgs/shop/product-9-2.jpg";
import product11 from "../assets/imgs/shop/product-10-1.jpg";
import product12 from "../assets/imgs/shop/product-10-2.jpg";
import product13 from "../assets/imgs/shop/product-12-1.jpg";
import product14 from "../assets/imgs/shop/product-12-2.jpg";
import product15 from "../assets/imgs/shop/product-13-1.jpg";
import product16 from "../assets/imgs/shop/product-13-2.jpg";
import product17 from "../assets/imgs/shop/product-14-1.jpg";
// import product18 from "../assets/imgs/shopproduct-14-2.jpg";


function Home() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>

            <div className="mobile-header-active mobile-header-wrapper-style">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="index.html"><img src={logo} /></a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="index.html#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li className="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                            <li><a href="index-6.html">Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="shop-grid-right.html">shop</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                            <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                            <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Single Product</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                                                    <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                                    <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                                    <li><a href="shop-product-vendor.html">Product – Vendor Infor</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-filter.html">Shop – Filter</a></li>
                                            <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                            <li><a href="shop-cart.html">Shop – Cart</a></li>
                                            <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                            <li><a href="shop-compare.html">Shop – Compare</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Shop Invoice</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                                                    <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                                                    <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                                                    <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                                                    <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                                                    <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="index.html#">Vendors</a>
                                        <ul className="dropdown">
                                            <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                            <li><a href="vendors-list.html">Vendors List</a></li>
                                            <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                            <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                            <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                            <li><a href="vendor-guide.html">Vendor Guide</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="index.html#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Technology</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Tablets</a></li>
                                                    <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                                                    <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="blog-category-fullwidth.html">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                            <li><a href="blog-category-list.html">Blog Category List</a></li>
                                            <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                            <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="index.html#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="index.html#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="page-about.html">About Us</a></li>
                                            <li><a href="page-contact.html">Contact</a></li>
                                            <li><a href="page-account.html">My Account</a></li>
                                            <li><a href="page-login.html">Login</a></li>
                                            <li><a href="page-register.html">Register</a></li>
                                            <li><a href="page-forgot-password.html">Forgot password</a></li>
                                            <li><a href="page-reset-password.html">Reset password</a></li>
                                            <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                                            <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="page-terms.html">Terms of Service</a></li>
                                            <li><a href="page-404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="index.html#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html#">English</a></li>
                                            <li><a href="index.html#">French</a></li>
                                            <li><a href="index.html#">German</a></li>
                                            <li><a href="index.html#">Spanish</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info">
                                <a href="page-contact.html"><i className="fi-rs-marker"></i> Our location </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="page-login.html"><i className="fi-rs-user"></i>Log In / Sign Up </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="index.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="index.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="index.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="index.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="index.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="index.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

            <main className="main">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                                <div className="single-hero-slider single-animation-wrap"
                                    style={{ backgroundImage: `url(assets/imgs/slider/slider_1.png)` }}>
                                    <div className="slider-content">
                                        <h1 className="display-2 mb-40">
                                            Don’t miss amazing<br />
                                            grocery deals
                                        </h1>
                                        <p className="mb-65">Sign up for the daily newsletter</p>
                                        <form className="form-subcriber d-flex">
                                            <input type="email" placeholder="Your emaill address" />
                                            <button className="btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-hero-slider single-animation-wrap"
                                    style={{ backgroundImage: ` url(assets/imgs/slider/slider_2.png)` }}>
                                    <div className="slider-content">
                                        <h1 className="display-2 mb-40">
                                            Fresh Vegetables<br />
                                            Big discount
                                        </h1>
                                        <p className="mb-65">Save up to 50% off on your first order</p>
                                        <form className="form-subcriber d-flex">
                                            <input type="email" placeholder="Your emaill address" />
                                            <button className="btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </div>
                </section>

                <section className="popular-categories section-padding">
                    <div className="container wow animate__animated animate__fadeIn">
                        <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                                <ul className="list-inline nav nav-tabs links">
                                    <li className="list-inline-item nav-item"><a className="nav-link" href="shop-grid-right.html">Cake &
                                        Milk</a></li>
                                    <li className="list-inline-item nav-item"><a className="nav-link" href="shop-grid-right.html">Coffes
                                        & Teas</a></li>
                                    <li className="list-inline-item nav-item"><a className="nav-link active"
                                        href="shop-grid-right.html">Pet Foods</a></li>
                                    <li className="list-inline-item nav-item"><a className="nav-link"
                                        href="shop-grid-right.html">Vegetables</a></li>
                                </ul>
                            </div>
                            <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                                id="carausel-10-columns-arrows"></div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <div className="card-2 bg-9 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Cake & Milk</a></h6>
                                    <span>26 items</span>
                                </div>
                                <div className="card-2 bg-10 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_12} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Oganic Kiwi</a></h6>
                                    <span>28 items</span>
                                </div>
                                <div className="card-2 bg-11 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_11} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Peach</a></h6>
                                    <span>14 items</span>
                                </div>
                                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_9} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Red Apple</a></h6>
                                    <span>54 items</span>
                                </div>
                                <div className="card-2 bg-13 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_3} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Snack</a></h6>
                                    <span>56 items</span>
                                </div>
                                <div className="card-2 bg-14 wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_1} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Vegetables</a></h6>
                                    <span>72 items</span>
                                </div>
                                <div className="card-2 bg-15 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_2} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Strawberry</a></h6>
                                    <span>36 items</span>
                                </div>
                                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_4} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Black plum</a></h6>
                                    <span>123 items</span>
                                </div>
                                <div className="card-2 bg-10 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_5} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Custard apple</a></h6>
                                    <span>34 items</span>
                                </div>
                                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_14} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Coffe & Tea</a></h6>
                                    <span>89 items</span>
                                </div>
                                <div className="card-2 bg-11 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href="shop-grid-right.html"><img src={cat_15} alt="" /></a>
                                    </figure>
                                    <h6><a href="shop-grid-right.html">Headphone</a></h6>
                                    <span>87 items</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                    <img src={banner_1} alt="" />
                                    <div className="banner-text">
                                        <h4>
                                            Everyday Fresh & <br />Clean with Our<br />
                                            Products
                                        </h4>
                                        <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                    <img src={banner_2} alt="" />
                                    <div className="banner-text">
                                        <h4>
                                            Make your Breakfast<br />
                                            Healthy and Easy
                                        </h4>
                                        <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-md-none d-lg-flex">
                                <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                    <img src={banner_3} alt="" />
                                    <div className="banner-text">
                                        <h4>The best Organic <br />Products Online</h4>
                                        <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="section-title style-2 wow animate__animated animate__fadeIn">
                            <h3>Popular Products</h3>
                            <ul className="nav nav-tabs links" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab"
                                        data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one"
                                        aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two"
                                        type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks &
                                        Dairies</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three"
                                        type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes &
                                        Teas</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four"
                                        type="button" role="tab" aria-controls="tab-four" aria-selected="false">Pet
                                        Foods</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five"
                                        type="button" role="tab" aria-controls="tab-five" aria-selected="false">Meats</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six"
                                        type="button" role="tab" aria-controls="tab-six"
                                        aria-selected="false">Vegetables</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven"
                                        type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                            data-wow-delay=".1s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_1_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_1_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                            data-wow-delay=".2s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_2_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_2_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                            data-wow-delay=".3s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_3_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_3_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                            data-wow-delay=".4s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_4_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_4_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                                            data-wow-delay=".5s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_5_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_5_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                                            data-wow-delay=".1s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_6_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_6_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                                            data-wow-delay=".2s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_7_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_7_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                                            data-wow-delay=".3s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product_8_1}
                                                            alt="" />
                                                        <img className="hover-img" src={product_8_2} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                                            data-wow-delay=".4s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product9}
                                                            alt="" />
                                                        <img className="hover-img" src={product10} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                                            data-wow-delay=".5s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product11}
                                                            alt="" />
                                                        <img className="hover-img" src={product12} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product11}
                                                            alt="" />
                                                        <img className="hover-img" src={product12} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product13}
                                                            alt="" />
                                                        <img className="hover-img" src={product14} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product15}
                                                            alt="" />
                                                        <img className="hover-img" src={product16} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src={product17}
                                                            alt="" />
                                                        {/* <img className="hover-img" src={product18} alt="" /> */}
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-15-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-16-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-2-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product_1_1"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="tab-four">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-2-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product_1_1"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-11-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-11-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-12-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-five" role="tabpanel" aria-labelledby="tab-five">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-12-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-13-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-14-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-15-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-16-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-six" role="tabpanel" aria-labelledby="tab-six">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="tab-pane fade" id="tab-seven" role="tabpanel" aria-labelledby="tab-seven">
                                <div className="row product-grid-4">
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, &
                                                    Red Rice</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$28.85</span>
                                                        <span className="old-price">$32.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `80%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Stouffer</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$52.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `85%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">StarKist</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$48.85</span>
                                                        <span className="old-price">$52.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Vegetables</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic
                                                    Buffalo Wings</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$17.85</span>
                                                        <span className="old-price">$19.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="best">-14%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Pet Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly Salted
                                                    Vegetables</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-16-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-16-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek Yogurt</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$54.85</span>
                                                        <span className="old-price">$55.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Meats</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle - 200ml
                                                    - 400g</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$32.85</span>
                                                        <span className="old-price">$33.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">Sale</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Snack</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan Salmon</a>
                                                </h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">NestFood</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$35.85</span>
                                                        <span className="old-price">$37.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Coffes</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets with
                                                    soft paper</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Old
                                                        El Paso</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$23.85</span>
                                                        <span className="old-price">$25.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                        <div className="product-cart-wrap">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html">
                                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                            alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Add To Wishlist" className="action-btn"
                                                        href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                                        className="fi-rs-shuffle"></i></a>
                                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                                                        data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-category">
                                                    <a href="shop-grid-right.html">Cream</a>
                                                </div>
                                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream
                                                    Ketchup</a></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `50%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a
                                                        href="vendor-details-1.html">Tyson</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>$22.85</span>
                                                        <span className="old-price">$24.8</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className="add" href="shop-cart.html"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

               <section className="section-padding pb-5">
                    <div className="container">
                        <div className="section-title wow animate__animated animate__fadeIn">
                            <h3 className="">Daily Best Sells</h3>
                            <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab"
                                        data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one"
                                        aria-selected="true">Featured</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1"
                                        type="button" role="tab" aria-controls="tab-two" aria-selected="false">Popular</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab"
                                        data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three"
                                        aria-selected="false">New added</button>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                                <div className="banner-img style-2">
                                    <div className="banner-text">
                                        <h2 className="mb-100">Bring nature into your home</h2>
                                        <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i
                                            className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="tab-content" id="myTabContent-1">
                                    <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel"
                                        aria-labelledby="tab-one-1">
                                        <div className="carausel-4-columns-cover arrow-center position-relative">
                                            <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                                id="carausel-4-columns-arrows"></div>
                                            <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product_1_1"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa,
                                                            Brown</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-5-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="new">Save 35%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                            Meatballs</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-2-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet and
                                                            womnies</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-3-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="best">Best sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy
                                                            classNameic </a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-4-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly
                                                            Salted</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                                        <div className="carausel-4-columns-cover arrow-center position-relative">
                                            <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                                id="carausel-4-columns-2-arrows"></div>
                                            <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-2">
                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L
                                                            Bottle</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-15-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-15-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="new">Save 35%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Encore Seafoods Stuffed
                                                            Alaskan</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-12-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-12-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish </a>
                                                        </h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-13-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="best">Best sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice</a>
                                                        </h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-14-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Italian-Style Chicken Meatball</a>
                                                        </h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-three-1" role="tabpanel" aria-labelledby="tab-three-1">
                                        <div className="carausel-4-columns-cover arrow-center position-relative">
                                            <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                                id="carausel-4-columns-3-arrows"></div>
                                            <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns-3">
                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-7-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Perdue Simply Smart Organics
                                                            Gluten Free</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-8-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="new">Save 35%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa</a>
                                                        </h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-9-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom</a>
                                                        </h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-13-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-13-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="best">Best sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry
                                                            Juice</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                                <div className="product-cart-wrap">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="shop-product-right.html">
                                                                <img className="default-img" src="assets/imgs/shop/product-14-1.jpg"
                                                                    alt="" />
                                                                <img className="hover-img" src="assets/imgs/shop/product-14-2.jpg"
                                                                    alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Quick view" className="action-btn small hover-up"
                                                                data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                    className="fi-rs-eye"></i></a>
                                                            <a aria-label="Add To Wishlist" className="action-btn small hover-up"
                                                                href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                            <a aria-label="Compare" className="action-btn small hover-up"
                                                                href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                                        </div>
                                                        <h2><a href="shop-product-right.html">Organic Quinoa, Brown, & Red
                                                            Rice</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                        <div className="product-price mt-10">
                                                            <span>$238.85 </span>
                                                            <span className="old-price">$245.8</span>
                                                        </div>
                                                        <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> Sold: 90/120</span>
                                                        </div>
                                                        <a href="shop-cart.html" className="btn w-100 hover-up"><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section> 

             {/* <section className="section-padding pb-5">
                    <div className="container">
                        <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                            <h3 className="">Deals Of The Day</h3>
                            <a className="show-all" href="shop-grid-right.html">
                                All Deals
                                <i className="fi-rs-angle-right"></i>
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="assets/imgs/banner/banner-5.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="deals-countdown-wrap">
                                            <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                        </div>
                                        <div className="deals-content">
                                            <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red
                                                Rice</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href="vendor-details-1.html">NestFood</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$32.85</span>
                                                    <span className="old-price">$33.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add" href="shop-cart.html"><i
                                                        className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="assets/imgs/banner/banner-6.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="deals-countdown-wrap">
                                            <div className="deals-countdown" data-countdown="2026/04/25 00:00:00"></div>
                                        </div>
                                        <div className="deals-content">
                                            <h2><a href="shop-product-right.html">Perdue Simply Smart Organics Gluten Free</a>
                                            </h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a href="vendor-details-1.html">Old El
                                                    Paso</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$24.85</span>
                                                    <span className="old-price">$26.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add" href="shop-cart.html"><i
                                                        className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                                <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="assets/imgs/banner/banner-7.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="deals-countdown-wrap">
                                            <div className="deals-countdown" data-countdown="2027/03/25 00:00:00"></div>
                                        </div>
                                        <div className="deals-content">
                                            <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom and
                                                Caramelized</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style="width: 80%"></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (3.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href="vendor-details-1.html">Progresso</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$12.85</span>
                                                    <span className="old-price">$13.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add" href="shop-cart.html"><i
                                                        className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                                <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img">
                                            <a href="shop-product-right.html">
                                                <img src="assets/imgs/banner/banner-8.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="deals-countdown-wrap">
                                            <div className="deals-countdown" data-countdown="2025/02/25 00:00:00"></div>
                                        </div>
                                        <div className="deals-content">
                                            <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry Juice</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style="width: 80%"></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (3.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a
                                                    href="vendor-details-1.html">Yoplait</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$15.85</span>
                                                    <span className="old-price">$16.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className="add" href="shop-cart.html"><i
                                                        className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section-padding mb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0">
                                <h4 className="section-title style-1 mb-30 animated animated">Top Selling</h4>
                                <div className="product-list-small animated animated">
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-1.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-2.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-3.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s">
                                <h4 className="section-title style-1 mb-30 animated animated">Trending Products</h4>
                                <div className="product-list-small animated animated">
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-4.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Organic Cage-Free Grade A Large Brown Eggs</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-5.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red
                                                    Rice</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-6.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Naturally Flavored Cinnamon Vanilla Light
                                                    Roast Coffee</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s">
                                <h4 className="section-title style-1 mb-30 animated animated">Recently added</h4>
                                <div className="product-list-small animated animated">
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-7.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Pepperidge Farm Farmhouse Hearty White
                                                    Bread</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-8.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Organic Frozen Triple Berry Blend</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-9.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Oroweat Country Buttermilk Bread</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s">
                                <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
                                <div className="product-list-small animated animated">
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-10.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Foster Farms Takeout Crispy classNameic Buffalo
                                                    Wings</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-11.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle
                                                    Corn</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-12.jpg"
                                                alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                                <a href="shop-product-right.html">All Natural Italian-Style Chicken
                                                    Meatballs</a>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: `90%` }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


        </>
    );
}

export default Home;
