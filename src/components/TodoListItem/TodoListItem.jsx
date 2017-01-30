import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

require("./TodoListItem.scss");

export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			task: null
		};

		this.handleChange = this.handleChange.bind(this);
	}

	renderTaskSection() {
		const {task, isCompleted} = this.props;

		if (this.state.isEditing) {
			return (
				<div className="containerEditItem">
					<form onSubmit={this.onSaveClick.bind(this)}>
						<FormGroup bsSize="large" className="formEditTask">
							<FormControl type="text" value={this.state.task !== null ? this.state.task : task} ref={(input) => {
								this.editInput = input;
							}} onChange={this.handleChange}/>
						</FormGroup>
					</form>
				</div>
			);
		}

		return (
			<div className="containerTasks">
				<Checkbox validationState={this.getValidationState(isCompleted)} checked={isCompleted}
									onChange={this.props.toggleTask.bind(this, task)}>{task}</Checkbox>
			</div>
		);
	}

	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<div className="containerEditButtons">
					<Button bsSize="large" onClick={this.onCancelClick.bind(this)}><Glyphicon glyph="remove"/></Button>
					<Button bsSize="large" onClick={this.onSaveClick.bind(this)}><Glyphicon glyph="ok"/></Button>
				</div>
			);
		}

		return (
			<div className="containerActionButtons">
				<Button bsSize="large" onClick={this.onEditClick.bind(this)}><Glyphicon glyph="pencil"/></Button>
				<Button bsSize="large" onClick={this.props.deleteTask.bind(this, this.props.task)}><Glyphicon
					glyph="remove"/></Button>
			</div>
		);
	}

	render() {
		return (
			<div className="containerItem">
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</div>
		);
	}

	handleChange(event) {
		this.setState({task: event.target.value});
	}

	getValidationState(isCompleted) {
		if (isCompleted) return 'success';
		else if (!isCompleted) return 'error';
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}

	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.editInput.props.value;
		this.props.saveTask(oldTask, newTask);
		this.setState({isEditing: false});
	}
}

TodosListItem.propTypes = {
	task: React.PropTypes.object,
	isCompleted: React.PropTypes.bool,
	toggleTask: React.PropTypes.func,
	deleteTask: React.PropTypes.func,
	saveTask: React.PropTypes.func
};
