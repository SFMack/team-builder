import React from 'react';

export default function MembersList(props) {
	return (
		<div className='members'>
			{props.members.map(member => {
				return (
					<div className='member' key={member.email}>
						<h2>Name: {member.name}</h2>
						<h3>Email: {member.email}</h3>
						<h4>Role: {member.role}</h4>
					</div>
				);
			})}
		</div>
	);
}
