import React, { Fragment, Component } from "react";
import { Translate } from "react-localize-redux";
import PropTypes from "prop-types";

export class ImageField extends Component {
  onChange = e => {
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
  };

  render() {
    const {
      input: { value },
      meta: { touched, error },
      label
    } = this.props;
    return (
      <Fragment>
        <label className="label">{label}</label>
        <div className="file">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={this.onChange}
            />
            <span className="file-cta ">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">
                {!value.name ? (
                  <Translate id="imageUpload.choose" />
                ) : (
                  value.name
                )}
              </span>
            </span>
          </label>
        </div>

        {touched && error && (
          <span classNameName="is-pulled-right has-text-danger">
            <Translate id={error} />
          </span>
        )}
      </Fragment>
    );
  }
}

ImageField.propTypes = {
  input: PropTypes.object.isRequired
};
