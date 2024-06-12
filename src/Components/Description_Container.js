import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    color: dodgerblue;
`
const StyledExplanation = styled.p`
    color: whitesmoke;
`
const StyledDate = styled.h4`
    color: skyblue;
`

const Description = ({ data }) => {
    const {title, date, explanation, media_type} = data;
    return(
        <div className='apod-container'>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <StyledDate>
                    <span className='media-type'>{media_type}</span> for the date of: {date}
                </StyledDate>
                <StyledExplanation>
                    {explanation}
                </StyledExplanation>
        </div>
    )
}

export default Description