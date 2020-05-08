import React, { Component } from 'react'
import Header from "./components/Header"

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
          <Header title="ProFilmable2"/>


        </div>
      </main>
      
    )
  }
}




export default App;
