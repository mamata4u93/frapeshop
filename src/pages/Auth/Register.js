import React from "react";
import { Button, DatePicker } from 'antd';
import Icon from 'react-web-vector-icons';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import loginimg from "../../assets/imgs/page/login-1.png";


function Register() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
          <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-top">
                <div className="mobile-header-logo">
                    <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
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
                    <form action="page-register.html#">
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
                                        <a href="page-register.html#">Single Product</a>
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
                                        <a href="page-register.html#">Shop Invoice</a>
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
                                <a href="page-register.html#">Vendors</a>
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
                                <a href="page-register.html#">Mega menu</a>
                                <ul className="dropdown">
                                    <li className="menu-item-has-children">
                                        <a href="page-register.html#">Women's Fashion</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-product-right.html">Dresses</a></li>
                                            <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                            <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                            <li><a href="shop-product-right.html">Women's Sets</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="page-register.html#">Men's Fashion</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-product-right.html">Jackets</a></li>
                                            <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                            <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="page-register.html#">Technology</a>
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
                                        <a href="page-register.html#">Single Product Layout</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="page-register.html#">Pages</a>
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
                                <a href="page-register.html#">Language</a>
                                <ul className="dropdown">
                                    <li><a href="page-register.html#">English</a></li>
                                    <li><a href="page-register.html#">French</a></li>
                                    <li><a href="page-register.html#">German</a></li>
                                    <li><a href="page-register.html#">Spanish</a></li>
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
                        <a href="page-register.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                    </div>
                </div>
                <div className="mobile-social-icon mb-50">
                    <h6 className="mb-15">Follow Us</h6>
                    <a href="page-register.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                    <a href="page-register.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                    <a href="page-register.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                    <a href="page-register.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                    <a href="page-register.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                </div>
                <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
            </div>
        </div>
    </div>
 
    <main className="main pages">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span> My Account
                </div>
            </div>
        </div>
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Create an Account</h1>
                                            <p className="mb-30">Already have an account? <a href="page-login.html">Login</a></p>
                                        </div>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="text" required="" name="username" placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" required="" name="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Confirm password" />
                                            </div>
                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <input type="text" required="" name="email" placeholder="Security code *" />
                                                </div>
                                                <span className="security-code">
                                                    <b className="text-new">8</b>
                                                    <b className="text-hot">6</b>
                                                    <b className="text-sale">7</b>
                                                    <b className="text-best">5</b>
                                                </span>
                                            </div>
                                            <div className="payment_option mb-50">
                                                <div className="custome-radio">
                                                    <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios3" checked="" />
                                                    <label className="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                                </div>
                                                <div className="custome-radio">
                                                    <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios4" checked="" />
                                                    <label className="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                                </div>
                                            </div>
                                            <div className="login_footer form-group mb-50">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" />
                                                        <label className="form-check-label" for="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                                    </div>
                                                </div>
                                                <a href="page-privacy-policy.html"><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
                                            </div>
                                            <div className="form-group mb-30">
                                                <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                                            </div>
                                            <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pr-30 d-none d-lg-block">
                                <div className="card-login mt-115">
                                    <a href="page-register.html#" className="social-login facebook-login">
                                        <img src="assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                                        <span>Continue with Facebook</span>
                                    </a>
                                    <a href="page-register.html#" className="social-login google-login">
                                        <img src="assets/imgs/theme/icons/logo-google.svg" alt="" />
                                        <span>Continue with Google</span>
                                    </a>
                                    <a href="page-register.html#" className="social-login apple-login">
                                        <img src="assets/imgs/theme/icons/logo-apple.svg" alt="" />
                                        <span>Continue with Apple</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
    );
}

export default Register;
