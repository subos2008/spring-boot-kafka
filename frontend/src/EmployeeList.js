import React, { Component } from 'react';
import axios from 'axios';

var panelStyle = {
	maxWidth: '80%',
	margin: '0 auto'
};

export default class EmployeeList extends Component {
	constructor() {
		super();
		this.state = {
			formFields: { name: '', title: '', id: '' },
			employees: []
		};
	}

	componentDidMount() {
		this.fetchEmployeeList();
	}

	fetchEmployeeList() {
		console.log(`in fetchEmployeeList`);
		let obj = this;
		axios
			.get('http://localhost:8080/employees')
			.then(function(response) {
				console.log(response);
				obj.setState((state, props) => {
					return { employees: response.data };
				});
			})
			.catch(function(error) {
				console.log(error.toJSON());
			});
	}

	render() {
		return (
			<div>
				<button className="btn btn-primary" onClick={this.fetchEmployeeList.bind(this)}>
					Refresh List of Employees
				</button>

				<div className="panel panel-primary" style={panelStyle}>
					<div className="panel panel-heading">Employees</div>
					<div className="panel panel-body">
						<div>
							<ul>
								{this.state.employees.map((item, index) => {
									return (
										<li className="employee" key={index}>
											<div>{item.name}</div>
											<div>{item.title}</div>
										</li>
									);
								})}
							</ul>{' '}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
