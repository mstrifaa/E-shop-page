import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaCcVisa, FaCcMastercard, FaCcAmazonPay, FaCcApplePay, FaCcPaypal, FaCcStripe } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";

import COD from "../images/icons8-cash-on-delivery-16.png";

import logo from "../images/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png";



export default function Footer(){

    return (
        <footer>
            <div id="footer-container-big">
                <div className="footer-item" id="social-media">
                    {/* social media icons */}
                    {/* Change links */}
                    {/* image should be prettier - width */}
                    <img style={{height: '3rem', margin: '2px'}} src={logo} alt="logo"/>
                    <p style={{textDecoration: 'none', }}>Follow us on social media: </p>
                    <a href="www.twitter.com/..."> <FaTwitter /></a>
                    <a href="www.facebook.com/..."> <FaFacebookF /></a>
                    <a href="www.instagram.com/..."> <FiInstagram /></a>
                    <a href="www.pinterest.com/..."> <FaPinterestP /> </a>
                    <a href="www.youtube.com/..."> <ImYoutube /> </a>

                </div>

                <div className="footer-item" id="footer-customers" >

                    <p>CUSTOMERS</p>
                    <ul>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>

                </div>

                <div className="footer-item" id="legal-info" >

                    <p>LEGAL INFO</p>
                    <ul>
                        <li><a href="#">Privacy and Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Imprint</a></li>
                    </ul>
                </div>
                <div className="footer-item" id="company" >

                    <p>COMPANY</p>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Production Process</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-item" id="payment-icons" >
                    <p>PAYMENT OPTIONS: </p>
                    <span> <FaCcVisa/> </span>
                    <span > <FaCcMastercard /></span>
                    <span > <FaCcAmazonPay /></span>
                    <span > <FaCcApplePay /></span>
                    <span > <FaCcPaypal /> </span>
                    <span > <FaCcStripe /> </span>
                    <span> <img src={COD} /></span>
                </div>
            </div>
            
            {/* accordion 'menus' for smaller screens */}

            <div id="footer-container-small">
                <div className="footer-item">
                    <div style={{backgroundColor: 'white', padding: '16px 20px', borderRadius:'0.375rem'}}>
                    {/* social media icons */}
                    {/* Change links */}
                        <p style={{marginRight: '1rem'}}>Follow us on social media: </p>
                        <a href="www.twitter.com/..." title="Twitter"> <FaTwitter /></a>
                        <a href="www.facebook.com/..." title="Facebook"> <FaFacebookF /></a>
                        <a href="www.instagram.com/..." title="Instagram"> <FiInstagram /></a>
                        <a href="www.pinterest.com/..." title="Pinterest"> <FaPinterestP /> </a>
                        <a href="www.youtube.com/..." title="Youtube"> <ImYoutube /> </a>
                        
                    </div>
                </div>

                <div className="footer-item accordion" id="accordion1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                CUSTOMERS
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <ul>
                                    <li><a href="#">Shipping Info</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-item accordion" id="accordion2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                LEGAL INFO
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion2">
                            <div className="accordion-body">
                                <ul>
                                    <li><a href="#">Privacy and Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Imprint</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-item accordion" id="accordion3">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                COMPANY
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion3">
                            <div className="accordion-body">
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Production Process</a></li>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-item">
                    <div style={{backgroundColor: 'white', padding: '16px 20px', borderRadius:'0.375rem'}}>
                    {/* social media icons */}
                    {/* Change links */}
                        <p style={{marginRight: '1rem'}}>PAYMENT OPTIONS: </p>
                        <span> <FaCcVisa/> </span>
                        <span > <FaCcMastercard /></span>
                        <span > <FaCcAmazonPay /></span>
                        <span > <FaCcApplePay /></span>
                        <span > <FaCcPaypal /> </span>
                        <span > <FaCcStripe /> </span>
                        <span> <img src={COD} /></span>
                        {/* cash on delivery, bkash, nogod and rocket must be included */}
                    </div>
                </div>
            </div>
        </footer>
    )

}