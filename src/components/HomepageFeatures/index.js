import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';
import easyIcon from '@site/static/img/easyIcon.png';
import pwaLogo from '@site/static/img/pwaLogo.png';
import secureIcon from '@site/static/img/secureIcon.png';
import Link from '@docusaurus/Link';

const FeatureList = [
	{
		title: <Translate>Easy to use</Translate>,
		img: easyIcon,
		description: <Translate>Easy to use applications using modern web technologies</Translate>,
	},
	{
		title: <Translate>Progressive Web Apps (PWA)</Translate>,
		img: pwaLogo,
		description: <Translate>Enjoy with faster and more reliable applications, work offline and cross-platform.</Translate>,
	},
	{
		title: <Translate>Security by design</Translate>,
		img: secureIcon,
		description: <Translate>We are doing our best to secure our applications and your data.</Translate>,
	},
];

function Feature({ title, img, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<img className={styles.featureImg} src={img} alt='sws2apps logo' />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<div className={`container ${styles.welcome}`}>
			<Admonition type='info'>
				<p>
					<Translate>
						This documentation is still a work in progress. Updated content will be posted as soon as they are available.
					</Translate>
				</p>
			</Admonition>

			<h2>
				<Translate>Welcome!</Translate>
			</h2>
			<p>
				<Translate>
					Our team, the Scheduling Workbox System team, is very happy to welcome you to our website. Our goal is to build modern
					web technologies to assist congregations of Jehovah’s Witnesses to accomplish their tasks.
				</Translate>
			</p>

			<div className={styles.features}>
				<div className='row feature-item'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
			<p>
				<Translate
					id='homepage.productsPage'
					values={{
						productsLink: (
							<Link to='./docs/category/products'>
								<Translate id='homepage.productsPage.linkLabel'>Products</Translate>
							</Link>
						),
					}}
				>
					{'To learn more about the applications that we built, please visit the {productsLink} page'}
				</Translate>
			</p>
		</div>
	);
}
