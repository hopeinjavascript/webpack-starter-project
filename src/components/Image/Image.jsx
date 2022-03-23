import React from "react";
import dog from "../../imgs/dog.jpg";
import "./Image.scss";

const Image = () => {
  return (
    <>
      <h1>Dog Image</h1>
      <img src={dog} alt="cute little dog" />;
    </>
  );
};

export default Image;
