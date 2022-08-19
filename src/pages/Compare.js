import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import product_1_1 from "../assets/imgs/shop/product_1_1.jpg";
import product_2_1 from "../assets/imgs/shop/product_2_1.jpg";
import product_3_1 from "../assets/imgs/shop/product_3_1.jpg";

function Compare() {
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
                            <form action="shop-compare.html#">
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
                                                <a href="shop-compare.html#">Single Product</a>
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
                                                <a href="shop-compare.html#">Shop Invoice</a>
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
                                        <a href="shop-compare.html#">Vendors</a>
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
                                        <a href="shop-compare.html#">Mega menu</a>
                                        <ul class="dropdown">
                                            <li class="menu-item-has-children">
                                                <a href="shop-compare.html#">Women's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="shop-compare.html#">Men's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="shop-compare.html#">Technology</a>
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
                                                <a href="shop-compare.html#">Single Product Layout</a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="shop-compare.html#">Pages</a>
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
                                        <a href="shop-compare.html#">Language</a>
                                        <ul class="dropdown">
                                            <li><a href="shop-compare.html#">English</a></li>
                                            <li><a href="shop-compare.html#">French</a></li>
                                            <li><a href="shop-compare.html#">German</a></li>
                                            <li><a href="shop-compare.html#">Spanish</a></li>
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
                                <a href="shop-compare.html#"><i class="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div class="mobile-social-icon mb-50">
                            <h6 class="mb-15">Follow Us</h6>
                            <a href="shop-compare.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="shop-compare.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="shop-compare.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="shop-compare.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="shop-compare.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div class="site-copyright">Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

            <main class="main">
                <div class="page-header breadcrumb-wrap">
                    <div class="container">
                        <div class="breadcrumb">
                            <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Shop <span></span> Compare
                        </div>
                    </div>
                </div>
                <div class="container mb-80 mt-50">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 m-auto">
                            <h1 class="heading-2 mb-10">Products Compare</h1>
                            <h6 class="text-body mb-40">There are <span class="text-brand">3</span> products to compare</h6>
                            <div class="table-responsive">
                                <table class="table text-center table-compare">
                                    <tbody>
                                        <tr class="pr_image">
                                            <td class="text-muted font-sm fw-600 font-heading mw-200">Preview</td>
                                            <td class="row_img"><img src={product_2_1} alt="compare-img" /></td>
                                            <td class="row_img"><img src={product_1_1} alt="compare-img" /></td>
                                            <td class="row_img"><img src={product_3_1} alt="compare-img" /></td>
                                        </tr>
                                        <tr class="pr_title">
                                            <td class="text-muted font-sm fw-600 font-heading">Name</td>
                                            <td class="product_name">
                                                <h6><a href="shop-product-full.html" class="text-heading">J.Crew Mercantile Women's Short</a></h6>
                                            </td>
                                            <td class="product_name">
                                                <h6><a href="shop-product-full.html" class="text-heading">Amazon Essentials Women's Tanks</a></h6>
                                            </td>
                                            <td class="product_name">
                                                <h6><a href="shop-product-full.html" class="text-heading">Amazon Brand - Daily Ritual Wom</a></h6>
                                            </td>
                                        </tr>
                                        <tr class="pr_price">
                                            <td class="text-muted font-sm fw-600 font-heading">Price</td>
                                            <td class="product_price">
                                                <h4 class="price text-brand">$12.00</h4>
                                            </td>
                                            <td class="product_price">
                                                <h4 class="price text-brand">$14.00</h4>
                                            </td>
                                            <td class="product_price">
                                                <h4 class="price text-brand">$15.00</h4>
                                            </td>
                                        </tr>
                                        <tr class="pr_rating">
                                            <td class="text-muted font-sm fw-600 font-heading">Rating</td>
                                            <td>
                                                <div class="rating_wrap">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="rating_num">(121)</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="rating_wrap">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="rating_num">(35)</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="rating_wrap">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="rating_num">(125)</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="description">
                                            <td class="text-muted font-sm fw-600 font-heading">Description</td>
                                            <td class="row_text font-xs">
                                                <p class="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                            </td>
                                            <td class="row_text font-xs">
                                                <p class="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                            </td>
                                            <td class="row_text font-xs">
                                                <p class="font-sm text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                            </td>
                                        </tr>
                                        <tr class="pr_stock">
                                            <td class="text-muted font-sm fw-600 font-heading">Stock status</td>
                                            <td class="row_stock"><span class="stock-status in-stock mb-0">In Stock</span></td>
                                            <td class="row_stock"><span class="stock-status out-stock mb-0">Out of stock</span></td>
                                            <td class="row_stock"><span class="stock-status in-stock mb-0">In Stock</span></td>
                                        </tr>
                                        <tr class="pr_weight">
                                            <td class="text-muted font-sm fw-600 font-heading">Weight</td>
                                            <td class="row_weight">320 gram</td>
                                            <td class="row_weight">370 gram</td>
                                            <td class="row_weight">380 gram</td>
                                        </tr>
                                        <tr class="pr_dimensions">
                                            <td class="text-muted font-sm fw-600 font-heading">Dimensions</td>
                                            <td class="row_dimensions">N/A</td>
                                            <td class="row_dimensions">N/A</td>
                                            <td class="row_dimensions">N/A</td>
                                        </tr>
                                        <tr class="pr_add_to_cart">
                                            <td class="text-muted font-sm fw-600 font-heading">Buy now</td>
                                            <td class="row_btn">
                                                <button class="btn btn-sm"><i class="fi-rs-shopping-bag mr-5"></i>Add to cart</button>
                                            </td>
                                            <td class="row_btn">
                                                <button class="btn btn-sm btn-secondary"><i class="fi-rs-headset mr-5"></i>Contact Us</button>
                                            </td>
                                            <td class="row_btn">
                                                <button class="btn btn-sm"><i class="fi-rs-shopping-bag mr-5"></i>Add to cart</button>
                                            </td>
                                        </tr>
                                        <tr class="pr_remove text-muted">
                                            <td class="text-muted font-md fw-600"></td>
                                            <td class="row_remove">
                                                <a href="shop-compare.html#" class="text-muted"><i class="fi-rs-trash mr-5"></i><span>Remove</span> </a>
                                            </td>
                                            <td class="row_remove">
                                                <a href="shop-compare.html#" class="text-muted"><i class="fi-rs-trash mr-5"></i><span>Remove</span> </a>
                                            </td>
                                            <td class="row_remove">
                                                <a href="shop-compare.html#" class="text-muted"><i class="fi-rs-trash mr-5"></i><span>Remove</span> </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Compare;
