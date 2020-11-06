import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import logoimg from 'assets/image/main-logo.png'

export const Logo = () => {
	return (
		<div>
			<Image size="medium" src={logoimg} href="/"/>
		</div>
	)
}
