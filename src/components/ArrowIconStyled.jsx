import React from 'react'
import styled from "styled-components"

export default function ArrowIconStyled({value}) {
    
    function setArrowType(number) {
        if (number === 0) return "fas fa-arrow-circle-right fa-2x m-1"
        else if (number < 0) return "fas fa-arrow-circle-down fa-2x m-1"
        else return "fas fa-arrow-circle-up fa-2x m-1"
    }

    function setArrowColor(number) {
        if (number === 0) return "orange"
        else if (number < 0) return "red"
        else return "green"
    }

    const arrowColor = setArrowColor(value)

    const ArrowIconStyled = styled.i`
        color: ${arrowColor}
    `

    return (
        <ArrowIconStyled
            className={setArrowType(value)}
        />
    )
}
