import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import product_1_1 from "../assets/imgs/shop/product_1_1.jpg";
import product_2_1 from "../assets/imgs/shop/product_2_1.jpg";
import product_3_1 from "../assets/imgs/shop/product_3_1.jpg";
import product_4_1 from "../assets/imgs/shop/product_4_1.jpg";
import product_5_1 from "../assets/imgs/shop/product_5_1.jpg";

function Wishlist() {
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
                            <form action="shop-wishlist.html#">
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
                                                <a href="shop-wishlist.html#">Single Product</a>
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
                                                <a href="shop-wishlist.html#">Shop Invoice</a>
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
                                        <a href="shop-wishlist.html#">Vendors</a>
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
                                        <a href="shop-wishlist.html#">Mega menu</a>
                                        <ul class="dropdown">
                                            <li class="menu-item-has-children">
                                                <a href="shop-wishlist.html#">Women's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="shop-wishlist.html#">Men's Fashion</a>
                                                <ul class="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="shop-wishlist.html#">Technology</a>
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
                                                <a href="shop-wishlist.html#">Single Product Layout</a>
                                                <ul class="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="shop-wishlist.html#">Pages</a>
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
                                        <a href="shop-wishlist.html#">Language</a>
                                        <ul class="dropdown">
                                            <li><a href="shop-wishlist.html#">English</a></li>
                                            <li><a href="shop-wishlist.html#">French</a></li>
                                            <li><a href="shop-wishlist.html#">German</a></li>
                                            <li><a href="shop-wishlist.html#">Spanish</a></li>
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
                                <a href="shop-wishlist.html#"><i class="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div class="mobile-social-icon mb-50">
                            <h6 class="mb-15">Follow Us</h6>
                            <a href="shop-wishlist.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="shop-wishlist.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="shop-wishlist.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="shop-wishlist.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="shop-wishlist.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
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
                            <span></span> Shop <span></span> Fillter
                        </div>
                    </div>
                </div>
                <div class="container mb-30 mt-50">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 m-auto">
                            <div class="mb-50">
                                <h1 class="heading-2 mb-10">Your Wishlist</h1>
                                <h6 class="text-body">There are <span class="text-brand">5</span> products in this list</h6>
                            </div>
                            <div class="table-responsive shopping-summery">
                                <table class="table table-wishlist">
                                    <thead>
                                        <tr class="main-heading">
                                            <th class="custome-checkbox start pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                                                <label class="form-check-label" for="exampleCheckbox11"></label>
                                            </th>
                                            <th scope="col" colspan="2">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Stock Status</th>
                                            <th scope="col">Action</th>
                                            <th scope="col" class="end">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="pt-30">
                                            <td class="custome-checkbox pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                <label class="form-check-label" for="exampleCheckbox1"></label>
                                            </td>
                                            <td class="image product-thumbnail pt-40"><img src={product_1_1} alt="#" /></td>
                                            <td class="product-des product-name">
                                                <h6><a class="product-name mb-10" href="shop-product-right.html">Field Roast Chao Cheese Creamy Original</a></h6>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td class="price" data-title="Price">
                                                <h3 class="text-brand">$2.51</h3>
                                            </td>
                                            <td class="text-center detail-info" data-title="Stock">
                                                <span class="stock-status in-stock mb-0"> In Stock </span>
                                            </td>
                                            <td class="text-right" data-title="Cart">
                                                <button class="btn btn-sm">Add to cart</button>
                                            </td>
                                            <td class="action text-center" data-title="Remove">
                                                <a href="shop-wishlist.html#" class="text-body"><i class="fi-rs-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="custome-checkbox pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                                                <label class="form-check-label" for="exampleCheckbox2"></label>
                                            </td>
                                            <td class="image product-thumbnail"><img src={product_2_1} alt="#" /></td>
                                            <td class="product-des product-name">
                                                <h6><a class="product-name mb-10" href="shop-product-right.html">Blue Diamond Almonds Lightly Salted</a></h6>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td class="price" data-title="Price">
                                                <h3 class="text-brand">$3.2</h3>
                                            </td>
                                            <td class="text-center detail-info" data-title="Stock">
                                                <span class="stock-status in-stock mb-0"> In Stock </span>
                                            </td>
                                            <td class="text-right" data-title="Cart">
                                                <button class="btn btn-sm">Add to cart</button>
                                            </td>
                                            <td class="action text-center" data-title="Remove">
                                                <a href="shop-wishlist.html#" class="text-body"><i class="fi-rs-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="custome-checkbox pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                                                <label class="form-check-label" for="exampleCheckbox3"></label>
                                            </td>
                                            <td class="image product-thumbnail"><img src={product_3_1} alt="#" /></td>
                                            <td class="product-des product-name">
                                                <h6><a class="product-name mb-10" href="shop-product-right.html">Fresh Organic Mustard Leaves Bell Pepper</a></h6>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td class="price" data-title="Price">
                                                <h3 class="text-brand">$2.43</h3>
                                            </td>
                                            <td class="text-center detail-info" data-title="Stock">
                                                <span class="stock-status in-stock mb-0"> In Stock </span>
                                            </td>
                                            <td class="text-right" data-title="Cart">
                                                <button class="btn btn-sm">Add to cart</button>
                                            </td>
                                            <td class="action text-center" data-title="Remove">
                                                <a href="shop-wishlist.html#" class="text-body"><i class="fi-rs-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="custome-checkbox pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox4" value="" />
                                                <label class="form-check-label" for="exampleCheckbox4"></label>
                                            </td>
                                            <td class="image product-thumbnail"><img src={product_4_1} alt="#" /></td>
                                            <td class="product-des product-name">
                                                <h6><a class="product-name mb-10" href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty </a></h6>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td class="price" data-title="Price">
                                                <h3 class="text-brand">$3.21</h3>
                                            </td>
                                            <td class="text-center detail-info" data-title="Stock">
                                                <span class="stock-status out-stock mb-0"> Out Stock </span>
                                            </td>
                                            <td class="text-right" data-title="Cart">
                                                <button class="btn btn-sm btn-secondary">Contact Us</button>
                                            </td>
                                            <td class="action text-center" data-title="Remove">
                                                <a href="shop-wishlist.html#" class="text-body"><i class="fi-rs-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="custome-checkbox pl-30">
                                                <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox5" value="" />
                                                <label class="form-check-label" for="exampleCheckbox5"></label>
                                            </td>
                                            <td class="image product-thumbnail"><img src={product_5_1} alt="#" /></td>
                                            <td class="product-des product-name">
                                                <h6><a class="product-name mb-10" href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h6>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style={{ width: `90%` }}></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td class="price" data-title="Price">
                                                <h3 class="text-brand">$3.17</h3>
                                            </td>
                                            <td class="text-center detail-info" data-title="Stock">
                                                <span class="stock-status in-stock mb-0"> In Stock </span>
                                            </td>
                                            <td class="text-right" data-title="Cart">
                                                <button class="btn btn-sm">Add to cart</button>
                                            </td>
                                            <td class="action text-center" data-title="Remove">
                                                <a href="shop-wishlist.html#" class="text-body"><i class="fi-rs-trash"></i></a>
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

export default Wishlist;
