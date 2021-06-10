import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const StyledDiv = styled.div`
    background-color: lightgray;
`

const APOD = ({ imageURL, altText }) => {

    return (
        <StyledDiv className='pod-container'>
            <StyledImg src={imageURL} alt={altText} />
        </StyledDiv>
    )
}

export default APOD