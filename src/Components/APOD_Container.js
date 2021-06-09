import React from 'react';

const APOD = ({ imageURL, altText }) => {

    return (
        <div className='pod-container'>
            <img src={imageURL} alt={altText} />
        </div>
    )
}

export default APOD