import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<MainNavigation />
			<main className={styles.main}>{props.children}</main>
		</div>
	);
}
