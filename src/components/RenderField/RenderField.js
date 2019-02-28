import React from "react";
import { Translate } from "react-localize-redux";
import classnames from "classnames";
import PropTypes from "prop-types";

export const RenderField = ({
  label,
  input,
  meta: { touched, error },
  type
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      {type === "textarea" ? (
        <textarea
          className={classnames(
            "textarea",
            touched && error ? "is-danger" : ""
          )}
          {...input}
          rows="6"
        />
      ) : (
        <input
          className={classnames("input", touched && error ? "is-danger" : "")}
          {...input}
          type="text"
        />
      )}
    </div>
    {touched && error && (
      <span className="is-pulled-right has-text-danger">
        <Translate id={error} />
      </span>
    )}
  </div>
);

RenderField.propTypes = {
  label: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
};
