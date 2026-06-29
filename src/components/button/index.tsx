import React from 'react'

function Button(props) {
  console.log(props);
  
  return (
    <button style={{ backgroundColor: props.bgColor }}>
      {props.buttonText || 'Click me'}
    </button>
  )
}

export default Button