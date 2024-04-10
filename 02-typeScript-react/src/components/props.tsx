//export function Props_inline({id, title} : {id:number, title:string}):JSX.Element {  // opcion 1

type Component_props = { id: number , title:string } // opcion 2

//export function Props_inline({id, title} : Component_props):JSX.Element { // opcion 2 desestructurando props en {}
export function Props_inline(props : Component_props):JSX.Element { // opcion 3 a la antugual con props.name...
  return (
    <div key={props.id}>
      <p>{props.title}</p>
      <p>{props.id}</p>
    </div>
  )
}

//export default Component_props  //-----> export opcional