import React, { useState } from 'react';

export default function MemberForm() {
	const [newMember, setNewMember] = useState({ name: '', email: '', role: '' });

	const handleChange = e => {
		setNewMember({ name: [e.target.value] });
	};

	return (
		<form>
			<label htmlFor='name'>Member Name</label>
			<input id='name' name='name' type='text' onChange={handleChange} />
		</form>
	);
}
