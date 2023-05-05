import React from 'react'
import './BuddyInput.css'

const BuddyInput = (props) => {
	return (
		<div>
			<input className='buddyInput' type='text' onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
		</div>
	)
}

export default BuddyInput