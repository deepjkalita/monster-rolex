import React, {Component} from 'react'
import './App.css';
import {CardList} from './Components/CardList/Cardlist'
import {SearchBox} from './Components/SearchBox/SearchBox'

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[
      ],
      searchField:''
    }
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  handleChange=(e)=>{
    this.setState({searchField:e.target.value},()=>console.log(this.state.searchField))
  }

  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
    return (
      <div className = 'App'>
        <SearchBox placeholder='Search Monsters'
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} >
        </CardList>


      </div>
    );
  }

}

export default App;
