import React from 'react';
import './Card.css';
const Card = (props) => {

    

    return ( 
    <div className="card" style={{backgroundColor:'#f4f4f4', marginRight:200}}>
        <div className="content">
    <h1>{props.title + '. '  + props.fName + ' ' + props.lName}</h1>
    <h6>Age: {props.age} | Phone Number: {props.phone} | Email: {props.email} | {props.city}, {props.usState}</h6>
    
        </div>
    </div> );
}
 
export default Card;