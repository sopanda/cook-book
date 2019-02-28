import React, { PureComponent } from "react";
import { Translate } from "react-localize-redux";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classnames from "classnames";
import classes from "./Modal.module.css";

class Modal extends PureComponent {
  componentWillMount() {
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }
  render() {
    const {
      children,
      closeModal,
      modalState,
      title,
      deleteRecipe
    } = this.props;

    if (!modalState) {
      return null;
    } else {
      return ReactDOM.createPortal(
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal} />
          <div className={classnames("modal-card", classes.Card)}>
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button className="delete" onClick={closeModal} />
            </header>
            <section className="modal-card-body has-text-centered">
              <div className="content">{children}</div>
            </section>
            <footer className={classnames("modal-card-foot", classes.Footer)}>
              <a className="button is-success" onClick={deleteRecipe} href="#!">
                <Translate id="deleteRecipe.delete" />
              </a>
              <a className="button is-danger" onClick={closeModal} href="#!">
                <Translate id="deleteRecipe.cancel" />
              </a>
            </footer>
          </div>
        </div>,
        this.root
      );
    }
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  title: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

export default Modal;
