import React from 'react'
import Person from './Person'

export default function ListRendering() {
    const name=['shubhangi','omkar','om']
    const persons=[
        {
            id:1,
            name:'shubhangi',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'omkar',
            age:30,
            skill:'civil'
        },
        {
            id:1,
            name:'mane',
            age:30,
            skill:'mern'
        }
    ]
    // const personsList = persons.map(person => <Person key={person.id} person={person} />)

const nameList=name.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    return<div>{nameList}</div>
}
