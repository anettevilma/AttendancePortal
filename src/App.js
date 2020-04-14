import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let username = this.state.username;
    if (Number(username)) {
      alert("Username should not be number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      
     
      <form className="App-header App-background" onSubmit={this.mySubmitHandler}>
      <h1>LOGIN </h1>
      <p>Enter username : <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      /></p>
      <p>Enter password : <input
        type='text'
        name='pwd'
        onChange={this.myChangeHandler}
      /></p>
      <br/>
      <input type='submit'/>
      </form>

      
    );
  }
}
export default App;
