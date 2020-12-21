import React, { Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component {

	// Face numbers passes as default props 
	static defaultProps = {
		sides: ['one', 'two', 'three',
			'four', 'five', 'six'],
		rollAll: false
	}
	constructor(props) {
		super(props)


		// States 
		this.state = {
			key: this.props,
			die1: 'one',
			rolling: false,
			rollAll: this.props,
		}
		this.roll = this.roll.bind(this)
	}

	componentDidMount() {
		this.props.onRef(this)
	  }
	componentWillUnmount() {
		this.props.onRef(null)
	 }
	// componentDidUpdate() {
	// 	const { rollAll } = this.state
	// 	if (rollAll === true) {
	// 		this.roll()
	// 		this.setState({rollAll:false})
	// 	};
	// }


	roll() {
		const { sides } = this.props
		this.setState({
			// Changing state upon click 
			die1: sides[Math.floor(Math.random() * sides.length)],
			rolling: true,
		})

		// Start timer of one sec when rolling start 
		setTimeout(() => {

			// Set rolling to false again when time over 
			this.setState({ rolling: false })
		}, 1000)
	}

	render() {
		const { die1, rolling } = this.state

		return (
			<div className='RollDice'>
				<div className='RollDice-container' onClick={this.roll}>
					<Die face={die1} rolling={rolling} />
				</div>
			</div>
		)
	}
}

export default RollDice