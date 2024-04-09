export function Props_inline({id, title} : {id:number, title:string}):JSX.Element {
  return (
    <div key={id}>
      <p>{title}</p>
      <p>{id}</p>
    </div>
  )
}