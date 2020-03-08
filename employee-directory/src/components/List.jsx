import React, { Component } from 'react';
import friends from '../employees.json'

class List extends Component {
    
    
    render() { 
        let items = ['First', 'second', 'third', 'fourth'];
        return ( <div>
            <ul>
                {friends.map((friend, i)=> <li key={i}>{friend.name.title + ` ` + friend.name.last}</li>)}
            </ul>
        </div> );
    }
}
 
export default List;