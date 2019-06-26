import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	maxWidth: '80%',
	margin: '0 auto'
};

export default class NewEmployee extends Component {
	constructor() {
		super();
		this.state = {
			formFields: { name: '', title: '', id: '' }
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let formFields = { ...this.state.formFields };
		formFields[event.target.name] = event.target.value;
		this.setState({ formFields });
	}

	render() {
		return (
			<div>
				<div className="panel panel-primary" style={panelStyle}>
					<div className="panel panel-heading">React Form - New Employee</div>
					<div className="panel panel-body">
						<form onSubmit={this.handleSubmit}>
							<strong>Name:</strong> <br />{' '}
							<input
								type="text"
								name="name"
								placeholder="Full Name"
								onChange={this.handleChange}
								value={this.state.formFields.name}
							/>{' '}
							<br />
							<strong>Title:</strong> <br />
							<input
								type="text"
								name="title"
								placeholder="Job Title"
								onChange={this.handleChange}
								value={this.state.formFields.title}
							/>{' '}
							<br />
							<input type="submit" value="Create New Employee" />
						</form>
					</div>
				</div>
			</div>
		);
	}

	handleSubmit(event) {
		const formFields = this.state.formFields;
		axios
			.post('http://localhost:8080/api/kafka/new_employee', formFields, { responseType: 'text' })
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
		event.preventDefault();
	}
}
