/*
 ** Author: Veekshith
 */

import React, { Component } from "react";
import LoginRegister from "../LoginRegisterModal";

import Auth from "../../modules/Auth";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      login: true
    };
  }
  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  logout = () => {
    Auth.logout();
    window.location.reload();
  };

  render() {
    return (
      <div className={`top_nav ${this.props.className}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                Free Shipping on all U.S orders over $50
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="currency">
                    <a href="#">
                      usd
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="currency_selection">
                      <li>
                        <a href="#">CAD</a>
                      </li>
                      <li>
                        <a href="#">AUD</a>
                      </li>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                    </ul>
                  </li>
                  <li className="language">
                    <a href="#">
                      English
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="language_selection">
                      <li>
                        <a href="#">French</a>
                      </li>
                      <li>
                        <a href="#">Italian</a>
                      </li>
                      <li>
                        <a href="#">German</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </li>
                  {Auth.getUserDetails() !== undefined &&
                  Auth.getUserDetails() !== null &&
                  Auth.getToken() !== undefined ? (
                    <li className="account">
                      <a href="#">
                        {`Welcome ${Auth.getUserDetails().user_name}`}
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="account_selection">
                        <li>
                          <a href="#" onClick={() => this.logout()}>
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            ></i>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="account">
                      <a href="#">
                        My Account
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="account_selection">
                        <li>
                          <a href="#" onClick={() => this.loginClicked()}>
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            ></i>
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => this.registerClicked()}>
                            <i
                              className="fa fa-user-plus"
                              aria-hidden="true"
                            ></i>
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {this.state.modalShow ? (
          <LoginRegister
            show={this.state.modalShow}
            login={this.state.login}
            registerClicked={() => this.registerClicked()}
            loginClicked={() => this.loginClicked()}
            onHide={() => this.showHideModal()}
          />
        ) : null}
      </div>
    );
  }
}

export default TopNavBar;
