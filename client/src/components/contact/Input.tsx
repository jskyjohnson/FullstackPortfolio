import React from 'react'
import "assets/css/containers/Contact.scss";

export interface inputTypes{
	type: string,
	name: string,
	id: string,
	placeholder: string
}

export const Input = ({type, name, id, placeholder}:inputTypes ) => {
	console.log(type);
	return (
		type === 'textarea'? (
			<textarea id={id} name={name} placeholder={placeholder} />
		): (
			<input type={type} id={id} name={name} placeholder={placeholder} className="contact_input" />
		)
	)
}
