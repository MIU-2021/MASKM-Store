import React from "react";

const Stars = (props) => {
    let content = [];
    for (let i = 0; i < props.stars; i++) {
        content.push(<i className="fa fa-star"></i>);
    }
    return content;
}

export default Stars