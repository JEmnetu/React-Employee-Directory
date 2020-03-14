import React from 'react';

const Title = (props) => {
    return ( <>
    {/* <h1 style={{textAlign:"center", backgroundColor:"white", width:"40%", marginLeft:"13em"}}>{props.children}</h1>  */}
    <header style={{textAlign:"center", marginBottom:"2em", marginTop:13}}><span style={{color:"white", backgroundColor:"black", padding:"1em"}}>{props.children}</span></header>
    
    <button className="btn btn-warning" onClick={props.sortLastName} style={{marginLeft:"2em"}}>Sort by Last Name</button>
    <button className="btn btn-danger" onClick={props.sortAge}>Sort by Age</button>
    <button className="btn btn-light" onClick={props.sortCity}>Sort by City</button>
    <button className="btn btn-dark" onClick={props.filterDem}>Filter by Age</button>
    </> );
}
 
export default Title;