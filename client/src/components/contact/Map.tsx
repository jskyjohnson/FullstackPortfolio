import React from "react";

import "assets/css/containers/Contact.scss";

export interface MapInputType {
  lat: string;
  long: string;
}

export const Map = ({ lat, long }: MapInputType) => {
  return (
    <div className="contact_map">
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${long}&hl=en&z=10&output=embed`}
        title={"Contact Map"}
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
};
