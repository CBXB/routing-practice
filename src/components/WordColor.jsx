import React from 'react'

const WordColor = (props) => {
    return(
        <div style={{backgroungColor: props.bg, color: props.txt}}>
            <h1>The word is: {props.word}</h1>
        </div>
    )
}

export default WordColor;
