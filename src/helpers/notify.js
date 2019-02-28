import React from "react";
import { toast } from "react-toastify";
import { Translate } from "react-localize-redux";

export const notify = () => {
  toast.success(<Translate id="newRecipe.success" />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false
  });
};
