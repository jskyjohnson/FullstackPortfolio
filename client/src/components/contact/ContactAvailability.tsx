import React from "react";
import "assets/css/containers/Contact.scss";
import { userinfo } from "data/userinfo";

export const ContactAvailability = () => {
  return (
    <>
      {userinfo.contact.contactMessage.map((value) => (
        <p>{value}</p>
      ))}
    </>
  );
};
