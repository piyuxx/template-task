import React from "react";
// import Image from "next/image";
import logo from "../src/assests/logo.jpg";
import frame from "../src/assests/Frame.png";
import { Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <main>
            <div className="card row align-items-center">
                <div className="card-header d-flex flex-row justify-content-between bg-light bg-gradient header-top" style={{ height: 40 }}>
                    <div>
                        <img src={logo}
                            width={80}
                            height={20}
                            alt="Logo"
                        />
                    </div>
                    <div className="fw-dark d-none d-md-block" style={{ fontSize: 12 }}>
                        Drugs | Calculators | Articles | News | Quizzes | Surveys | Webinars | Guidelines
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <img
                            src={frame}
                            width={20}
                            height={20}
                            alt="Frame"
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary text-center"
                            style={{
                                borderRadius: 20,
                                fontSize: 12,
                                paddingTop: 2,
                                height: 24,
                                color: "red",
                            }}
                            disabled
                        >
                            274
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary text-center"
                            style={{
                                borderRadius: 33,
                                fontSize: 12,
                                textAlign: "center",
                                color: "black",
                            }}
                            disabled
                        >
                            A
                        </button>
                    </div>
                </div>
                <div className="card-header d-flex justify-content-center bg-info bg-opacity-10 fs-7 fw-bold header-middle" style={{ height: 60, paddingLeft: "40px", paddingRight: "40px" }}>
                    <div className="d-flex flex-column align-items-center text-center">
                        <div>
                            <span style={{ color: "black" }}>Your one stop solution for</span>
                            <span className="ms-2" style={{ whiteSpace: "pre", color: "skyblue", fontWeight: "800" }}>MEDICAL LEARNING & UPDATES</span>
                        </div>
                    </div>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-light header-bottom">
                    {/* <div className="mb-1 d-none d-md-block"> Get knowledge of the
            <span
              style={{ whiteSpace: "pre", fontWeight: "600", color: "skyblue", marginRight: "10px" }}
            >
              {" "}
              APPROVED DRUGS
            </span>
          </div> */}
                    <div className="d-flex align-items-center search-container">
                        <div className="d-none d-md-block"> Get knowledge of the
                            <span
                                style={{ whiteSpace: "pre", fontWeight: "600", color: "skyblue", marginRight: "10px" }}
                            >
                                {" "}
                                APPROVED DRUGS
                            </span>
                        </div>
                        <div className="flex-grow-1 position-relative" style={{ marginLeft: "10px" }}>
                            <Input
                                type='text'
                                placeholder="Enter Drugs here..."
                            />
                            <FontAwesomeIcon
                                icon={faSearch}
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 767px) {
          .header-top {
            height: auto;
            padding: 10px;
            flex-wrap: wrap;
          }

          .header-top > div:nth-child(2) {
            display: none;
          }

          .header-middle {
            height: auto;
            padding: 10px;
            text-align: center;
          }

          .header-bottom {
            padding: 20px 10px;
          }

          .search-container {
            width: 100%;
            max-width: none;
          }
        }

        /* Add this CSS for laptop-sized screens */
        @media (min-width: 768px) {
          .header-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .header-bottom > div:first-child {
            margin-right: 10px;
          }
        }
      `}</style>
        </main>
    );
};

export default Header;
