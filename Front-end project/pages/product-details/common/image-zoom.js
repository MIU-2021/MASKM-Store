import React from 'react';
import { Media } from 'reactstrap';

const ImageZoom = (props) => {
    const { image } = props;

    return (
        <Media src={`${image}`}  className="img-fluid image_zoom_cls-0" />
    );
}

export default ImageZoom;
