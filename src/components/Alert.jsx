import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return !alert ? null : (
    <div class="alert">
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2196f3"
          class="mx-2 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <label>{alert.msg}</label>
      </div>
    </div>
  );
};

export default Alert;
