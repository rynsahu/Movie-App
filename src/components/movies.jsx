import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'
import Like from './common/like'
import Pegination from './common/pagination'
import { paginate } from '../util/paginate';
import ListGroup from './common/listGroup'
import { filtering } from '../util/filtering';

class Movie extends Component {
    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4,
        getGenres: getGenres(),
        currentGenre: "Action"
    };

    handleDelete(movie) {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
        console.log(movies);
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].isLiked = !movies[index].isLiked;

        this.setState({ movies });
    }

    handlePage = (page) => {
        this.setState({ currentPage: page });
    }

    handleGroup = (genre) => {
        this.setState({ currentGenre: genre })
    }

    render() {
        const { movies: allMovies, getGenres, currentPage, pageSize, currentGenre } = this.state;
        
        const moviesByGroup = filtering(allMovies, currentGenre);

        const { length: count } = moviesByGroup;
        if(count === 0) return <p>There are no movies in database</p>;

        const movies = paginate(moviesByGroup, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <ListGroup 
                        listGroup={getGenres}
                        onGroupChange={this.handleGroup}
                        currentGroup={currentGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing <span>{count}</span> movies in the database.</p>
                    <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>  
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like 
                                            isLiked={movie.isLiked}
                                            onClick={() => this.handleLike(movie)}
                                        />
                                    </td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger" >Delete</button></td>
                                </tr>)}
                            </tbody>
                        </table>
                    <Pegination 
                        itemConts={count}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={this.handlePage}
                    />
                </div>
            </div>
        );
    }
} 

export default Movie; 