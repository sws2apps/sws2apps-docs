import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: <Translate>Easy to use</Translate>,
		img: './img/easyIcon.png',
		description: <Translate>Easy to use applications using modern web technologies</Translate>,
	},
	{
		title: <Translate>Progressive Web Apps (PWA)</Translate>,
		img: './img/pwaLogo.png',
		description: <Translate>Enjoy with faster and more reliable applications, work offline and cross-platform.</Translate>,
	},
	{
		title: <Translate>Security by design</Translate>,
		img: './img/secureIcon.png',
		description: <Translate>We are doing our best to secure our applications and your data.</Translate>,
	},
];

function Feature({ title, img, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<img className={styles.featureImg} src={img} alt='feature logo' />
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
		</div>
	);
}
