import React from 'react'

const Button = (props, children) => {
	return (
		<button className={props.className} onClick={props.onButtonClick}>{props.name}</button>
	)
}

export default Button