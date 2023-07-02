import React from 'react'

 const StateandPropsDestrucing=props=> {
    const{name,age}=props;
    return (
        <div>
            <h1>Hello{name} a.k.a{age}</h1>
        </div>
    )
}
export default StateandPropsDestrucing