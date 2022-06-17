import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	// prop types restriction
	static propTypes = {
		todos: PropTypes.array.isRequired,
		checkTodo: PropTypes.func.isRequired
	}

	render() {
		const {todos, checkTodo, deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map(todoObj => {
						return <Item key={todoObj.token} {...todoObj} 
								checkTodo={checkTodo} deleteTodo={deleteTodo}/>
					})
				}
			</ul>
		)
	}
}