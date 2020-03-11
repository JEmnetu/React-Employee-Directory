import React from 'react';

const Title = (props) => {
    return ( <>
    <h1 style={{textAlign:"center", backgroundColor:"white", width:"40%", marginLeft:"13em"}}>{props.children}</h1> 
    
    <button className="btn btn-primary" onClick={props.sortLastName} style={{marginLeft:"2em"}}>Sort by Last Name</button>
    <button className="btn btn-primary" onClick={props.sortAge}>Sort by Age</button>
    <button className="btn btn-primary" onClick={props.sortCity}>Sort by City</button>
    </> );
}
 
export default Title;