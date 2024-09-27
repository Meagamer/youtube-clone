
import PropTypes from "prop-types";
import { useState } from "react";

export const SideExpandProvider = ({ children }) => {
  const [ expand, setExpand] = useState(true)

  return (
    <SideExpand.Provider value={{ expand, setExpand }}>
      {children}
    </SideExpand.Provider>
  );
};

SideExpandProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};