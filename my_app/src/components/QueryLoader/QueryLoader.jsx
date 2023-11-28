import styles from './queryLoader.module.css';

const QueryLoader = (props) => {
	const { children, error, fetching } = props;

	return (
	<div className={styles['comon']}>
		<div>{ fetching && 'Data is loading ...' }</div>
		<div>{ error && `Opps, we have error: ${error} ` }</div>
		{ (!error && !fetching) && children }
	</div>
	)
};

export default QueryLoader;