import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; Toate drepturile rezervate - {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
