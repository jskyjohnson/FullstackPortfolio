import React from "react";
import { Container } from "semantic-ui-react";
import Form from "@rjsf/bootstrap-4";
import { userinfo } from "data/userinfo";

// const userDataUiSchema: any = {
//   content: {
//     items: {
//       items: [{}, { "ui:widget": "textarea" }],
//       "ui:options": { removable: false, addable: false },
//     },
//   },
// };

const userDataSchema: any = {
  type: "object",
  properties: {
    title_name: { type: "string" },
    first_name: { type: "string" },
		last_name: { type: "string" },
		
		
    contact: {
      type: "object",
      properties: {
        email: { type: "string" },
        location: { type: "string" },
        lat: { type: "string" },
        long: { type: "string" },
        contactMessage: { type: "array", items: { type: "string" } },
        services: {
          type: "array",
          items: {
            type: "object",
            properties: {
              app: { type: "string" },
              account: { type: "string" },
              profileUrl: { type: "string" },
            },
          },
        },
      },
    },
    about: {
      type: "object",
      properties: {
        about_pic: { type: "string" },
        about_header_message: { type: "string" },
        bios: {
          //Nested!! Figure it out?
          type: "array",
          minLength: 1,
          title: "Bio Sections",
          description: "The first box is a header",
          items: { type: "array", items: { type: "string" } },
        },
        info: {
          type: "array",
          minLength: 2,
          maxLength: 2,
          title: "items",
          items: {
            type: "array",
            items: [
              {
                title: "Highlight",
                type: ["string", "null"],
              },
              { title: "", type: "string" },
            ],
          },
        },
        softwares: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              category: { type: "string" },
              list: { type: "array", items: { type: "string" } },
            },
          },
        },
        experience: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              job: { type: "string" },
              organization: { type: "string" },
              date: { type: "string" },
              location: { type: "string" },
            },
          },
        },
      },
		},
		footerMessage: { type: "string" }
  },
};

export const UserData = () => {
  const onSubmit: any = () => {
    console.log("SUBMITTING");
  };

  return (
    <div>
      <Container>
        <div>
          <Form
            schema={userDataSchema}
            // uiSchema={userDataUiSchema}
            formData={userinfo}
            onSubmit={onSubmit}
          />
        </div>
      </Container>
    </div>
  );
};
