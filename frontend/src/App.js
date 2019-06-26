import React from 'react';
import './App.css';
import NewEmployee from './NewEmployee';
import EmployeeList from './EmployeeList';

function App() {
	return (
		<div>
			<div className="App">
				<NewEmployee />
			</div>
			<div>
				<EmployeeList />
			</div>
		</div>
	);
}

export default App;
