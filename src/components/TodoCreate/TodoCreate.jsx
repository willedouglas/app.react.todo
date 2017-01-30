import React from 'react';
import _ from 'lodash';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

export default class TodosCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	renderHelpBlock() {
		if (!this.state.error) {
			return <HelpBlock >Press enter to add a new task.</HelpBlock>;
		}

		return <HelpBlock>{this.state.error}</HelpBlock>;
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<FormGroup bsSize="large" className="formInputTask" validationState={this.getValidationState()}>
					<FormControl type="text" placeholder="What do I need to do?" value={this.state.value} ref={(input) => {
						this.createInput = input;
					}} onChange={this.handleChange}/>
					<FormControl.Feedback />
					{this.renderHelpBlock()}
				</FormGroup>
			</form>
		);
	}

	handleChange(event) {
		this.genericSetState({value: event.target.value});
	}

	handleCreate(event) {
		event.preventDefault();

		const createInput = this.createInput;
		const task = createInput.props.value;
		const validateInput = this.validateInput(task);

		if (validateInput) {
			this.genericSetState({error: validateInput});
			return;
		}

		this.genericSetState({error: null});
		this.props.createTask(task);
		this.genericSetState({value: ''});
	}

	getValidationState() {
		const task = this.state.value;
		const validate = this.validateInput(task);

		if (!validate) return 'success';
		else if (validate) return 'error';
	}

	genericSetState(params) {
		this.setState(params)
	}

	validateInput(task) {
		if (!task) {
			return 'Please enter a task.';
		} else if (_.find(this.props.todos, todo => todo.task === task)) {
			return 'Task already exists.';
		} else {
			return null;
		}
	}
}

TodosCreate.propTypes = {
	createTask: React.PropTypes.func,
	todos: React.PropTypes.array
};
