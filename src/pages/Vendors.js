import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import vendor1 from "../assets/imgs/vendor/vendor-1.png";
import vendor7 from "../assets/imgs/vendor/vendor-7.png";
import vendor8 from "../assets/imgs/vendor/vendor-8.png";
import vendor2 from "../assets/imgs/vendor/vendor-2.png";
import vendor3 from "../assets/imgs/vendor/vendor-3.png";
import vendor9 from "../assets/imgs/vendor/vendor-9.png";
import vendor10 from "../assets/imgs/vendor/vendor-10.png";
import vendor4 from "../assets/imgs/vendor/vendor-4.png";
import vendor5 from "../assets/imgs/vendor/vendor-5.png";
import vendor11 from "../assets/imgs/vendor/vendor-11.png";
import vendor12 from "../assets/imgs/vendor/vendor-12.png";
import vendor13 from "../assets/imgs/vendor/vendor-13.png";
import vendor14 from "../assets/imgs/vendor/vendor-14.png";
import vendor15 from "../assets/imgs/vendor/vendor-15.png";
import vendor6 from "../assets/imgs/vendor/vendor-6.png";
import location from "../assets/imgs/theme/icons/icon_location.svg";
import icon_contact from "../assets/imgs/theme/icons/icon_contact.svg";



function Vendors() {
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
                            <form action="vendors-grid.html#">
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
                                                <a href="vendors-grid.html#">Single Product</a>
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
                                                <a href="vendors-grid.html#">Shop Invoice</a>
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
                                        <a href="vendors-grid.html#">Vendors</a>
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
                                        <a href="vendors-grid.html#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="vendors-grid.html#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="vendors-grid.html#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="vendors-grid.html#">Technology</a>
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
                                                <a href="vendors-grid.html#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="vendors-grid.html#">Pages</a>
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
                                        <a href="vendors-grid.html#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="vendors-grid.html#">English</a></li>
                                            <li><a href="vendors-grid.html#">French</a></li>
                                            <li><a href="vendors-grid.html#">German</a></li>
                                            <li><a href="vendors-grid.html#">Spanish</a></li>
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
                                <a href="vendors-grid.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="vendors-grid.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="vendors-grid.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="vendors-grid.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="vendors-grid.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="vendors-grid.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>
         
            <main className="main pages mb-80">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Vendors List
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="archive-header-2 text-center">
                            <h1 className="display-2 mb-50">Vendors List</h1>
                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="sidebar-widget-2 widget_search mb-50">
                                        <div className="search-form">
                                            <form action="vendors-grid.html#">
                                                <input type="text" placeholder="Search vendors (by name or ID)..." />
                                                <button type="submit"><i className="fi-rs-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50">
                            <div className="col-12 col-lg-8 mx-auto">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>We have <strong className="text-brand">780</strong> vendors now</p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps"></i>Show:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span> 50 <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className="sort-by-dropdown">
                                                <ul>
                                                    <li><a className="active" href="vendors-grid.html#">50</a></li>
                                                    <li><a href="vendors-grid.html#">100</a></li>
                                                    <li><a href="vendors-grid.html#">150</a></li>
                                                    <li><a href="vendors-grid.html#">200</a></li>
                                                    <li><a href="vendors-grid.html#">All</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sort-by-cover">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span> Featured <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className="sort-by-dropdown">
                                                <ul>
                                                    <li><a className="active" href="vendors-grid.html#">Mall</a></li>
                                                    <li><a href="vendors-grid.html#">Featured</a></li>
                                                    <li><a href="vendors-grid.html#">Preferred</a></li>
                                                    <li><a href="vendors-grid.html#">Total items</a></li>
                                                    <li><a href="vendors-grid.html#">Avg. Rating</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row vendor-grid">
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor1} alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Mall</span>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Nature Food</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor7} alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">Preferred</span>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2019</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Country Crock</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">18 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor2} alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Mall</span>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Hambger Hel</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">63 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor8} alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Mall</span>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Totino's Pizza</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor3} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Maruchan Ramen</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor9} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">USA Noodle Soup</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor4} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Red Baron Pizza</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor10} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Mrs. Smith's Pie</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor5} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Dove Promises</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor11} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Mrs. Dash</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor6} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Lindt Grocery A1</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor12} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Snyder's-Lance</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor13} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Dreyer's/Edy's</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor14} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Wonderful</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor15} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Almonds</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                                <div className="vendor-wrap mb-40">
                                    <div className="vendor-img-action-wrap">
                                        <div className="vendor-img">
                                            <a href="vendor-details-1.html">
                                                <img className="default-img" src={vendor1} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="vendor-content-wrap">
                                        <div className="d-flex justify-content-between align-items-end mb-30">
                                            <div>
                                                <div className="product-category">
                                                    <span className="text-muted">Since 2012</span>
                                                </div>
                                                <h4 className="mb-5"><a href="vendor-details-1.html">Pistachios</a></h4>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <span className="font-small total-product">380 products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-info mb-30">
                                            <ul className="contact-infor text-muted">
                                                <li><img src={location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                            </ul>
                                        </div>
                                        <a href="vendor-details-1.html" className="btn btn-xs">Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item">
                                        <a className="page-link" href="vendors-grid.html#"><i className="fi-rs-arrow-small-left"></i></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="vendors-grid.html#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="vendors-grid.html#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="vendors-grid.html#">3</a></li>
                                    <li className="page-item"><a className="page-link dot" href="vendors-grid.html#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="vendors-grid.html#">6</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="vendors-grid.html#"><i className="fi-rs-arrow-small-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Vendors;
