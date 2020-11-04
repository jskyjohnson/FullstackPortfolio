import { HomeTitle } from 'containers/home/HomeTitle';
import React, {Fragment} from 'react';
import { PageHeader } from '../containers/pageheader/PageHeader';


export const Home = () => {
	return (
		<Fragment>
				<PageHeader />

				<section>
					<HomeTitle />
				</section>
				Hello this is the home page!
		</Fragment>
	)
}
