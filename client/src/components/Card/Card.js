import React from "react";

const Card = props => 

<div className="card">
  <div className="card-body">
    <h5 className="card-title text-center">{props.title}</h5>
    <div>{props.body}</div>
  </div>
</div>

export default Card;