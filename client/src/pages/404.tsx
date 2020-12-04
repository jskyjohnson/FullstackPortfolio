import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import 'assets/css/pages/404.scss'

export const page404 = () => {
	return (
		<div>
      <Header as="h2" className="fourofour_header">
        404<span className="dot">.</span>
        <div className="line" />
      </Header>
      <div className="fourofour_clone">404</div>

			<Container>
				<p className="page_description">The page you are looking for couldn't be found! Something might have been misspelled, removed, or maybe the internet is broken.</p>

				<a className="backtohomepage" href="/">Back to the homepage?</a>

			</Container>
    </div>
	)
}
