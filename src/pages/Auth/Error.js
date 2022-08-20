import React from "react";
import { Button, DatePicker } from 'antd';
import Icon from 'react-web-vector-icons';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import Errors from "../../assets/imgs/page/page-404.png";
import category1 from "../../assets/imgs/theme/icons/category-1.svg";
import category2 from "../../assets/imgs/theme/icons/category-2.svg";
import category3 from "../../assets/imgs/theme/icons/category-3.svg";
import category4 from "../../assets/imgs/theme/icons/category-4.svg";
import category5 from "../../assets/imgs/theme/icons/category-5.svg";
import thumbnail2 from "../../assets/imgs/shop/thumbnail-3.jpg";
import thumbnail3 from "../../assets/imgs/shop/thumbnail-4.jpg";
import thumbnail4 from "../../assets/imgs/shop/thumbnail-5.jpg";
import thumbnail6 from "../../assets/imgs/shop/thumbnail-6.jpg";
import banner11 from "../../assets/imgs/banner/banner-11.png";


function Error() {
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
                    <form action="page-404.html#">
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
                                        <a href="page-404.html#">Single Product</a>
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
                                        <a href="page-404.html#">Shop Invoice</a>
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
                                <a href="page-404.html#">Vendors</a>
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
                                <a href="page-404.html#">Mega menu</a>
                                <ul className="dropdown">
                                    <li className="menu-item-has-children">
                                        <a href="page-404.html#">Women's Fashion</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-product-right.html">Dresses</a></li>
                                            <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                            <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                            <li><a href="shop-product-right.html">Women's Sets</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="page-404.html#">Men's Fashion</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-product-right.html">Jackets</a></li>
                                            <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                            <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="page-404.html#">Technology</a>
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
                                        <a href="page-404.html#">Single Product Layout</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="page-404.html#">Pages</a>
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
                                <a href="page-404.html#">Language</a>
                                <ul className="dropdown">
                                    <li><a href="page-404.html#">English</a></li>
                                    <li><a href="page-404.html#">French</a></li>
                                    <li><a href="page-404.html#">German</a></li>
                                    <li><a href="page-404.html#">Spanish</a></li>
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
                        <a href="page-404.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                    </div>
                </div>
                <div className="mobile-social-icon mb-50">
                    <h6 className="mb-15">Follow Us</h6>
                    <a href="page-404.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                    <a href="page-404.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                    <a href="page-404.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                    <a href="page-404.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                    <a href="page-404.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                </div>
                <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
            </div>
        </div>
    </div>
    
    <main className="main page-404">
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                        <p className="mb-20"><img src={Errors} alt="" className="hover-up" /></p>
                        <h1 className="display-2 mb-30">Page Not Found</h1>
                        <p className="font-lg text-grey-700 mb-30">
                            The link you clicked may be broken or the page may have been removed.<br />
                            visit the <a href="index.html"> <span> Homepage</span></a> or <a href="page-contact.html"><span>Contact us</span></a> about the problem
                        </p>
                        <div className="search-form">
                            <form action="page-404.html#">
                                <input type="text" placeholder="Search…" />
                                <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="index.html"><i className="fi-rs-home mr-5"></i> Back To Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

        </>
    );
}

export default Error;
