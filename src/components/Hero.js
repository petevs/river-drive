import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <Wrapper>
            328 River Drive
        </Wrapper>
    )
}

export default Hero

const Wrapper = styled.div`
    display: grid;
    grid-template-column: 1fr;
    justify-content: center;
    align-content: center;
    background-image: url("https://drive.google.com/uc?export=view&id=1Sp4jGu7LIFkay9uZL0HoB4Qnizw0LQMt");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 50px);
    color: #fff;
    font-size: 2.4rem;
`