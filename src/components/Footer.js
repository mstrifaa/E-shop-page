import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaCcVisa } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";

import logo from "../images/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png";



export default function Footer(){

    return (
        <footer style={{backgroundColor: 'pink'}}>
            <div id="footer-container-big">
                <div className="footer-item" id="social-media" style={{backgroundColor: 'red'}}>
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

                <div className="footer-item" id="footer-customers" style={{backgroundColor: 'black'}}>

                    <p>CUSTOMERS</p>
                    <ul>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>

                </div>

                <div className="footer-item" id="legal-info" style={{backgroundColor: 'green'}}>

                    <p>LEGAL INFO</p>
                    <ul>
                        <li><a href="#">Privacy and Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Imprint</a></li>
                    </ul>
                </div>
                <div className="footer-item" id="company" style={{backgroundColor: 'blueviolet'}}>

                    <p>COMPANY</p>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Production Process</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-item" id="payment-icons" style={{backgroundColor: 'indigo'}}>
                    <span> <FaCcVisa/> </span>
                    <span href="www.twitter.com/..."> <FaTwitter /></span>
                    <span href="www.facebook.com/..."> <FaFacebookF /></span>
                    <span href="www.instagram.com/..."> <FiInstagram /></span>
                    <span href="www.pinterest.com/..."> <FaPinterestP /> </span>
                    <span href="www.youtube.com/..."> <ImYoutube /> </span>
                </div>
            </div>
            
            {/* accordion 'menus' for smaller screens */}

            <div id="footer-container-small">
                <div className="footer-item">
                    <div style={{backgroundColor: 'white', padding: '16px 20px', borderRadius:'0.375rem'}}>
                    {/* social media icons */}
                    {/* Change links */}
                        <span style={{marginRight: '1rem'}}>Follow us on social media: </span>
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
                        <span style={{marginRight: '1rem'}}>PAYMENT OPTIONS: </span>
                        <span> <FaCcVisa/> </span>
                        <span> <FaTwitter /></span>
                        <span> <FaFacebookF /></span>
                        <span> <FiInstagram /></span>
                        <span> <FaPinterestP /> </span>
                        <span> <ImYoutube /> </span>
                        {/* cash on delivery, bkash, nogod and rocket must be included */}
                    </div>
                </div>
            </div>
        </footer>
    )

}