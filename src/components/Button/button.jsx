import React from 'react'

const Button = (props) => {
	return (
		<button class={props.className}>{props.name}</button>
	)
}

export default Button