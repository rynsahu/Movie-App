import React, { Component } from "react";
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom'

class MoviesTable extends Component {
    columns = [
        { lable: 'Title', path: 'title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        { lable: 'Genre', path: 'genre.name' },
        { lable: 'Stock', path: 'numberInStock' },
        { lable: 'Rate', path: 'dailyRentalRate' },
        { key: 'like',
         content: movie => 
            <Like 
                isLiked={movie.isLiked}
                onClick={() => this.props.onLike(movie)} />},
        { key: 'delete', 
        content: movie =>
            <button 
                onClick={() => this.props.onDelete(movie)} 
                className="btn btn-danger" 
                > Delete
            </button>}
    ];

    render() {
        const { movies, onSort, sortColumn } = this.props;
        return (
            <Table 
                columns={this.columns} 
                onSort={onSort}
                sortColumn={sortColumn}
                data={movies}
            />
        );
    }
};

export default MoviesTable;
