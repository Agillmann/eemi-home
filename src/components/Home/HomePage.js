import React from "react";
import QRCode from "qrcode.react";
import Card from "../Cards/Card";

const HomePage = () => {
  return (
    <div className="">
      <h1>Home Page</h1>
      <QRCode value="https://maps.google.com/?ll=48.868759,2.3409" />,
      <Card />
    </div>
  );
};

export default HomePage;
