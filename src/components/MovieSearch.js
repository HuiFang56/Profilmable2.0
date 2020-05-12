import React from 'react';
import axios from 'axios';

class MovieSearch extends React.Component{
constructor(props){
    super(props);
    this.state={
        inputValue:'',
        movieId:['blank space'],
        movieRawData:[],
        movieBf:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange = (e) =>{
    this.setState({
        inputValue:e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log("We hit!");
    console.log(`${this.state.inputValue}`);
    // fetch data
    const fetchData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4ac5617406e7160eb1ce718f294179fd&query=${this.state.inputValue}`)
        .then(
            response => 
                this.setState({
                    movieRawData:response.data.results[0],
                    movieId:response.data.results[0].id,
                    movieBf:response.data.results[0].overview

                })
        ).then(
            console.log(this.state.movieId),
            console.log(this.state.movieRawData)
        )
        
}

render(){

    return(
        <div className='MovieSearchComponent'>
            <h1>This is a test</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search a movie down below:<br />
                    <input value={this.state.inputValue} onChange={this.handleChange}/>
                </label>
            <input type="submit" value="Submit" />
            </form>
            <h4>{this.state.movieBf}</h4>
          
        </div>
    );
    }
}


export default MovieSearch;