export default function Todo(props) {
	const { title, handleClick, setTodo } = props;
	const handleDelete = function () {
		setTodo(title);
		handleClick();
	};

	return (
		<div className='card'>
			<h2>{title}</h2>
			<div className='actions'>
				<button
					className='btn'
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
