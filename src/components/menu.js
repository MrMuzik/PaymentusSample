import React from "react";
import PropTypes from "prop-types";

class Menu extends React.Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
  }

  navigate(e) {
    this.props.navigateApp(e);
  }

  renderLinks() {
    const links = [
      "Accounts",
      "Bills & Payments",
      "My Products",
      "Profile & Preferences",
      "Solutions Center",
      "Logout"
    ];
    const self = this;
    let currentPage = this.props.page;
    return (
      <ul>
        {links.map(function(name, index) {
          return (
            <li
              key={index}
              className={name === currentPage ? "active" : ""}
              onClick={function(e) {
                self.navigate(e);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const open = this.props.open;
    return (
      <div className={"secondary" + (open ? " open" : "")} key="1">
        {this.renderLinks()}
        <hr />
        <p className="u-text-centered">
          Powered by{" "}
          <img
            className="logo-footer"
            alt="Paymentus Logo"
            src="https://www.paymentus.com/wp-content/themes/paymentus-nc/assets/images/logo-blue.png"
          />
        </p>
        <a href="https://www.paymentus.com/privacy-policy" className="u-text-centered">
          Privacy Policy
        </a>
        <small className="u-text-centered">
          Last login was on<br />April 9, 2018 4:45:34PM
        </small>
      </div>
    );
  }
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  navigateApp: PropTypes.func.isRequired
};

export default Menu;
