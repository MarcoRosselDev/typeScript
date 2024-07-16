/* 
* Find the user in the array by the id
* Use Object.assign to update the found user in place.
* Check MDN if you need help with using Object.assign
*/

// Example updates:
/* updateUser(1, {username: "new_john_doe"})
updateUser(4, {role: "contributor"})

console.log(user); */
import { User } from "./types"
import { users } from "./people"

console.log(users);
type Obj = {
  role?: "member"|"contributor"|"admin"
  username?: string
}

function updateUser(id_obj:number, obj : Obj) {
  //const user_update: User = {id: id, role:"admin"}
  users.forEach(item => {
    if (item.id === id_obj) {
      item = Object.assign(item, obj)
    }
  })
  if (obj.role) {
    users.push({id: id_obj, role: obj.role, username: "nombre_generico"})
  } else if (obj.username) {
    users.push({id: id_obj, role: "contributor", username: obj.username})
  } else {
    throw new Error("No espesificase un rol o nombre de usuario")
  }
}
setTimeout(() => {
  updateUser(4, {role: "member"})
  console.log(users);
  updateUser(7, {username: "marco_rossel"})
}, 3000)

setTimeout(() =>{
  updateUser(7, {role: "member"})
}, 2000)

//updateUser(4, {username: "marco_rossel"})