import React from 'react';
import axios from 'axios';

class MovieSearch extends React.Component{
constructor(props){
    super(props);
    this.state={
        inputValue:'',
        movieId:'0000',
        movieBf:[],
        moviePosterPath:'',
        movieImage:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dataRender = this.dataRender.bind(this)

}

handleChange = (e) =>{
    this.setState({
        inputValue:e.target.value
    });
    console.log("Here is handleChange's test")
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log("We hit!");
    console.log(`${this.state.inputValue}`);
    // fetch data
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4ac5617406e7160eb1ce718f294179fd&query=${this.state.inputValue}`)
        .then(
            response => 
                this.setState({
                    movieId:response.data.results[0].id,
                    movieBf:response.data.results[0].overview

                })
        ).then( response =>
            axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=4ac5617406e7160eb1ce718f294179fd`)
                .then(
                    response =>
                    this.setState({
                        moviePosterPath:response.data.poster_path
                    })
                )   
        )
}

dataRender = (e) =>{
    e.preventDefault();
    // console.log(this.state.movieId)
    console.log("Here is dataRender's Data")
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
            <h4>Movie Brief in return:{this.state.movieBf}</h4>
            <h5>https://image.tmdb.org/t/p/w500/{this.state.moviePosterPath}</h5>
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.moviePosterPath}`} alt="moviePoster" width="500px" hight="100%"/>
        </div>
    );
    }
}


export default MovieSearch;