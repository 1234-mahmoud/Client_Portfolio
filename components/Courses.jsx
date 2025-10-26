const cources=['course 1', 'course 2']

export default function Courses() {
  return (
    <div className={`border my-4 rounded-lg p-[var(--main-padding)]`}>
        <h1 className='title'>Courses</h1>
      <ul className="list-disc ml-5">
      {cources.map((c,idx)=><li key={idx}>{c}</li>)}
      </ul>
    </div>
  )
}
