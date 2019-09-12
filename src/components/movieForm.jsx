import React from 'react';
import Form from './common/form';
import Joi from 'joi';
import { saveMovie, getMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'

class MovieForm extends Form {
    state = { 
        data: {
            title: '',
            numberInStock: '',
            genreId: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label('Title'),
        genreId: Joi.string()
            .required()
            .label('Genre'),
        numberInStock: Joi.number()
            .min(0)
            .max(100)
            .required()
            .label('Number in Stock'),
        dailyRentalRate: Joi.number()
            .min(0)
            .max(10)
            .required()
            .label('Daily Rental Rate')
    }

    componentDidMount() {
        const genres = [{_id: '', name: ''} ,...getGenres()];
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if(movieId === 'new') return;

        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace('/not-found');

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            numberInStock: movie.numberInStock,
            genreId: movie.genreId,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit(e) {
        //server call
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1 className="headings">Movie Form</h1>
                <form onSubmit={this.handleSubmit} className="form-style">
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput('numberInStock', 'Number in Stock')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton("Save")}
                </form>
            </React.Fragment>
         );
    }
}
 
export default MovieForm;