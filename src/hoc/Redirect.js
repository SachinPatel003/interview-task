import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getToken } from "../utils";

const Redirect = ({ ComposedComponent }) => {
  const token = getToken();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (token) {
      setContent(<Navigate to="/team" />);
    } else {
      setContent(<ComposedComponent />);
    }
  }, [token]);

  return content;
};

export default Redirect;
