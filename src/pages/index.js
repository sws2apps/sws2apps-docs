import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={translate({
				message:
					'Help and documentations for users of Congregation Program for Everyone applications',
				description: 'SEO website description',
			})}
		>
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
