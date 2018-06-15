import React, { Component } from "react";
import { MdSearch, MdNotifications } from "react-icons/lib/md";
import CSSTransitionGroup from "react-addons-css-transition-group";
import Menu from "./components/menu";
import EmptyComponent from "./components/empty";
import "./App.css";
import ghToPages from "gh-to-pages";

ghToPages("https://github.com/MrMuzik/PaymentusSample");

class App extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderChild = this.renderChild.bind(this);
    this.navigateApp = this.navigateApp.bind(this);

    // Initial State
    this.state = {
      menu: false,
      page: "Profile & Preferences",
      content: "Profile"
    };
  }

  navigateApp(e) {
    const linkComponents = {
      Accounts: "Account",
      "Bills & Payments": "Payment",
      "My Products": "Product",
      "Profile & Preferences": "Profile",
      "Solutions Center": "Solution",
      Logout: "Logout"
    };

    this.setState({ page: e.target.textContent });
    this.setState({ content: linkComponents[e.target.textContent] });
  }

  renderChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu ? true : false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="secondary">
            <div
              className={"btn-burger" + (this.state.menu ? " open" : "")}
              onClick={() => this.toggleMenu()}
            >
              <div className="horizontal-rule" />
              <div className="horizontal-rule" />
              <div className="horizontal-rule" />
            </div>
            <h1 className="App-title">ABC Biller</h1>
          </div>
          <div className="primary">
            <span className="app-title">Customer Portal</span>
            <div className="icon icon-notification">
              <MdNotifications />
            </div>
            <div className="icon icon-search">
              <MdSearch />
            </div>
          </div>
        </header>
        <div className="main">
          <CSSTransitionGroup
            component={this.renderChild}
            className="slide-wrapper"
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.menu ? (
              <Menu
                open={this.state.menu}
                page={this.state.page}
                navigateApp={this.navigateApp}
              />
            ) : null}
          </CSSTransitionGroup>
          <div className="primary">
            {/* Variable content */}
            <EmptyComponent
              content={this.state.content}
              page={this.state.page}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
