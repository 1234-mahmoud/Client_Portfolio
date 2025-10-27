import React from "react";

export default function Education() {
  return (
    <div  className={` my-4 rounded-lg p-[var(--main-padding)] card
        `}>
<h1 className='title'>Education</h1>
    <div
      className={`
        flex flex-col
        `}
    >
        <span className={`main-font-size`}>Degree</span>
        <span className={`sub-font-size`}>unv/instit name</span>
        <span className={`sub-font-size`}>Grade</span>
        <span className={`sub-font-size`}>Gradution Year</span>
    </div>
    </div>
  );
}
