import volunteer_data from '../data/Volunter.json'

export default function Volunteering() {
  return (
     <div className={`border my-4 rounded-lg p-[var(--main-padding)]`}>
        <h1 className='title'>Volunteering</h1>
    {
        volunteer_data.map((v)=>(
             <div className="exp flex flex-col" key={v.id}>
         <span>Org name: {v.org_name}</span>
         <span>Role: {v.role}</span>
      <span className={`flex items-center gap-10`}>    
        <span className={`flex items-center gap-3`}>
          <span>Start Date: {v.stDate}</span>
          to
          <span>End Date: {v.endDate}</span>
        </span>
      </span>
      <span>Responsibilities:</span>
      <ol className={`list-disc ml-5`}>
       {v.tasks.map((t)=><li key={t}>{t}</li>)}
      </ol>
     </div>
        ))
    }
    </div>
  )
}
