import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
 <div className="box btn_shadow" >
      <div className="img d_flex justify_center align_center">
        <img src={props.image} alt="" />
      </div>
      <div className="category d_flex">
        <span>{props.category}</span>
      </div>
      <div className="title">
        <h2 style={{ color: "#453385" }}>{props.title}</h2>
      </div>
    </div>
    </>
  );
};

export default Card;
