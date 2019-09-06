import React from 'react';

const Like = ({ isLiked, onClick }) => {
    let classes = "fa fa-heart-o";
    if(isLiked) classes = "fa fa-heart";

    return <i onClick={() => onClick()} className={classes} style={{cursor: "pointer"}} aria-hidden="true"></i>;
}

export default Like;