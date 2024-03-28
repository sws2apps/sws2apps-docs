import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import ProductItem from './ProductItem';

const PRODUCTS = [
	{
		title: 'Organized',
		logo: './img/organized-logo.svg',
		repository: 'organized-app',
	},
];

export default function ProductsItems() {
	return (
		<div className={`container`}>
			<h2>
				<Translate>Products</Translate>
			</h2>
			<p>
				<Translate>Please find below some of the projects we built.</Translate>
			</p>

			<div className={styles.products}>
				{PRODUCTS.map((product) => (
					<ProductItem key={product.title} repository={product.repository} logo={product.logo} title={product.title} />
				))}
			</div>
		</div>
	);
}
