import { Contact } from 'containers/Contact'
import React from 'react'
import { Header } from 'semantic-ui-react'
import "assets/css/containers/ContactHome.scss"

export const ContactHome = () => {
	return (
		<div>
			<Header as="h3" className="contact_header">
        Contact<span className="dot">.</span>
        <div className="line" />
      </Header>

			<Contact />
		</div>
	)
}
