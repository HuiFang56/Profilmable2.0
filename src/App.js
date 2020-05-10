import React, { Component } from 'react';
import Header from "./components/Header";
import MovieSearch from "./components/MovieSearch";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        
    }
  } 



  render(){
    
    return(
      <main>
        <div className="appcomponent">
          <Header title="ProFilmable 2"/>
          <MovieSearch />


        </div>
      </main>
      
    )
  }
}




export default App;
