import React, { useState } from 'react';
import MembersList from './MembersList';
import MemberForm from './MemberForm';
import './App.css';

function App() {
	const [members, setMembers] = useState([
		{
			name: 'Charles',
			email: 'charles@charlesdev.com',
			role: 'Full Stack Developer'
		}
	]);

	return (
		<div className='App'>
			<h1>Team Members</h1>
			<MembersList members={members} />
			<MemberForm addMember={setMembers} />
		</div>
	);
}

export default App;
