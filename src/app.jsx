import React from 'react';
import _ from 'lodash';
import CreateTodo from './components/TodoCreate/TodoCreate.jsx';
import TodosList from './components/TodoList/TodoList';
import AlertDismissable from './components/AlertDismissable/AlertDismissable';

const todos = [
	{
		task: 'Task 1',
		isCompleted: false
	},
	{
		task: 'Task 2',
		isCompleted: true
	}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}

	render() {
		return (
			<div className="containerTodoList">
				<CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
				<AlertDismissable />
				<TodosList
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos: this.state.todos});
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({todos: this.state.todos});
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({todos: this.state.todos});
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({todos: this.state.todos});
	}
}
