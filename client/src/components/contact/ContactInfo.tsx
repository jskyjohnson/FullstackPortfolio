import React from "react";
import "assets/css/containers/Contact.scss";
import { userinfo } from "data/userinfo";

export const ContactInfo = () => {
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
