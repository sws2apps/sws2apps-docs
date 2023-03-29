import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function HomepageFeatures() {
	return (
		<div className={`container ${styles.features}`}>
			<h2>
				<Translate>Welcome!</Translate>
			</h2>
			<p>
				<Translate>
					Our team, the Scheduling Workbox System team, is very happy to welcome you to our website. Our goal is to build modern
					web technologies to assist congregations of Jehovah’s Witnesses to accomplish their tasks.
				</Translate>
			</p>
			<p>
				<Translate>To learn more about the applications that we built, please visit the Products page.</Translate>
			</p>
		</div>
	);
}
