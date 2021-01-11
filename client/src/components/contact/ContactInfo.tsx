import React from "react";
import "assets/css/containers/Contact.scss";

export interface ContactInfoInputs {
  email: string;
  services: { app: string; account: string; profileUrl: string }[];
  location: string;
}

export const ContactInfo = ({
  email,
  services,
  location,
}: ContactInfoInputs) => {
  return (
    <ul>
      {/* {userinfo.contact} */}
      <li>
        <span>Email:</span>
        <a href={"mailto:" + email}>{email}</a>
      </li>
      {services.map((value, key) => (
        <li key={key}>
          <span>{value.app}</span>
          <a href={value.profileUrl}>{value.account}</a>
        </li>
      ))}
      <li>
        <span>Location:</span>
        {location}
      </li>
    </ul>
  );
};
