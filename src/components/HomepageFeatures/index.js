import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import easyIcon from '@site/static/img/easyIcon.png';
import pwaLogo from '@site/static/img/pwaLogo.png';
import secureIcon from '@site/static/img/secureIcon.png';

const FeatureList = [
	{
		title: <Translate>Easy to use</Translate>,
		img: easyIcon,
		description: (
			<Translate>
				Easy to use applications using modern web technologies
			</Translate>
		),
	},
	{
		title: <Translate>Progressive Web Apps (PWA)</Translate>,
		img: pwaLogo,
		description: (
			<Translate>
				Enjoy with faster and more reliable applications, work offline and
				cross-platform.
			</Translate>
		),
	},
	{
		title: <Translate>Security by design</Translate>,
		img: secureIcon,
		description: (
			<Translate>
				We are doing our best to secure our applications and your data.
			</Translate>
		),
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
		<section className={styles.features}>
			<div className='container'>
				<div className='row feature-item'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
				<div className={styles.startFaqs}>
					<h3>
						<Translate>
							Are we producing official applications for Jehovah’s Witnesses?
						</Translate>
					</h3>
					<p>
						<Translate>
							No, we are not. You are free to choose whether to use our
							applications or not. But we strongly recommend all the
							congregation elders approved their use. Also, we are aware that
							there are many similar applications currently available to help
							you to accomplish similar tasks. We are not here to say what is
							the best and what is not. We believe all of these applications are
							good and have their own methods on how to do things, but still
							share the same goal.
						</Translate>
					</p>
				</div>
			</div>
		</section>
	);
}
