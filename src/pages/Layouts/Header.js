import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
import icon_compare from "../../assets/imgs/theme/icons/icon_compare.svg";
import icon_heart2 from "../../assets/imgs/theme/icons/icon_heart2.svg";
import icon_cart from "../../assets/imgs/theme/icons/icon_cart.svg";
import icon_user from "../../assets/imgs/theme/icons/icon_user.svg";
import icon_hot from "../../assets/imgs/theme/icons/icon_hot.svg";
import icon_headphone from "../../assets/imgs/theme/icons/icon_headphone.svg";
import product16_1 from "../../assets/imgs/shop/product16_1.jpg";

function Header() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }
    return (
        <>
            <div className="modal fade custom-modal" id="onloadModal" aria-labelledby="onloadModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="deal" style={{ backgroundImage: `url('assets/imgs/theme/logo.svg')` }}>
                                <div className="deal-top">
                                    <h6 className="mb-10 text-brand-2">Deal of the Day</h6>
                                </div>
                                <div className="deal-content detail-info">
                                    <h4 className="product-title"><a href="shop-product-right.html" className="text-heading">Organic fruit for your family's health</a></h4>
                                    <div className="clearfix product-price-cover">
                                        <div className="product-price primary-color float-left">
                                            <span className="current-price text-brand">$38</span>
                                            <span>
                                                <span className="save-price font-md color3 ml-15">26% Off</span>
                                                <span className="old-price font-md ml-15">$52</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="deal-bottom">
                                    <p className="mb-20">Hurry Up! Offer End In:</p>
                                    <div className="deals-countdown pl-5" data-countdown="2025/03/25 00:00:00">
                                        <span className="countdown-section"><span className="countdown-amount hover-up">03</span><span className="countdown-period"> days </span></span><span className="countdown-section"><span className="countdown-amount hover-up">02</span><span className="countdown-period"> hours </span></span><span className="countdown-section"><span className="countdown-amount hover-up">43</span><span className="countdown-period"> mins </span></span><span className="countdown-section"><span className="countdown-amount hover-up">29</span><span className="countdown-period"> sec </span></span>
                                    </div>
                                    <div className="product-detail-rating">
                                        <div className="product-rate-cover text-end">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{ width: "90%" }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (32 rates)</span>
                                        </div>
                                    </div>
                                    <a href="shop-grid-right.html" className="btn hover-up">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade custom-modal" id="quickViewModal" tabindex="-1" aria-labelledby="quickViewModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                    <div className="detail-gallery">
                                        <span className="zoom-icon"><i className="fi-rs-search"></i></span>

                                        <div className="product-image-slider">
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-1.jpg" alt="product image"/>
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-2.jpg" />
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-3.jpg" alt="product image" />
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-4.jpg" alt="product image" />
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-5.jpg" alt="product image" />
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-6.jpg" alt="product image" />
                                            </figure>
                                            <figure className="border-radius-10">
                                                <img src="assets/imgs/shop/product-16-7.jpg" alt="product image" />
                                            </figure>
                                        </div>

                                        <div className="slider-nav-thumbnails">
                                            <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="detail-info pr-30 pl-30">
                                        <span className="stock-status out-stock"> Sale Off </span>
                                        <h3 className="title-detail"><a href="shop-product-right.html" className="text-heading">Seeds of Change Organic Quinoa, Brown</a></h3>
                                        <div className="product-detail-rating">
                                            <div className="product-rate-cover text-end">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: "90%" }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                            </div>
                                        </div>
                                        <div className="clearfix product-price-cover">
                                            <div className="product-price primary-color float-left">
                                                <span className="current-price text-brand">$38</span>
                                                <span>
                                                    <span className="save-price font-md color3 ml-15">26% Off</span>
                                                    <span className="old-price font-md ml-15">$52</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="detail-extralink mb-30">
                                            <div className="detail-qty border radius">
                                                <a href="index.html#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                <span className="qty-val">1</span>
                                                <a href="index.html#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                            </div>
                                            <div className="product-extra-link2">
                                                <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                            </div>
                                        </div>
                                        <div className="font-xs">
                                            <ul>
                                                <li className="mb-5">Vendor: <span className="text-brand">Nest</span></li>
                                                <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2022</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li><a href="https://wp.alithemes.com/html/nest/demo/page-about.htlm">About Us</a></li>
                                        <li><a href="page-account.html">My Account</a></li>
                                        <li><a href="shop-wishlist.html">Wishlist</a></li>
                                        <li><a href="https://wp.alithemes.com/html/nest/demo/shop-order.html">Order Tracking</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block">
                                        <ul>
                                            <li>100% Secure delivery without contacting the courier</li>
                                            <li>Supper Value Deals - Save more with coupons</li>
                                            <li>Trendy 25silver jewelry, save up 35% off today</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                                        <li>
                                            <a className="language-dropdown-active" href="index.html#">English <i className="fi-rs-angle-small-down"></i></a>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-fr.png" alt="" />Français</a>
                                                </li>
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                                                </li>
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="language-dropdown-active" href="index.html#">USD <i className="fi-rs-angle-small-down"></i></a>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</a>
                                                </li>
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</a>
                                                </li>
                                                <li>
                                                    <a href="index.html#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <form action="index.html#">
                                        <select className="select-active">
                                            <option>All Categories</option>
                                            <option>Milks and Dairies</option>
                                            <option>Wines & Alcohol</option>
                                            <option>Clothing & Beauty</option>
                                            <option>Pet Foods & Toy</option>
                                            <option>Fast food</option>
                                            <option>Baking material</option>
                                            <option>Vegetables</option>
                                            <option>Fresh Seafood</option>
                                            <option>Noodles & Rice</option>
                                            <option>Ice cream</option>
                                        </select>
                                        <input type="text" placeholder="Search for items..." />
                                    </form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="search-location">
                                            <form action="index.html#">
                                                <select className="select-active">
                                                    <option>Your Location</option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizona</option>
                                                    <option>Delaware</option>
                                                    <option>Florida</option>
                                                    <option>Georgia</option>
                                                    <option>Hawaii</option>
                                                    <option>Indiana</option>
                                                    <option>Maryland</option>
                                                    <option>Nevada</option>
                                                    <option>New Jersey</option>
                                                    <option>New Mexico</option>
                                                    <option>New York</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="shop-compare.html">
                                                <img className="svgInject" alt="Nest" src={icon_compare} />
                                                <span className="pro-count blue">3</span>
                                            </a>
                                            <a href="shop-compare.html"><span className="lable ml-0">Compare</span></a>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="shop-wishlist.html">
                                                <img className="svgInject" alt="Nest" src={icon_heart2} />
                                                <span className="pro-count blue">6</span>
                                            </a>
                                            <a href="shop-wishlist.html"><span className="lable">Wishlist</span></a>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a className="mini-cart-icon" href="shop-cart.html">
                                                <img alt="Nest" src={icon_cart} />
                                                <span className="pro-count blue">2</span>
                                            </a>
                                            <a href="shop-cart.html"><span className="lable">Cart</span></a>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="shop-product-right.html">Daisy Casual Bag</a></h4>
                                                            <h4><span>1 × </span>$800.00</h4>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="index.html#"><i className="fi-rs-cross-small"></i></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-2.jpg" /></a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="shop-product-right.html">Corduroy Shirts</a></h4>
                                                            <h4><span>1 × </span>$3200.00</h4>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="index.html#"><i className="fi-rs-cross-small"></i></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>Total <span>$4000.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-button">
                                                        <a href="shop-cart.html" className="outline">View cart</a>
                                                        <a href="shop-checkout.html">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a href="page-account.html">
                                                <img className="svgInject" alt="Nest" src={icon_user}/>
                                            </a>
                                            <a href="page-account.html"><span className="lable ml-0">Account</span></a>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <a href="page-account.html"><i className="fi fi-rs-user mr-10"></i>My Account</a>
                                                    </li>
                                                    <li>
                                                        <a href="page-account.html"><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                                                    </li>
                                                    <li>
                                                        <a href="page-account.html"><i className="fi fi-rs-label mr-10"></i>My Voucher</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-wishlist.html"><i className="fi fi-rs-heart mr-10"></i>My Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="page-account.html"><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                                    </li>
                                                    <li>
                                                        <a href="page-login.html"><i className="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active" href="index.html#">
                                        <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>
                                    <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Milks and Dairies</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Clothing & beauty</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods & Toy</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-6.svg" alt="" />Wines & Drinks</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-7.svg" alt="" />Fresh Seafood</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-8.svg" alt="" />Fast food</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-9.svg" alt="" />Vegetables</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-10.svg" alt="" />Bread and Juice</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more_slide_open" style={{ display: "none" }}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />Clothing & beauty</a>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />Wines & Drinks</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show more...</span></div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>
                                        <ul>
                                            <li className="hot-deals"><img src={icon_hot} /><a href="shop-grid-right.html">Deals</a></li>
                                            <li>
                                                <a className="active" href="index.html">Home <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                    <li><a href="index-3.html">Home 3</a></li>
                                                    <li><a href="index-4.html">Home 4</a></li>
                                                    <li><a href="index-5.html">Home 5</a></li>
                                                    <li><a href="index-6.html">Home 6</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="page-about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html">Shop <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                                                    <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                                                    <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                                                    <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                                                    <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                                                    <li>
                                                        <a href="index.html#">Single Product <i className="fi-rs-angle-right"></i></a>
                                                        <ul className="level-menu">
                                                            <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                                                            <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                                                            <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                                                            <li><a href="shop-product-vendor.html">Product – Vendor Info</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shop-filter.html">Shop – Filter</a></li>
                                                    <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                                                    <li><a href="shop-cart.html">Shop – Cart</a></li>
                                                    <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                                                    <li><a href="shop-compare.html">Shop – Compare</a></li>
                                                    <li>
                                                        <a href="index.html#">Shop Invoice<i className="fi-rs-angle-right"></i></a>
                                                        <ul className="level-menu">
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
                                            <li>
                                                <a href="index.html#">Vendors <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="vendors-grid.html">Vendors Grid</a></li>
                                                    <li><a href="vendors-list.html">Vendors List</a></li>
                                                    <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                                                    <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                                                    <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                                    <li><a href="vendor-guide.html">Vendor Guide</a></li>
                                                </ul>
                                            </li>
                                            <li className="position-static">
                                                <a href="index.html#">Mega menu <i className="fi-rs-angle-down"></i></a>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="index.html#">Fruit & Vegetables</a>
                                                        <ul>
                                                            <li><a href="shop-product-right.html">Meat & Poultry</a></li>
                                                            <li><a href="shop-product-right.html">Fresh Vegetables</a></li>
                                                            <li><a href="shop-product-right.html">Herbs & Seasonings</a></li>
                                                            <li><a href="shop-product-right.html">Cuts & Sprouts</a></li>
                                                            <li><a href="shop-product-right.html">Exotic Fruits & Veggies</a></li>
                                                            <li><a href="shop-product-right.html">Packaged Produce</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="index.html#">Breakfast & Dairy</a>
                                                        <ul>
                                                            <li><a href="shop-product-right.html">Milk & Flavoured Milk</a></li>
                                                            <li><a href="shop-product-right.html">Butter and Margarine</a></li>
                                                            <li><a href="shop-product-right.html">Eggs Substitutes</a></li>
                                                            <li><a href="shop-product-right.html">Marmalades</a></li>
                                                            <li><a href="shop-product-right.html">Sour Cream</a></li>
                                                            <li><a href="shop-product-right.html">Cheese</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="index.html#">Meat & Seafood</a>
                                                        <ul>
                                                            <li><a href="shop-product-right.html">Breakfast Sausage</a></li>
                                                            <li><a href="shop-product-right.html">Dinner Sausage</a></li>
                                                            <li><a href="shop-product-right.html">Chicken</a></li>
                                                            <li><a href="shop-product-right.html">Sliced Deli Meat</a></li>
                                                            <li><a href="shop-product-right.html">Wild Caught Fillets</a></li>
                                                            <li><a href="shop-product-right.html">Crab and Shellfish</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="shop-product-right.html"><img src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="shop-product-right.html">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-category-grid.html">Blog <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                                                    <li><a href="blog-category-list.html">Blog Category List</a></li>
                                                    <li><a href="blog-category-big.html">Blog Category Big</a></li>
                                                    <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                                                    <li>
                                                        <a href="index.html#">Single Post <i className="fi-rs-angle-right"></i></a>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                            <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                            <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index.html#">Pages <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
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
                                            <li>
                                                <a href="page-contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src={icon_headphone} alt="hotline" />
                                <p>1900 - 888<span>24/7 Support Center</span></p>
                            </div>
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href="shop-wishlist.html">
                                            <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                                            <span className="pro-count white">4</span>
                                        </a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="index.html#">
                                            <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                                            <span className="pro-count white">2</span>
                                        </a>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href="shop-product-right.html">Plain Striola Shirts</a></h4>
                                                        <h3><span>1 × </span>$800.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="index.html#"><i className="fi-rs-cross-small"></i></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                                                        <h3><span>1 × </span>$3500.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="index.html#"><i className="fi-rs-cross-small"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>$383.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <a href="shop-cart.html">View cart</a>
                                                    <a href="shop-checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;