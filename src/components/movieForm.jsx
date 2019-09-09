import React from 'react';


const MovieDescription = ({ match, history }) => {
    return(
        <div>
            <h1>Movie Form {match.params.id}</h1>
            <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
        </div>
    );
} 

export default MovieDescription;