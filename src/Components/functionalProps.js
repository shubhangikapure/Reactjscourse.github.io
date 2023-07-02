import React from 'react'

//  function Greet() {
//     return (
//         <div>
//             Hii
//         </div>
//     )
// }
const functionalProps=(props)=>{
console.log(props)
return(
    <div>
    <h1>Hello World{props.name} aka {props.age}</h1>
    {props.children}
    </div>
)
}
export default functionalProps;