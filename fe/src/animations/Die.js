import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Die.css'

class Die extends Component{ 
render(){ 
	const {face, rolling} = this.props 

	// Using font awesome icon to show 
	// the exactnumber of dots 
	return <FontAwesomeIcon icon={`dice-${face}`} className={`Die ${rolling && 'Die-shaking'}`} />
} 
} 

export default Die
