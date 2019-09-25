import React,{ Component } from 'react';
import firebase from 'firebase'
import FileUpload from './FileUpload';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      user: null
    };
  }

  componentWillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    })
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  handleAuth (){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesion`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton (){
    //Si el user esta loggued
    if (this.state.user) {
      return (
        <div>
          <img width="150" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p> Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}> Salir </button>
          <FileUpload/>
        </div>
      );
    }else {
      return(
        <button onClick={this.handleAuth}> Login con Google </button>
      );
    }


  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
            <h2>Pseudogram</h2>
        </div>
        <p ClassName = "App/intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}
export default App;
