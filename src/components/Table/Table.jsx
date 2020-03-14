import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';



// const Table = (props) => {
//     return ( <div className="wrapper container-fluid" style={{backgroundColor:'teal', height:"100%"}}>{props.children}</div> );
// }
 
// export default Table;


class Table extends Component {
    
    
    render() { 
        
        
        return ( <div className="wrapper container-fluid" style={{backgroundColor:'teal', height:"100vh", overflowY:"scroll"}}>{this.props.children}
          <Footer />
        </div> );
        
    }
}
 
export default Table;