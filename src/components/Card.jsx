import React from 'react'

const Card = ({title}) => {
  return (
    <div style={{width:"234px"}}>
        <img style={{width:"134px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Radha_Krishna_10.jpg/800px-Radha_Krishna_10.jpg" alt="" />
        <p>{title}</p>
    </div>
  )
}

export default Card