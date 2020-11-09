import React, { useState } from "react";

import "assets/css/containers/Contact.scss";
import { Input } from "./Input";

export const ContactForm = () => {
  const [status, setStatus] = useState("");

  let submitForm = (ev: any) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  // const sSubmit = (e: any) => {
  //   e.preventDefault();
  //   const form = e;
  //   const data = new FormData(form);
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(form.method, form.action);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //     if (xhr.status === 200) {
  //       form.reset();
  //       setStatus("SUCCESS");
  //     } else {
  //       setStatus("ERROR");
  //     }
  //   };
  //   xhr.send(data);
  // };

  return (
    <form
      onSubmit={submitForm}
      id="contact_form"
      action="https://formspree.io/mwkrqboz"
      method="post"
    >
      <Input type={"text"} id={"name"} name={"name"} placeholder={"Name"} />
      <Input type={"email"} id={"email"} name={"email"} placeholder={"Email"} />
      <Input
        type={"textarea"}
        id={"message"}
        name={"message"}
        placeholder={"Message"}
      />

      {status === "SUCCESS" ? (
        <p>Thanks!</p>
      ) : (
        <button type={"submit"}>Send</button>
      )}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
};
