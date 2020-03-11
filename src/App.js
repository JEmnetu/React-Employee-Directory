import React, {Component} from 'react';

import './App.css';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import friends from './employees.json';



class App extends Component {
  state = { data:friends };

  sortLastName = ()=>{
   
    this.setState({
      data:this.state.data.sort((a,b) => {
        if(a.name.last < b.name.last){
          return -1;
        }
        else if(a.name.last > b.name.last){
          return 1;
        }
        else{
          return 0;
        }
      })
    })
  }
  sortAge = () =>{
    this.setState({
      data:this.state.data.sort((a,b) => {
        if(a.dob.age < b.dob.age){
          return -1;
        }
        else if(a.dob.age > b.dob.age){
          return 1;
        }
        else{
          return 0;
        }
      })
    })
  }

  sortCity = () =>{
    this.setState({
      data:this.state.data.sort((a,b) => {
        if(a.location.city < b.location.city){
          return -1;
        }
        else if(a.location.city > b.location.city){
          return 1;
        }
        else{
          return 0;
        }
      })
    })
  }
  

  
  render() { 
    //console.log(this.state.friends);
    return (   
    <Table>
      <Title 
      sortLastName={this.sortLastName}
      sortAge={this.sortAge}
      sortCity={this.sortCity}
      >JakeTech Employee Roster
      
      </Title>
      
      {this.state.data.map((friend, i)=>(
        <Card 
        title={this.state.data[i].name.title}
        fName={this.state.data[i].name.first} 
        lName={this.state.data[i].name.last}
        age={this.state.data[i].dob.age}
        phone={this.state.data[i].cell}
        email={this.state.data[i].email}
        city={this.state.data[i].location.city}
        usState={this.state.data[i].location.state}
        key={this.state.data[i].eid}
      
        
        
        
        
        /> 
      ))}
     
    
    </Table>);
  }
}
 
export default App;