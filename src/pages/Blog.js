import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import category1 from "../assets/imgs/theme/icons/category-1.svg";
import blog1 from "../assets/imgs/blog/blog-1.png";
import blog2 from "../assets/imgs/blog/blog-2.png";
import blog3 from "../assets/imgs/blog/blog-3.png";
import blog4 from "../assets/imgs/blog/blog-4.png";
import blog5 from "../assets/imgs/blog/blog-5.png";
import blog6 from "../assets/imgs/blog/blog-6.png";
import blog7 from "../assets/imgs/blog/blog-7.png";
import blog8 from "../assets/imgs/blog/blog-8.png";
import blog9 from "../assets/imgs/blog/blog-9.png";
import blog10 from "../assets/imgs/blog/blog-10.png";
import blog12 from "../assets/imgs/blog/blog-12.png";
import blog13 from "../assets/imgs/blog/blog-13.png";
import blog14 from "../assets/imgs/blog/blog-14.png";
import blog15 from "../assets/imgs/blog/blog-15.png";
import category2 from "../assets/imgs/theme/icons/category-2.svg";
import category3 from "../assets/imgs/theme/icons/category-3.svg";
import category4 from "../assets/imgs/theme/icons/category-4.svg";
import category5 from "../assets/imgs/theme/icons/category-5.svg";
import thumbnail2 from "../assets/imgs/shop/thumbnail-3.jpg";
import thumbnail3 from "../assets/imgs/shop/thumbnail-4.jpg";
import thumbnail4 from "../assets/imgs/shop/thumbnail-5.jpg";
import thumbnail6 from "../assets/imgs/shop/thumbnail-6.jpg";
import thumbnail from "../assets/imgs/shop/thumbnail-1.jpg";
import thumbnail1 from "../assets/imgs/shop/thumbnail-2.jpg";
import banner11 from "../assets/imgs/banner/banner-11.png";


function Blog() {
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
                            <form action="blog-category-grid.html#">
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
                                                <a href="blog-category-grid.html#">Single Product</a>
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
                                                <a href="blog-category-grid.html#">Shop Invoice</a>
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
                                        <a href="blog-category-grid.html#">Vendors</a>
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
                                        <a href="blog-category-grid.html#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="blog-category-grid.html#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="blog-category-grid.html#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="blog-category-grid.html#">Technology</a>
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
                                                <a href="blog-category-grid.html#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="blog-category-grid.html#">Pages</a>
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
                                        <a href="blog-category-grid.html#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="blog-category-grid.html#">English</a></li>
                                            <li><a href="blog-category-grid.html#">French</a></li>
                                            <li><a href="blog-category-grid.html#">German</a></li>
                                            <li><a href="blog-category-grid.html#">Spanish</a></li>
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
                                <a href="blog-category-grid.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="blog-category-grid.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="blog-category-grid.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="blog-category-grid.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="blog-category-grid.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="blog-category-grid.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div className="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

            <main className="main">
                <div className="page-header mt-30 mb-75">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Blog & News</h1>
                                    <div className="breadcrumb">
                                        <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                                        <span></span> Blog & News
                                    </div>
                                </div>
                                <div className="col-xl-9 text-end d-none d-xl-block">
                                    <ul className="tags-list">
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Shopping</a>
                                        </li>
                                        <li className="hover-up active">
                                            <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Recips</a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Kitchen</a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>News</a>
                                        </li>
                                        <li className="hover-up mr-0">
                                            <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Food</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shop-product-fillter mb-50 pr-30">
                                    <div className="totall-product">
                                        <h2>
                                            <img className="w-36px mr-10" src={category1} alt="" />
                                            Recips Articles
                                        </h2>
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
                                                    <li><a className="active" href="blog-category-grid.html#">50</a></li>
                                                    <li><a href="blog-category-grid.html#">100</a></li>
                                                    <li><a href="blog-category-grid.html#">150</a></li>
                                                    <li><a href="blog-category-grid.html#">200</a></li>
                                                    <li><a href="blog-category-grid.html#">All</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sort-by-cover">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps-sort"></i>Sort:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span>Featured <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className="sort-by-dropdown">
                                                <ul>
                                                    <li><a className="active" href="blog-category-grid.html#">Featured</a></li>
                                                    <li><a href="blog-category-grid.html#">Newest</a></li>
                                                    <li><a href="blog-category-grid.html#">Most comments</a></li>
                                                    <li><a href="blog-category-grid.html#">Release Date</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loop-grid pr-30">
                                    <div className="row">
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog1} alt="" />
                                                </a>
                                                <div className="entry-meta">
                                                    <a className="entry-meta meta-2" href="blog-category-grid.html"><i className="fi-rs-heart"></i></a>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Side Dish</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The Intermediate Guide to Healthy Food</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog2} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Soups and Stews</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Summer Quinoa Salad Jars with Lemon Dill</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog3} alt="" />
                                                </a>
                                                <div className="entry-meta">
                                                    <a className="entry-meta meta-2" href="blog-category-grid.html"><i className="fi-rs-link"></i></a>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Salad</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Caprese Chicken with Smashed Potatoes</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog4} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Dessert</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Harissa Chickpeas with Whipped Feta</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog5} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Breakfast</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Almond Butter Chocolate Chip Zucchini Bars</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog6} alt="" />
                                                </a>
                                                <div className="entry-meta">
                                                    <a className="entry-meta meta-2" href="blog-category-grid.html"><i className="fi-rs-picture"></i></a>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Vegan</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Smoky Beans & Greens Tacos with Aji Verde</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog7} alt="" />
                                                </a>
                                                <div className="entry-meta">
                                                    <a className="entry-meta meta-2" href="blog-category-grid.html"><i className="fi-rs-play-alt"></i></a>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Gluten Free</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Sticky Ginger Rice Bowls with Pickled Veg</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog8} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Side Dish</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Creamy Garlic Sun-Dried Tomato Pasta</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog9} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Dairy Free</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The Absolute Easiest Spinach and Pizza</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog10} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Salad</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Sticky Ginger Rice Bowls with Pickled</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog1} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Soups</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The Best Soft Chocolate Chip Cookies</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog12} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Vegetarian</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">Baked Mozzarella Chicken Rolls</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog13} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html"> Dessert </a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The Best Avocado Egg Salad</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog14} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Vegetarian</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The litigants on the screen are not actors</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                                            <div className="post-thumb">
                                                <a href="blog-post-right.html">
                                                    <img className="border-radius-15" src={blog15} alt="" />
                                                </a>
                                            </div>
                                            <div className="entry-content-2">
                                                <h6 className="mb-10 font-sm"><a className="entry-meta text-muted" href="blog-category-grid.html">Vegetarian</a></h6>
                                                <h4 className="post-title mb-15">
                                                    <a href="blog-post-right.html">The litigants on the screen are not actors</a>
                                                </h4>
                                                <div className="entry-meta font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on mr-10">25 April 2022</span>
                                                        <span className="hit-count has-dot mr-10">126k Views</span>
                                                        <span className="hit-count has-dot">4 mins read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <a className="page-link" href="blog-category-grid.html#"><i className="fi-rs-arrow-small-left"></i></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="blog-category-grid.html#">1</a></li>
                                            <li className="page-item active"><a className="page-link" href="blog-category-grid.html#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="blog-category-grid.html#">3</a></li>
                                            <li className="page-item"><a className="page-link dot" href="blog-category-grid.html#">...</a></li>
                                            <li className="page-item"><a className="page-link" href="blog-category-grid.html#">6</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="blog-category-grid.html#"><i className="fi-rs-arrow-small-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <div className="widget-area">
                                    <div className="sidebar-widget-2 widget_search mb-50">
                                        <div className="search-form">
                                            <form action="blog-category-grid.html#">
                                                <input type="text" placeholder="Search…" />
                                                <button type="submit"><i className="fi-rs-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget widget-category-2 mb-50">
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

                                    <div className="sidebar-widget product-sidebar mb-50 p-30 bg-grey border-radius-10">
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
                                    <div className="sidebar-widget widget_instagram mb-50">
                                        <h5 className="section-title style-1 mb-30">Gallery</h5>
                                        <div className="instagram-gellay">
                                            <ul className="insta-feed">
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail} alt="" /></a>
                                                </li>
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail1} alt="" /></a>
                                                </li>
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail2} alt="" /></a>
                                                </li>
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail3} alt="" /></a>
                                                </li>
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail4} alt="" /></a>
                                                </li>
                                                <li>
                                                    <a href="blog-category-grid.html#"><img className="border-radius-5" src={thumbnail6}  alt="" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget widget-tags mb-50 pb-10">
                                        <h5 className="section-title style-1 mb-30">Popular Tags</h5>
                                        <ul className="tags-list">
                                            <li className="hover-up">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Cabbage</a>
                                            </li>
                                            <li className="hover-up">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Broccoli</a>
                                            </li>
                                            <li className="hover-up">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Smoothie</a>
                                            </li>
                                            <li className="hover-up">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Fruit</a>
                                            </li>
                                            <li className="hover-up mr-0">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Salad</a>
                                            </li>
                                            <li className="hover-up mr-0">
                                                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10"></i>Appetizer</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="banner-img wow fadeIn mb-50 animated d-lg-block d-none">
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
            </main>
        </>
    );
}

export default Blog;
