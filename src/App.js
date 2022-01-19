import './App.css';
import React, { Component, useEffect } from 'react';
import CardList from './component/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
}
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  
    return (
      <div className='App'>
        <h1 className='title'>Monsters Rolodex</h1>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;


