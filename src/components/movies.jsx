import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pegination from "./common/pagination";
import { paginate } from "../util/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Search from './common/search';
import _ from 'lodash';

class Movie extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    sortColumn: { path: 'title', order: 'asc' },
    query: ''
  };

  componentDidMount() {
    const genres = [{ _id: '', name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres});
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].isLiked = !movies[index].isLiked;

    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = [...this.state.movies];

    const index = movies.indexOf(movie._id);
    movies.splice(index, 1);

    this.setState({ movies });
  };

  handlePage = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData(query) {
    const { movies: allMovies, currentPage, pageSize, selectedGenre, sortColumn } = this.state;

    let filtered;
    if(query) {
      filtered = allMovies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
    }
    else {
      filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    }

    // const filtered = selectedGenre && selectedGenre._id
    //     ? allMovies.filter(m => m.genre._id === selectedGenre._id)
    //     : allMovies;
    
    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const movies = paginate(sorted, currentPage, pageSize);

    return { movies, totalCount: filtered.length };
  }

  onSearchQuery = query => {
    this.setState({ query });
  }

  render() {
    const { genres, currentPage, pageSize, selectedGenre, sortColumn, query } = this.state;
    const { movies, totalCount } = this.getPagedData(query);

    return (
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <Link 
            to="/movies/new"
            className="btn btn-primary Movie-btn"
          >
              New Movie
          </Link> 
          <p>
            Showing <span>{totalCount}</span> movies in the database.
          </p>
          <Search searchQuery={this.onSearchQuery}/>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pegination
            itemConts={totalCount}
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
