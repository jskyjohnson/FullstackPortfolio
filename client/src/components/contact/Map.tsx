import { userinfo } from "data/userinfo";
import React from "react";

import "assets/css/containers/Contact.scss";

export const Map = () => {
  return (
    <div className="contact_map">
      <iframe
        src={`https://maps.google.com/maps?q=${userinfo.contact.lat},${userinfo.contact.long}&hl=en&z=10&output=embed`}
        title={"Contact Map"}
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
};
