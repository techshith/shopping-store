/*
 ** Author: Veekshith
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={
          this.props.activeClass ? "hamburger_menu active" : "hamburger_menu"
        }
      >
        <div className="hamburger_close" onClick={this.props.onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item has-children">
              <a href="#">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
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
            <li className="menu_item has-children">
              <a href="#">
                English
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
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
            <li className="menu_item has-children">
              <a href="#">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu_item">
              <a href="#">Home</a>
            </li>
            <li className="menu_item">
              <a href="#">Shop</a>
            </li>
            <li className="menu_item">
              <a href="#">Promotion</a>
            </li>
            <li className="menu_item">
              <a href="#">Pages</a>
            </li>
            <li className="menu_item">
              <a href="#">Blog</a>
            </li>
            <li className="menu_item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
MobileMenu.propTypes = {
  activeClass: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileMenu;
