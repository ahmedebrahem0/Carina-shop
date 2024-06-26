import React, { Component } from 'react'
import style from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
// import { faFacebook, twit, linked, anysta, faYoutube } from "react-icons/fa";
// import { faFacebook } from '@';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
    
        return (
          <>
            <footer id="footer">
              <div className="footer-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-info">
                        <h3>
                          Gp<span>.</span>
                        </h3>
                        <p>
                          A108 Adam Street <br />
                          NY 535022, USA
                          <br />
                          <br />
                          <strong>Phone:</strong> +1 5589 55488 55
                          <br />
                          <strong>Email:</strong> info@example.com
                          <br />
                        </p>
                        <div className="social-links mt-3">
                          <a href="#" className="twitter">
                            <FaFacebook />
                          </a>
                          <a href="#" className="facebook">
                            <FaTwitter />
                          </a>
                          <a href="#" className="instagram">
                            <FaInstagram />
                          </a>
                          <a href="#" className="google-plus">
                            <FaGooglePlay />
                          </a>
                          <a href="#" className="linkedin">
                            <FaGoogle />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Product Management</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Graphic Design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                      <h4>
                        Our Newsletter
                        
                      </h4>
                      <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam
                        noster magna
                      </p>
                      <form  method="post">
                        <input type="email" name="email" />
                        <input type="submit" defaultValue="Subscribe" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container">
    <div className="copyright">
      © Copyright <strong><span>Gp</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div> */}
            </footer>
          </>
        );
    }

