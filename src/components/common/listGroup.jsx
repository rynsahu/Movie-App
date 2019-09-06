import React from 'react';

const ListGroup = ({ listGroup, onGroupChange, currentGroup }) => {
    return(
        <ul className="list-group">
            {listGroup.map(group => 
                <li 
                    key={group._id} 
                    className={group.name === currentGroup ? "list-group-item active":"list-group-item"}
                    style={{ cursor: "pointer" }}
                    onClick={() => onGroupChange(group.name)}>{group.name}
                </li>
            )}
        </ul>
    );
}

export default ListGroup