import React from "react";

const tecSkills = ['Skill 1', 'skill 2', 'skill 3']
const softSkills = ['Skill 1', 'skill 2', 'skill 3']


export default function Skills() {
  return (
    <div className=" my-4 rounded-lg p-[var(--main-padding)] card">
<h1 className='title'>Skills</h1>
    <div className={`
    flex flex-col items-center gap-5
    `}>
      <div className="tec skills">
        <span className="block text-center text-xl my-7 p-1 bg-gray-200/70">Technical Skills </span>
        <ul className="flex items-center gap-3 flex-wrap">
         {tecSkills.map((t,idx)=>(
          <li className={`sub-font-size even:bg-violet-100 odd:bg-cyan-100
            rounded-md p-1`} key={idx}>{t}</li>
         ))}
        </ul>
      </div>
      <div className="soft skills">
        <span className="block text-center text-xl my-7 p-1 bg-gray-200/70">Soft Skills </span>
        <ul className="flex items-center gap-3 flex-wrap">
          {softSkills.map((s,idx)=>(
          <li className={`sub-font-size even:bg-violet-100 odd:bg-cyan-100
            rounded-md p-1`} key={idx}>{s}</li>
         ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
