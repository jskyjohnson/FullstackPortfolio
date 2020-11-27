import React from "react";
import "assets/css/containers/Contact.scss";
import { getUserData } from "utils/dataClient";


export const ContactAvailability = () => {
  let userinfo = getUserData();

  return (
    <>
      {userinfo.contact.contactMessage.map((value) => (
        <p>{value}</p>
      ))}
    </>
  );
};
