import React from 'react'

const NestedComponents = ({payload}) => {

// const N1 = () => <N5/> 
// const N1 = () => <N2/> 
// const N2 = () => <N3/> 
// const N3 = () => <N4/> 
// const N4 = () => <N5/> 
// const N5 = () => <N6/> 

// const N6 = () => {
//     return(
//         <div>N6</div>
//     )
// }
    console.log(payload)
    return (
        <div>
            {/* {payload.map( USD => USD.price)} */}
            {/* <N6 /> */}
        </div>
    )
}

export default NestedComponents
