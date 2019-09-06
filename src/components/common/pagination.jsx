import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pegination = ({ itemConts, onPageChange, currentPage, pageSize }) => {
    const pageCount = Math.ceil(itemConts / pageSize);
    if( pageCount === 1 ) return null;
    const pages = _.range(1, pageCount + 1);
    
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => 
                    <li key={page} className={page === currentPage ? "page-item active":"page-item"}>
                        <button onClick={() => onPageChange(page)} className="page-link" style={{ cursor: "pointer" }}>
                            {page}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

Pegination.propTypes = {
    itemConts: PropTypes.number.isRequired, 
    currentPage : PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired 
}

export default Pegination;