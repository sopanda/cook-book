import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import { useOpen } from "../../hooks/";

const Navigation = ({ activeLanguage, setActiveLanguage }) => {
  const { isOpen, toggle } = useOpen();

  const handleLanguageChange = language => {
    setActiveLanguage(language);
  };
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
                isOpen && "is-active"
              )}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarRecipe"
              onClick={toggle}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </span>
          </div>

          <div
            id="navbarRecipe"
            className={classnames("navbar-menu", isOpen && "is-active")}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  to="/new"
                  className="is-danger button"
                  style={{ width: "100%" }}
                  onClick={isOpen ? toggle : null}
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
                    onClick={() => handleLanguageChange("pl")}
                    href="#!"
                  >
                    Polish
                  </a>
                  <a
                    className="navbar-item"
                    onClick={() => handleLanguageChange("en")}
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
};

export default withLocalize(Navigation);
