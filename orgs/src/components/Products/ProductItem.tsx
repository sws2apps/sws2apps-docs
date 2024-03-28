import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type ProductItemType = {
	repository: string;
	title: string;
	logo: string;
};

const ProductItem = ({ repository, title, logo }: ProductItemType) => {
	const [description, setDescription] = useState('');
	const [stars, setStars] = useState(0);

	useEffect(() => {
		const fetchProductInfo = async () => {
			const res = await fetch(`https://api.github.com/repos/sws2apps/${repository}`);
			const result = await res.json();

			setDescription(result.description);
			setStars(result.stargazers_count);
		};

		fetchProductInfo();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.githubDetails}>
				<div className={styles.githubTitle}>
					<img className={styles.logo} src={logo} />
					<a className={styles.docsLink} href='https://guide.organized-app.com' target='_blank' rel='noopener noreferrer'>
						<h3 className={styles.title}>{title}</h3>
					</a>
				</div>

				<div className={styles.rightLinks}>
					<div className={styles.githubLink}>
						<a
							className={styles.githubLogo}
							href='https://github.com/sws2apps/organized-app'
							target='_blank'
							rel='noopener noreferrer'
						/>

						<p>{stars} ★</p>
					</div>
				</div>
			</div>

			<p>{description}</p>
		</div>
	);
};

export default ProductItem;
