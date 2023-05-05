import React from 'react'
import './Loader.css'

const Loader = () => {
	return (
		<div className='loader__wrap'>
			<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	)
}

export default Loader