import React from "react";
import { Button, DatePicker } from 'antd';
import Icon from 'react-web-vector-icons';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import reset_password from "../../assets/imgs/page/reset_password.svg";


function Resetpassword() {
    let navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <>
            <div class="mobile-header-active mobile-header-wrapper-style">
                <div class="mobile-header-wrapper-inner">
                    <div class="mobile-header-top">
                        <div class="mobile-header-logo">
                            <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                        </div>
                        <div class="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button class="close-style search-close">
                                <i class="icon-top"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-header-content-area">
                        <div class="mobile-search search-style-3 mobile-header-border">
                            <form action="page-reset-password.html#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit"><i class="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <div class="mobile-menu-wrap mobile-header-border">

                            <nav>
                                <ul class="mobile-menu font-heading">
                                    <li class="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                            <li><a href="index-5.html">Home 5</a></li>
                                            <li><a href="index-6.html">Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="shop-grid-right.html">shop</a>
                                        <ul class="dropdown">
                                            <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                            <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                            <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Single Product</a>
                                                <ul class="dropdown">
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
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Shop Invoice</a>
                                                <ul class="dropdown">
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
                                    <li class="menu-item-has-children">
                                        <a href="page-reset-password.html#">Vendors</a>
                                        <ul class="dropdown">
                                            <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                            <li><a href="vendors-list.html">Vendors List</a></li>
                                            <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                            <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                            <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                            <li><a href="vendor-guide.html">Vendor Guide</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="page-reset-password.html#">Mega menu</a>
                                        <ul class="dropdown">
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Women's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Men's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Technology</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                                                    <li><a href="shop-product-right.html">Tablets</a></li>
                                                    <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                                                    <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="blog-category-fullwidth.html">Blog</a>
                                        <ul class="dropdown">
                                            <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                            <li><a href="blog-category-list.html">Blog Category List</a></li>
                                            <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                            <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                            <li class="menu-item-has-children">
                                                <a href="page-reset-password.html#">Single Product Layout</a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="page-reset-password.html#">Pages</a>
                                        <ul class="dropdown">
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
                                    <li class="menu-item-has-children">
                                        <a href="page-reset-password.html#">Language</a>
                                        <ul class="dropdown">
                                            <li><a href="page-reset-password.html#">English</a></li>
                                            <li><a href="page-reset-password.html#">French</a></li>
                                            <li><a href="page-reset-password.html#">German</a></li>
                                            <li><a href="page-reset-password.html#">Spanish</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div class="mobile-header-info-wrap">
                            <div class="single-mobile-header-info">
                                <a href="page-contact.html"><i class="fi-rs-marker"></i> Our location </a>
                            </div>
                            <div class="single-mobile-header-info">
                                <a href="page-login.html"><i class="fi-rs-user"></i>Log In / Sign Up </a>
                            </div>
                            <div class="single-mobile-header-info">
                                <a href="page-reset-password.html#"><i class="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div class="mobile-social-icon mb-50">
                            <h6 class="mb-15">Follow Us</h6>
                            <a href="page-reset-password.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="page-reset-password.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="page-reset-password.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="page-reset-password.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="page-reset-password.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div class="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

            <main class="main pages">
                <div class="page-header breadcrumb-wrap">
                    <div class="container">
                        <div class="breadcrumb">
                            <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Pages <span></span> My Account
                        </div>
                    </div>
                </div>
                <div class="page-content pt-150 pb-150">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-8 col-md-12 m-auto">
                                <div class="row">
                                    <div class="heading_s1">
                                        <img class="border-radius-15" src={reset_password} alt="" />
                                        <h2 class="mb-15 mt-15">Set new password</h2>
                                        <p class="mb-30">Please create a new password that you don’t use on any other site.</p>
                                    </div>
                                    <div class="col-lg-6 col-md-8">
                                        <div class="login_wrap widget-taber-content background-white">
                                            <div class="padding_eight_all bg-white">
                                                <form method="post">
                                                    <div class="form-group">
                                                        <input type="text" required="" name="email" placeholder="Password *" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" required="" name="email" placeholder="Confirm you password *" />
                                                    </div>
                                                    <div class="form-group">
                                                        <button type="submit" class="btn btn-heading btn-block hover-up" name="login">Reset password</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 pl-50">
                                        <h6 class="mb-15">Password must:</h6>
                                        <p>Be between 9 and 64 characters</p>
                                        <p>Include at least tow of the following:</p>
                                        <ol class="list-insider">
                                            <li>An uppercase character</li>
                                            <li>A lowercase character</li>
                                            <li>A number</li>
                                            <li>A special character</li>
                                        </ol>
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

export default Resetpassword;
