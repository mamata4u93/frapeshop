import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import product_1_1 from "../assets/imgs/shop/product_1_1.jpg";
import product_2_1 from "../assets/imgs/shop/product_2_1.jpg";
import product_3_1 from "../assets/imgs/shop/product_3_1.jpg";

function Cart() {
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
                            <form action="shop-cart.html#">
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
                                                <a href="shop-cart.html#">Single Product</a>
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
                                                <a href="shop-cart.html#">Shop Invoice</a>
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
                                        <a href="shop-cart.html#">Vendors</a>
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
                                        <a href="shop-cart.html#">Mega menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children">
                                                <a href="shop-cart.html#">Women's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Dresses</a></li>
                                                    <li><a href="shop-product-right.html">Blouses & Shirts</a></li>
                                                    <li><a href="shop-product-right.html">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="shop-product-right.html">Women's Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="shop-cart.html#">Men's Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-product-right.html">Jackets</a></li>
                                                    <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                                                    <li><a href="shop-product-right.html">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="shop-cart.html#">Technology</a>
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
                                                <a href="shop-cart.html#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog-post-left.html">Left Sidebar</a></li>
                                                    <li><a href="blog-post-right.html">Right Sidebar</a></li>
                                                    <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="shop-cart.html#">Pages</a>
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
                                        <a href="shop-cart.html#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="shop-cart.html#">English</a></li>
                                            <li><a href="shop-cart.html#">French</a></li>
                                            <li><a href="shop-cart.html#">German</a></li>
                                            <li><a href="shop-cart.html#">Spanish</a></li>
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
                                <a href="shop-cart.html#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                            </div>
                        </div>
                        <div className="mobile-social-icon mb-50">
                            <h6 className="mb-15">Follow Us</h6>
                            <a href="shop-cart.html#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                            <a href="shop-cart.html#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                            <a href="shop-cart.html#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                            <a href="shop-cart.html#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                            <a href="shop-cart.html#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                        </div>
                        <div className="site-copyright"> Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</div>
                    </div>
                </div>
            </div>

            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Shop
                            <span></span> Cart
                        </div>
                    </div>
                </div>
                <div className="container mb-80 mt-50">
                    <div className="row">
                        <div className="col-lg-8 mb-40">
                            <h1 className="heading-2 mb-10">Your Cart</h1>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                                <h6 className="text-body"><a href="shop-cart.html#" className="text-muted"><i className="fi-rs-trash mr-5"></i>Clear Cart</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="table-responsive shopping-summery">
                                <table className="table table-wishlist">
                                    <thead>
                                        <tr className="main-heading">
                                            <th className="custome-checkbox start pl-30">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                                                <label className="form-check-label" for="exampleCheckbox11"></label>
                                            </th>
                                            <th scope="col" colspan="2">Product</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Subtotal</th>
                                            <th scope="col" className="end">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="pt-30">
                                            <td className="custome-checkbox pl-30">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                <label className="form-check-label" for="exampleCheckbox1"></label>
                                            </td>
                                            <td className="image product-thumbnail pt-40"><img src={product_1_1} alt="#" /></td>
                                            <td className="product-des product-name">
                                                <h6 className="mb-5"><a className="product-name mb-10 text-heading" href="shop-product-right.html">Field Roast Chao Cheese Creamy Original</a></h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}>
                                                        </div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-body">$2.51 </h4>
                                            </td>
                                            <td className="text-center detail-info" data-title="Stock">
                                                <div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius">
                                                        <a href="shop-cart.html#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                        <span className="qty-val">1</span>
                                                        <a href="shop-cart.html#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-brand">$2.51 </h4>
                                            </td>
                                            <td className="action text-center" data-title="Remove"><a href="shop-cart.html#" className="text-body"><i className="fi-rs-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="custome-checkbox pl-30">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                                                <label className="form-check-label" for="exampleCheckbox2"></label>
                                            </td>
                                            <td className="image product-thumbnail"><img src={product_2_1} alt="#" /></td>
                                            <td className="product-des product-name">
                                                <h6 className="mb-5"><a className="product-name mb-10 text-heading" href="shop-product-right.html">Blue Diamond Almonds Lightly Salted</a></h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}>
                                                        </div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-body">$3.2 </h4>
                                            </td>
                                            <td className="text-center detail-info" data-title="Stock">
                                                <div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius">
                                                        <a href="shop-cart.html#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                        <span className="qty-val">1</span>
                                                        <a href="shop-cart.html#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-brand">$3.2 </h4>
                                            </td>
                                            <td className="action text-center" data-title="Remove"><a href="shop-cart.html#" className="text-body"><i className="fi-rs-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="custome-checkbox pl-30">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                                                <label className="form-check-label" for="exampleCheckbox3"></label>
                                            </td>
                                            <td className="image product-thumbnail"><img src={product_3_1} alt="#" /></td>
                                            <td className="product-des product-name">
                                                <h6 className="mb-5"><a className="product-name mb-10 text-heading" href="shop-product-right.html">Fresh Organic Mustard Leaves Bell Pepper</a></h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: `90%` }}>
                                                        </div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-body">$2.43 </h4>
                                            </td>
                                            <td className="text-center detail-info" data-title="Stock">
                                                <div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius">
                                                        <a href="shop-cart.html#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                        <span className="qty-val">1</span>
                                                        <a href="shop-cart.html#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="price" data-title="Price">
                                                <h4 className="text-brand">$2.43 </h4>
                                            </td>
                                            <td className="action text-center" data-title="Remove"><a href="shop-cart.html#" className="text-body"><i className="fi-rs-trash"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="divider-2 mb-30"></div>
                            <div className="cart-action d-flex justify-content-between">
                                <a className="btn "><i className="fi-rs-arrow-left mr-10"></i>Continue Shopping</a>
                                <a className="btn  mr-10 mb-sm-15"><i className="fi-rs-refresh mr-10"></i>Update Cart</a>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-7">
                                    <div className="calculate-shiping p-40 border-radius-15 border">
                                        <h4 className="mb-10">Calculate Shipping</h4>
                                        <p className="mb-30"><span className="font-lg text-muted">Flat rate:</span><strong className="text-brand">5%</strong></p>
                                        <form className="field_form shipping_calculator">
                                            <div className="form-row">
                                                <div className="form-group col-lg-12">
                                                    <div className="custom_select">
                                                        <select className="form-control select-active w-100">
                                                            <option value="">United Kingdom</option>
                                                            <option value="AX">Aland Islands</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AG">Antigua and Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="PW">Belau</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="VG">British Virgin Islands</option>
                                                            <option value="BN">Brunei</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo (Brazzaville)</option>
                                                            <option value="CD">Congo (Kinshasa)</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">CuraÇao</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="TF">French Southern Territories</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="CI">Ivory Coast</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Laos</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao S.A.R., China</option>
                                                            <option value="MK">Macedonia</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia</option>
                                                            <option value="MD">Moldova</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="AN">Netherlands Antilles</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="KP">North Korea</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PS">Palestinian Territory</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="IE">Republic of Ireland</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russia</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="ST">São Tomé and Príncipe</option>
                                                            <option value="BL">Saint Barthélemy</option>
                                                            <option value="SH">Saint Helena</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Martin (Dutch part)</option>
                                                            <option value="MF">Saint Martin (French part)</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                                            <option value="KR">South Korea</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syria</option>
                                                            <option value="TW">Taiwan</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TL">Timor-Leste</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom (UK)</option>
                                                            <option value="US">USA (US)</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VA">Vatican</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN">Vietnam</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="WS">Western Samoa</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group col-lg-6">
                                                    <input required="required" placeholder="State / Country" name="name" type="text" />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input required="required" placeholder="PostCode / ZIP" name="name" type="text" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="p-40">
                                        <h4 className="mb-10">Apply Coupon</h4>
                                        <p className="mb-30"><span className="font-lg text-muted">Using A Promo Code? </span></p>
                                        <form action="shop-cart.html#">
                                            <div className="d-flex justify-content-between">
                                                <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" />
                                                <button className="btn"><i className="fi-rs-label mr-10"></i>Apply</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="border p-md-4 cart-totals ml-30">
                                <div className="table-responsive">
                                    <table className="table no-border">
                                        <tbody>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Subtotal</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">$12.31</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="col" colspan="2">
                                                    <div className="divider-2 mt-10 mb-10"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Shipping</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">Free</h5></td> </tr> <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Estimate for</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">United Kingdom</h5></td> </tr> <tr>
                                                <td scope="col" colspan="2">
                                                    <div className="divider-2 mt-10 mb-10"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Total</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">$12.31</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a href="shop-cart.html#" className="btn mb-20 w-100">Proceed To CheckOut<i className="fi-rs-sign-out ml-15"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Cart;
