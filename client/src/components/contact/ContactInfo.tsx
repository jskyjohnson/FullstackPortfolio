import React from "react";
import "assets/css/containers/Contact.scss";
import { getUserData } from "utils/dataClient";

export const ContactInfo = () => {

  let userinfo = getUserData();

  return (
    <ul>
      {/* {userinfo.contact} */}
      <li>
        <span>Email:</span>
        <a href={"mailto:" + userinfo.contact.email}>
          {userinfo.contact.email}
        </a>
      </li>
      {userinfo.contact.services.map((value) => (
        <li>
          <span>{value.app}</span>
          <a href={value.profileUrl}>{value.account}</a>
        </li>
      ))}
      <li>
        <span>Location:</span>
        {userinfo.contact.location}
      </li>
    </ul>
  );
};
