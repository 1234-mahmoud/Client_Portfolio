import React from "react";

export default function Education() {
  return (
    <div  className={`border my-4 rounded-lg p-[var(--main-padding)]
        `}>
<h1 className='title'>Education</h1>
    <div
      className={`
        flex flex-col
        `}
    >
        <span>Degree</span>
        <span>unv/instit name</span>
        <span>Grade</span>
        <span>Gradution Year</span>
    </div>
    </div>
  );
}
