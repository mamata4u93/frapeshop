import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
import banner9 from "../../assets/imgs/banner/banner9.png";
import icon1 from "../../assets/imgs/theme/icons/icon1.svg";
import icon2 from "../../assets/imgs/theme/icons/icon2.svg";
import icon3 from "../../assets/imgs/theme/icons/icon3.svg";
import icon4 from "../../assets/imgs/theme/icons/icon4.svg";
import icon5 from "../../assets/imgs/theme/icons/icon5.svg";
import icon6 from "../../assets/imgs/theme/icons/icon6.svg";
import icon_location from "../../assets/imgs/theme/icons/icon_location.svg";
import icon_contact from "../../assets/imgs/theme/icons/icon_contact.svg";
import icon_email from "../../assets/imgs/theme/icons/icon_email.svg";
import icon_clock from "../../assets/imgs/theme/icons/icon_clock.svg";
import phone_call from "../../assets/imgs/theme/icons/phone_call.svg";
import icon_facebookwhite from "../../assets/imgs/theme/icons/icon_facebookwhite.svg";
import icon_twitterwhite from "../../assets/imgs/theme/icons/icon_twitterwhite.svg";
import icon_instagramwhite from "../../assets/imgs/theme/icons/icon_instagramwhite.svg";
import icon_print from "../../assets/imgs/theme/icons/icon_print.svg";
import icon_youtubewhite from "../../assets/imgs/theme/icons/icon_youtubewhite.svg";
import logo from "../../assets/imgs/theme/logo.svg";
import appstore from "../../assets/imgs/theme/appstore.jpg";
import googleplay from "../../assets/imgs/theme/googleplay.jpg";
import paymentmethod from "../../assets/imgs/theme/paymentmethod.png";

function Footer() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    const [darkMode, setDarkMode] = useTheme();
    const langChange = () => {
        let lang = (i18n.language === 'de') ? 'en' : 'de'
        i18n.changeLanguage(lang)
    }
    return (
        <footer className="main">
            <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="position-relative newsletter-inner">
                                <div className="newsletter-content">
                                    <h2 className="mb-20">
                                        Stay home & get your daily <br />
                                        needs from our shop
                                    </h2>
                                    <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand">Nest Mart</span></p>
                                    <form className="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button className="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                                <img src={banner9} alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <div className="banner-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Best prices & offers</h3>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <div className="banner-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Free delivery</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <div className="banner-icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Great daily deal</h3>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <div className="banner-icon">
                                    <img src={icon4} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Wide assortment</h3>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <div className="banner-icon">
                                    <img src={icon5} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Easy returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                            <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <div className="banner-icon">
                                    <img src={icon6} alt="" />
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">Safe delivery</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding footer-mid">
                <div className="container pt-15 pb-20">
                    <div className="row">
                        <div className="col">
                            <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <div className="logo mb-30">
                                    <a href="index.html" className="mb-15"><img src={logo} alt="logo" /></a>
                                    <p className="font-lg text-heading">Awesome grocery store website template</p>
                                </div>
                                <ul className="contact-infor">
                                    <li><img src={icon_location} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                    <li><img src={icon_contact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                    <li><img src={icon_email}  alt="" /><strong>Email:</strong><span><a href="../../../cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6f1c0e030a2f210a1c1b410c0002">[email&#160;protected]</a></span></li>
                                    <li><img src={icon_clock} alt="" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h4 className=" widget-title">Company</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="index.html#">About Us</a></li>
                                <li><a href="index.html#">Delivery Information</a></li>
                                <li><a href="index.html#">Privacy Policy</a></li>
                                <li><a href="index.html#">Terms &amp; Conditions</a></li>
                                <li><a href="index.html#">Contact Us</a></li>
                                <li><a href="index.html#">Support Center</a></li>
                                <li><a href="index.html#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <h4 className="widget-title">Account</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="index.html#">Sign In</a></li>
                                <li><a href="index.html#">View Cart</a></li>
                                <li><a href="index.html#">My Wishlist</a></li>
                                <li><a href="index.html#">Track My Order</a></li>
                                <li><a href="index.html#">Help Ticket</a></li>
                                <li><a href="index.html#">Shipping Details</a></li>
                                <li><a href="index.html#">Compare products</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="widget-title">Corporate</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="index.html#">Become a Vendor</a></li>
                                <li><a href="index.html#">Affiliate Program</a></li>
                                <li><a href="index.html#">Farm Business</a></li>
                                <li><a href="index.html#">Farm Careers</a></li>
                                <li><a href="index.html#">Our Suppliers</a></li>
                                <li><a href="index.html#">Accessibility</a></li>
                                <li><a href="index.html#">Promotions</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <h4 className="widget-title">Popular</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="index.html#">Milk & Flavoured Milk</a></li>
                                <li><a href="index.html#">Butter and Margarine</a></li>
                                <li><a href="index.html#">Eggs Substitutes</a></li>
                                <li><a href="index.html#">Marmalades</a></li>
                                <li><a href="index.html#">Sour Cream and Dips</a></li>
                                <li><a href="index.html#">Tea & Kombucha</a></li>
                                <li><a href="index.html#">Cheese</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <h4 className="widget-title">Install App</h4>
                            <p className="">From App Store or Google Play</p>
                            <div className="download-app">
                                <a href="index.html#" className="hover-up mb-sm-2 mb-lg-0"><img className="active" src={appstore} alt="" /></a>
                                <a href="index.html#" className="hover-up mb-sm-2"><img src={googleplay} alt="" /></a>
                            </div>
                            <p className="mb-20">Secured Payment Gateways</p>
                            <img className="" src={paymentmethod} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                <div className="row align-items-center">
                    <div className="col-12 mb-30">
                        <div className="footer-bottom"></div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <p className="font-sm mb-0">&copy; 2022, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
                    </div>
                    <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                        <div className="hotline d-lg-inline-flex mr-30">
                            <img src={phone_call} alt="hotline" />
                            <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
                        </div>
                        <div className="hotline d-lg-inline-flex">
                            <img src={phone_call} alt="hotline" />
                            <p>1900 - 8888<span>24/7 Support Center</span></p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                        <div className="mobile-social-icon">
                            <h6>Follow Us</h6>
                            <a href="index.html#"><img src={icon_facebookwhite} alt="" /></a>
                            <a href="index.html#"><img src={icon_twitterwhite} alt="" /></a>
                            <a href="index.html#"><img src={icon_instagramwhite} alt="" /></a>
                            <a href="index.html#"><img src={icon_print} alt="" /></a>
                            <a href="index.html#"><img src={icon_youtubewhite} alt="" /></a>
                        </div>
                        <p className="font-sm">Up to 15% discount on your first subscribe</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;