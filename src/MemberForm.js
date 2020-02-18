import React, { useState } from 'react';

export default function MemberForm(props) {
	const [newMember, setNewMember] = useState({ name: '', email: '', role: '' });

	const handleChange = e => {
		setNewMember({ ...newMember, [e.target.name]: [e.target.value] });
	};

	const submitForm = e => {
		e.preventDefault();
		props.addNewMember(newMember);
		setNewMember({ name: '', email: '', role: '' });
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor='name'>Member Name</label>
			<input
				id='name'
				name='name'
				type='text'
				onChange={handleChange}
				value={newMember.name}
			/>

			<label htmlFor='email'>Email</label>
			<input
				id='email'
				name='email'
				type='text'
				onChange={handleChange}
				value={newMember.email}
			/>

			<label htmlFor='role'>Role</label>
			<input
				id='role'
				name='role'
				type='text'
				onChange={handleChange}
				value={newMember.role}
			/>

			<button type='submit'>Submit</button>
		</form>
	);
}
