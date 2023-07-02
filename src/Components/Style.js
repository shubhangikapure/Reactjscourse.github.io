import React from 'react'
import './Style.css'

export default function Style(props) {
    let className=props.primary?'primary':''
    return (
        <div>
        {/*<h1 className={className}>Styling learning</h1>
    */}<h1 className={`${className} font-xl`}>Styling learning</h1>
       
        </div>
    )
}
