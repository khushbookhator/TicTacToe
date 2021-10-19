import React, { useState } from 'react'
import { BoxDiv } from './box.style'

const Box = ({value, handleBoardValues, index}) => {

    
    
    return (
        <BoxDiv onClick={() => handleBoardValues(index)}>
            <h4>{value}</h4>
        </BoxDiv>
    )
}

export {Box}
