import React, { useState } from 'react'
import './Buddypopup.css'

const BuddyPopup = (props) => {

	const [active, setActive] = useState('')

	const toggle = () => {
		active === "active" ? setActive("") : setActive("active");
	}


	return (
		<div className='buddyPopup'>
			<div className={'buddyPopup__modal ' + active}>
				{props.children}
			</div>
			<button className='buddyPopup__button' onClick={toggle}>
			</button>
		</div>
	)
}

export default BuddyPopup