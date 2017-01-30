import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';

export default class AlertDismissable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			alertVisible: true
		};

		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
	}

	render() {
		if (this.state.alertVisible) {
			return (
				<Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
					<h4>Oh yeah! A list of what I have to do!</h4>
					<p>Now it's <b>easy</b> to mark everything I have to do. Just type and press enter. Remembering that it is possible: edit, complete and remove an task. Use the checkbox and actions buttons to do that! Have fun!</p>
					<p>Made by Douglas Wille.</p>
					<p>
						<Button onClick={this.handleAlertDismiss} bsStyle="success">Ok, I got it!</Button>
					</p>
				</Alert>
			);
		}
		return null;
	}

	handleAlertDismiss() {
		this.setState({alertVisible: false});
	}
}
