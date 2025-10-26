import React from "react";

export default function Skills() {
  return (
    <div className="border my-4 rounded-lg p-[var(--main-padding)]">
<h1 className='title'>Skills</h1>
    <div className={`
    flex flex-col items-center gap-5
    `}>
      <div className="tec skills">
        <span className="block text-center">Technical Skills </span>
        <ul className="flex items-center gap-3 flex-wrap">
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
        </ul>
      </div>
      <div className="soft skills">
        <span className="block text-center">Soft Skills </span>
        <ul className="flex items-center gap-3 flex-wrap">
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
