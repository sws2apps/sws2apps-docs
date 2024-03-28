import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProductsItems from '../components/Products';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={translate({
				message: 'Help and documentations for Scheduling Workbox System applications',
				description: 'SEO website description',
			})}
		>
			<main style={{ marginBottom: '50px' }}>
				<HomepageFeatures />

				<ProductsItems />
			</main>
		</Layout>
	);
}
