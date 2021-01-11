import React from "react";
import "assets/css/containers/Contact.scss";

export const ContactAvailability = ({ contact }: { contact: string[] }) => {
  return (
    <>
      {contact.map((value, key) => (
        <p key={key}>{value}</p>
      ))}
    </>
  );
};
