import React, { Component } from 'react';

class List extends Component {
    
    
    render() { 
        let items = ['First', 'second', 'third', 'fourth'];
        return ( <div>
            <ul>
                {items.map((item, i)=> <li key={i}>{item}</li>)}
            </ul>
        </div> );
    }
}
 
export default List;