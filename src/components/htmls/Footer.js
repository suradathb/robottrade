import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5 footer">
                <Link className="nav-link" to="/">
                  <img
                    className="logo-Footer"
                    src="./assets/images/Footer.png"
                    alt=""
                  />
                </Link>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"> </i>
                    Krungsri Securities Public Company Limited, Head Office 898
                    Ploenchit Tower, 3rd Floor, Ploenchit Road Lumpini
                    Subdistrict, Pathumwan District, Bangkok 10330
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"> </i>
                    <a
                      className="text-decoration-none"
                      href="tel:+66(0) 2659 7000"
                    >
                      +66(0) 2659 7000
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"> </i>
                    <a
                      className="text-decoration-none"
                      href="mailto:bondnuy007@me.com"
                    >
                      11429651@krungsrisecurities.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                {/* <h2 classNameNameName="h2 text-light border-bottom pb-3 border-light">Products</h2>
                            <ul classNameNameName="list-unstyled text-light footer-link-list">
                                <li><a classNameName="text-decoration-none" href="#">Luxury</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Sport Wear</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Men's Shoes</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Women's Shoes</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Popular Dress</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Gym Accessories</a></li>
                                <li><a classNameName="text-decoration-none" href="#">Sport Shoes</a></li>
                            </ul> */}
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  More Infomation
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <Link className="text-decoration-none" to="/">
                      มอบอำนาจ
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Abount
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
              <div className=" me-auto socal">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.facebook.com/gtonuy.shonan"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.instagram.com/gto_nuy/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://twitter.com/GTO_NUY"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/in/suradath-bangnikrai-50b825140/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                {/* <label classNameName="sr-only" for="subscribeEmail">Email address</label>
                            <div classNameName="input-group mb-2">
                                <input type="text" classNameName="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div classNameName="input-group-text btn-success text-light">Subscribe</div>
                            </div> */}
              </div>
            </div>
          </div>

          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light con">
                    Copyright &copy; 2022 Krungsri Securities Public Company
                    Limited.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
