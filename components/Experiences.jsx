import Experiences_data from '../data/Experiences.json'

export default function Experiences() {
  return (
    <div className={`border my-4 rounded-lg p-[var(--main-padding)]`}>
        <h1 className='title'>Experiences</h1>
   {
    Experiences_data.map((e)=>(
          <div className="exp" key={e.id}>
         <span>Job Title: {e.job_title}</span>
      <span className={`flex items-center gap-10`}>
        <span>Comp Name: {e.comp_name}</span>
        <span className={`flex items-center gap-3`}>
          <span>Start Date: {e.stDate}</span>
          to
          <span>End Date: {e.endDate}</span>
        </span>
      </span>
      <span>Responsibilities:</span>
      <ol className={`list-decimal ml-5`}>
       {e.tasks.map((t)=>(
        <li key={t}>{t}</li>
       ))}
      </ol>
     </div>
    ))
   }
    </div>
  );
}
