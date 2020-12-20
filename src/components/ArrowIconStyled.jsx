import React from 'react'
import styled from "styled-components"

const ArrowIconStyled = styled.i`
    color: ${props => props.arrowColor}
`

function setArrowColor(number) {
    if (number === 0) return "orange"
    else if (number < 0) return "red"
    else return "green"
}

function setArrowType(number) {
    if (number === 0) return "fas fa-arrow-circle-right fa-2x m-1"
    else if (number < 0) return "fas fa-arrow-circle-down fa-2x m-1"
    else return "fas fa-arrow-circle-up fa-2x m-1"
}

export default function ArrowIcon({value}) {
    return (
        <ArrowIconStyled
            arrowColor={setArrowColor(value)}
            className={setArrowType(value)}
        />
    )
}