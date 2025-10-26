import projects_data from '../data/projects.json'
export default function Projects() {
  return (
    <div className={`border my-4 rounded-lg p-[var(--main-padding)]`}>
        <h1 className='title'>Projects</h1>
    {projects_data.map((p)=>(
         <div className="exp" key={p.id}>
         <span>{p.project_name}</span>
      <span className={`flex items-center gap-10`}>    
        <span className={`flex items-center gap-3`}>
          <span>Start Date:{p.stDate}</span>
          to
          <span>End Date:{p.endDate}</span>
        </span>
      </span>
      <span>Responsibilities:</span>
      <ol className={`list-disc ml-5 flex flex-col`}>
        {p.tasks.map((t)=>(
            <li key={t}>
                {t}
            </li>
        ))}
      </ol>
     </div>
    ))}
    </div>
  )
}
