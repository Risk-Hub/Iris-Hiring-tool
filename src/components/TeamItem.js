import React from "react";

function TeamItem({ image, name }) {
  return (
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default TeamItem;