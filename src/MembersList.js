import React from 'react';

export default function MembersList(props) {
	return (
		<div className='members'>
			{props.members.map(mem => {
				return (
					<div className='member' key={mem.email}>
						<h2>Name: {mem.name}</h2>
						<h3>Email: {mem.email}</h3>
						<h4>Role: {mem.role}</h4>
					</div>
				);
			})}
		</div>
	);
}
