import React from 'react';

class MovieSearch extends React.Component{
constructor(props){
    super(props);
    this.state={
        inputValue:'A movie Name',
    }
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log("We hit!");
}

handleChange = (e) =>{
    this.setState({
        inputValue:e.target.value
    });
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
        </div>
    );
    }
}


export default MovieSearch;