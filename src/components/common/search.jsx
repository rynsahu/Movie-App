import React, { Component } from 'react';

class Search extends Component {
    state = { 
        data: ''
    }

    handleChange = ({ currentTarget: input }) => {
        let data = this.state.data;
        data = input.value;
        this.setState({ data });

        this.props.searchQuery(data);
    }

    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <input 
                        value={this.state.data}
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control" 
                        placeholder="Search..."
                    />
                </div>
            </form>
         );
    }
}
 
export default Search;