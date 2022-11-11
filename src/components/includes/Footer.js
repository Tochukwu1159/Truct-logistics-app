import React from 'react'

const Footer = () => {
    const footStyle = {
        color: "white",
        backgroundColor:'#5E54A4'
      };
    const footH1 = {
        backgroundColor:'#5E54A4',
        fontWeight:700,
        fontSize:30
      };
    return (
        <div>
                <br />
                <br />
                <footer style={footStyle}>
                <br />
                <br />
                <br />

        <div className="container" >
            <div className="footer__top">
                <div className="row">
                    <div className="col-sm-12 col-md-3" style={footH1}>
                        TRUCKS
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="footer__sections">
                            <span>
                                <i className="bi bi-telephone-fill"></i>
                                <span> Contact Us</span>
                            </span>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="footer__sections">
                            <span>
                                <i className="bi bi-youtube"></i>
                                <span> Follow us</span>
                            </span>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="footer__sections">
                            <span>
                                <i className="bi bi-house-fill"></i>
                                <span> Adress</span>
                            </span>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        <br />

            <div className="copyright__section">
                &copy;2021 - All rights reserved
            </div>
        </div>
        <br />
        <br />
    </footer>

        </div>
    )
}

export default Footer
