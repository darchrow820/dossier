import React from 'react'
import BuddyCard from '../BuddyCard/buddyCard'

const BuddyPage = (props) => {
	return (
		<div>
			{props.buddies.map(buddy => <BuddyCard key={buddy.id} data={buddy} />)}
			{/* {props.buddies.map(buddy => <div>{buddy.phone}</div>)} */}
		</div>
	)
}

export default BuddyPage