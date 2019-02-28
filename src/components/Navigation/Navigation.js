import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerActive: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isBurgerActive: !prevState.isBurgerActive
    }));
  };

  handleLanguageChange = language => {
    const { setActiveLanguage } = this.props;
    setActiveLanguage(language);
  };

  render() {
    const { isBurgerActive } = this.state;
    const { activeLanguage } = this.props;
    return (
      <Fragment>
        <nav
          className="navbar is-danger"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <Translate id="navigation.title" />
              </Link>
              <span
                role="button"
                className={classnames(
                  "navbar-burger burger",
                  isBurgerActive && "is-active"
                )}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarRecipe"
                onClick={this.toggle}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </span>
            </div>

            <div
              id="navbarRecipe"
              className={classnames(
                "navbar-menu",
                isBurgerActive && "is-active"
              )}
            >
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link
                    to="/new"
                    className="is-danger button"
                    style={{ width: "100%" }}
                    onClick={isBurgerActive ? this.toggle : null}
                  >
                    <Translate id="navigation.newRecipe" />
                  </Link>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" href="#!">
                    {activeLanguage.name}
                  </a>
                  <div className="navbar-dropdown">
                    <a
                      className="navbar-item"
                      onClick={() => this.handleLanguageChange("pl")}
                      href="#!"
                    >
                      Polish
                    </a>
                    <a
                      className="navbar-item"
                      onClick={() => this.handleLanguageChange("en")}
                      href="#!"
                    >
                      English
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withLocalize(Navigation);
