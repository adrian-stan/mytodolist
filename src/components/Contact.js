import React from "react";
import { TiPhoneOutline, TiMail } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="contact">
      <div className="infoitem">
        <h2>
          <a href="mailto:stanadrianmihai@yahoo.com" className="email">
            <TiMail /> stanadrianmihai@yahoo.com
          </a>
        </h2>
      </div>
      <div>
        <h2>
          <TiPhoneOutline /> (+40)749 989 848
        </h2>
      </div>
    </div>
  );
};

export default Contact;
