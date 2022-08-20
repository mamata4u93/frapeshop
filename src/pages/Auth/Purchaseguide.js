import React from "react";
import { Button, DatePicker } from 'antd';
import Icon from 'react-web-vector-icons';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import guide1 from "../../assets/imgs/page/guide-1.png";
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


function Purchaseguide() {
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
                            <form action="page-purchase-guide.html#">
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
                                                <a href="page-purchase-guide.html#">Single Product</a>
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
                                                <a href="page-purchase-guide.html#">Shop Invoice</a>
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
                                        <a href="page-purchase-guide.html#">Vendors</a>
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
                                        <a href="page-purchase-guide.html#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="page-purchase-guide.html#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="page-purchase-guide.html#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="page-purchase-guide.html#">Technology</a>
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
                                                <a href="page-purchase-guide.html#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="page-purchase-guide.html#">Pages</a>
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
                                        <a href="page-purchase-guide.html#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="page-purchase-guide.html#">English</a></li>
                                            <li><a href="page-purchase-guide.html#">French</a></li>
                                            <li><a href="page-purchase-guide.html#">German</a></li>
                                            <li><a href="page-purchase-guide.html#">Spanish</a></li>
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
                                <a href="page-purchase-guide.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="page-purchase-guide.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="page-purchase-guide.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="page-purchase-guide.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="page-purchase-guide.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="page-purchase-guide.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
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
                            <span></span> Pages <span></span> Purchase Guide
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                            <div className="single-header style-2">
                                                <h2>Purchase Guide</h2>
                                                <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                                                    <span className="post-by">By <a href="page-purchase-guide.html#">Jonh</a></span>
                                                    <span className="post-on has-dot">9 April 2020</span>
                                                    <span className="time-reading has-dot">8 mins read</span>
                                                    <span className="hit-count has-dot">29k Views</span>
                                                </div>
                                            </div>
                                            <figure className="border-radius-15 mb-30">
                                                <img className="border-radius-15" src={guide1} alt="" />
                                            </figure>
                                            <div className="single-content mb-50">
                                                <h3>1. Account Registering</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi dolores neque omnis ipsa? Quia, nam voluptas! Aut, magnam molestias:</p>
                                                <ul className="mb-30">
                                                    <li>Name (required)</li>
                                                    <li>Age (required)</li>
                                                    <li>Date of birth (required)</li>
                                                    <li>Passport/ ID no. (required)</li>
                                                    <li>Current career (required)</li>
                                                    <li>Mobile phone numbers (required)</li>
                                                    <li>Email address (required)</li>
                                                    <li>Hobbies &amp; interests (optional)</li>
                                                    <li>Social profiles (optional)</li>
                                                </ul>
                                                <h3>2. Select Product</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia necessitatibus repellat placeat aut enim recusandae assumenda adipisci quisquam, deserunt iure veritatis cupiditate modi aspernatur accusantium, mollitia doloribus. Velit, iste.</p>
                                                <h3>3. Confirm Order Content</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
                                                <h3>4.Transaction Completed</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt nam aut magnam libero aspernatur eaque praesentium? Tempore labore quis neque? Magni.</p>
                                                <h3>5. Accepted Credit Cards</h3>
                                                <ul>
                                                    <li>Visa</li>
                                                    <li>Mastercards</li>
                                                    <li>American Express</li>
                                                    <li>Discover</li>
                                                </ul>
                                                <span>*Taxes are calculated by your local bank and location.</span>
                                                <h3 className="mt-30">6. Download and Setup</h3>
                                                <ul>
                                                    <li>Updated content on a regular basis</li>
                                                    <li>Secure &amp; hassle-free payment</li>
                                                    <li>1-click checkout</li>
                                                    <li>Easy access &amp; smart user dashboard</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                        <div className="widget-area">
                                            <div className="sidebar-widget-2 widget_search mb-50">
                                                <div className="search-form">
                                                    <form action="page-purchase-guide.html#">
                                                        <input type="text" placeholder="Search…" />
                                                        <button type="submit"><i className="fi-rs-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="sidebar-widget widget-category-2 mb-30">
                                                <h5 className="section-title style-1 mb-30">Category</h5>
                                                <ul>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src={category1} alt="" />Milks & Dairies</a><span className="count">30</span>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src={category2} alt="" />Clothing</a><span className="count">35</span>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src={category3} alt="" />Pet Foods </a><span className="count">42</span>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src={category4} alt="" />Baking material</a><span className="count">68</span>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src={category5} alt="" />Fresh Fruit</a><span className="count">87</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                                <h5 className="section-title style-1 mb-30">Trending Now</h5>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src={thumbnail2} alt="#" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h5><a href="https://wp.alithemes.com/html/nest/demo/shop-product-detail.html">Chen Cardigan</a></h5>
                                                        <p className="price mb-0 mt-5">$99.50</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{ width: `90%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src={thumbnail3} alt="#" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="https://wp.alithemes.com/html/nest/demo/shop-product-detail.html">Chen Sweater</a></h6>
                                                        <p className="price mb-0 mt-5">$89.50</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{ width: `80%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src={thumbnail4} alt="#" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="https://wp.alithemes.com/html/nest/demo/shop-product-detail.html">Colorful Jacket</a></h6>
                                                        <p className="price mb-0 mt-5">$25</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{ width: `60%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post clearfix">
                                                    <div className="image">
                                                        <img src={thumbnail6} alt="#" />
                                                    </div>
                                                    <div className="content pt-10">
                                                        <h6><a href="https://wp.alithemes.com/html/nest/demo/shop-product-detail.html">Lorem, ipsum</a></h6>
                                                        <p className="price mb-0 mt-5">$25</p>
                                                        <div className="product-rate">
                                                            <div className="product-rating" style={{ width: `60%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="banner-img wow fadeIn mb-40 animated d-lg-block d-none">
                                                <img src={banner11} alt="" />
                                                <div className="banner-text">
                                                    <span>Oganic</span>
                                                    <h4>
                                                        Save 17% <br />
                                                        on <span className="text-brand">Oganic</span><br />
                                                        Juice
                                                    </h4>
                                                </div>
                                            </div>
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

export default Purchaseguide;
