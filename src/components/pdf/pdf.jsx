import React from 'react'

export default function Pdf(props) {
    
  return (
    <div>
        <h1>Sender:{props.sender}</h1>  
        <h1>Receiver:{props.receiver}</h1>  
        <h1>Credit:{props.credit}</h1>  
        <h1>Debit:{props.debit}</h1>  
        <h1>Created at:{props.createdAt}</h1>  
    </div>
  )
}
