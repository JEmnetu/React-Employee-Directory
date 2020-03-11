import React, { Component } from 'react';



// const Table = (props) => {
//     return ( <div className="wrapper container-fluid" style={{backgroundColor:'teal', height:"100%"}}>{props.children}</div> );
// }
 
// export default Table;


class Table extends Component {
    
    
    render() { 
        
        
        return ( <div className="wrapper container-fluid" style={{backgroundColor:'teal', height:"100%"}}>{this.props.children}
          
        </div> );
    }
}
 
export default Table;