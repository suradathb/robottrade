import React from "react";
import { Link } from "react-router-dom";
// import Axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <Link className="nav-link" to="/"
            >
              <img
                className="logo-Header"
                src="./assets/images/Logo.png"
                alt=""
              />
            </Link>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      มอบอำนาจ
                    </Link>
                  </li>   
                  <li className="nav-item">
                    <Link className="nav-link" to="/abount">
                      Abount
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">ผู้ใช้ : {this.state.acname} </li> */}
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/login">
                      Login
                    </Link> */}{" "}
                    {/* {this.state.symbol} :{" "}
                    {this.currencyFormat(this.state.balance)} wei */}
                  </li>
                  {/* <li className="nav-item"> To ETH :{this.currencyFormat(this.state.balanceETH)}</li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Close Header --> */}
      </>
    );
  }
}

export default Header;
