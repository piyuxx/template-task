import React from "react";
// import img from "next/img";
import footerLogo from "../src/assests/footerLogo(1).png"
import logo from "../src/assests/logo.jpg";
import img1 from "../src/assests/footerGridImg/img-1.png";
import img2 from "../src/assests/footerGridImg/img-2.png";
import img3 from "../src/assests/footerGridImg/img-3.png";
import img4 from "../src/assests/footerGridImg/img-4.png";
import img5 from "../src/assests/footerGridImg/img-5.png";
import img6 from "../src/assests/footerGridImg/img-6.png";
import img7 from "../src/assests/footerGridImg/img-7.png";
import img8 from "../src/assests/footerGridImg/img-8.png";
import fb from "../src/assests/socialMediaLogos/fb.png";
import insta from "../src/assests/socialMediaLogos/insta.png";
import linkDin from "../src/assests/socialMediaLogos/linkDin.png";
import youTube from "../src/assests/socialMediaLogos/youTube.png";

const Footer = () => {
    return (
        <div>
            <footer
                className="text-white text-center text-lg-start"
                style={{ backgroundColor: "#091634" }}
            >
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <img
                                src={footerLogo}
                                width={200}
                                height={60}
                                alt="Footer Logo"
                            />

                            <div>Fstest Growing Medical Platform
                                <br></br>
                                for Doctors.</div>
                            <p className="mt-5 ">
                                <a href="#!" style={{ marginRight: 20 }}>
                                    <img src={fb} width={22} height={20} alt="Facebook" />
                                </a>
                                <a href="#!" style={{ marginRight: 20 }}>
                                    <img src={insta} width={22} height={20} alt="Instagram" />
                                </a>
                                <a href="#!" style={{ marginRight: 20 }}>
                                    <img src={youTube} width={22} height={20} alt="YouTube" />
                                </a>
                                <a href="#!">
                                    <img src={linkDin} width={22} height={20} alt="LinkedIn" />
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fs-6"> Reach Us</h5>

                            <ul className="list-unstyled mb-0">
                                <div className="mt-3 " style={{ fontSize: 12, fontWeight: "400" }}>
                                    Please contact below details for any other information
                                </div>
                                <div className="mt-3 ">
                                    <li>
                                        <a href="#!" className="text-primary " style={{ fontSize: 14 }}>
                                            Email:
                                        </a>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <a href="#!" className="text-white " style={{ fontSize: 12 }}>
                                            info@hidoc.co
                                        </a>
                                    </li>
                                </div>

                                <div className="mt-3 ">
                                    <li>
                                        <a href="#!" className="text-primary " style={{ fontSize: 14 }}>
                                            Address
                                        </a>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <a href="#!" className="text-white " style={{ fontSize: 12 }}>
                                            Hidoc Dr.Inc. | Delaware C Corp | 1309 Coffeen Ave. Suite
                                            1200, Sheridan WY, 82801
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        {/* Third Column */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0 ml-4 p-2 pt-0 pb-0 fs-6 rotate-text">Hidoc dr. feature</h5>

                            <div className="container text-center mt-4">
                                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2">
                                    {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
                                        <a key={index} href="#!">
                                            <div className="col">
                                                <img src={img} width={100} height={80} alt={`img ${index + 1}`} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* End of Third Column */}
                    </div>
                </div>

                <div className="text-center text-bg-light p-2 bg-secondary-subtle" style={{ fontSize: 12 }}>
                    © CopyrightHidoc 2022{" "}
                    <span style={{ fontWeight: "600" }}> Hidoc Dr. Inc.</span>
                    <div style={{ fontSize: 10 }}>Terms and conditions | Privacy Policy</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
