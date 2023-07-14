import React from "react";


const DisplayItem = (props) => {
  //console.log('name', props.name);
  const content = `${props.name} - ${props.price} - ${props.catagory}`;

  const deleteHandler = (event) => {
    props.delete(event.target.id);
    //console.log(event.target.id);
  };

  return (
    <li>
      {content}
      <button type="delete" onClick={deleteHandler} id={props.id}>Delete</button>
    </li>
  );
};

export default DisplayItem;
