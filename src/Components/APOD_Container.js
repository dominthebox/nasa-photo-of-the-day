import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export default function APOD ({ imageURL, altText }) {


    return (
        <div className ="pod-container">
            <img src={imageURL} alt={altText} />
        </div>
    );
}

