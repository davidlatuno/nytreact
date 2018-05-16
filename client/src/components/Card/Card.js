import React from "react";

const Card = props => 

<div class="card">
  <div class="card-body">
    <h5 class="card-title text-center">{props.title}</h5>
    <div>{props.body}</div>
  </div>
</div>

export default Card;