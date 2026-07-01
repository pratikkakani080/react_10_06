import React from 'react'

function Button(props) {
  return (
    <button style={{ backgroundColor: props.bgColor }} onClick={props.buttonClick}>
      {props.buttonText || 'Click me'}
    </button>
  )
}

export default Button