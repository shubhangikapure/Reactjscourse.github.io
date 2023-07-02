import React from 'react'

 function Memo({name}) {
   console.log('Render memo');
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(Memo) 