import React, { useState } from 'react'
import './Buddypopup.css'

const BuddyPopup = (props) => {

	const [active, setActive] = useState('');

	console.log(props.activePopup);


	const toggle = () => {
		active === "active" ? setActive("") : setActive("active");

		if (props.activePopup === false) {
			setActive("");
		}
	}


	return (
		<div className='buddyPopup'>
			<div className={'buddyPopup__modal ' + active}>
				{props.children}
			</div>
			<button className={'buddyPopup__button ' + active} onClick={toggle}>
			</button>
		</div>
	)
}

export default BuddyPopup