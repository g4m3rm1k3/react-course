export default function Modal(props) {
	const { handleClick, removeTodo, currentTodo } = props;
	const del = function DeleteTodo() {
		removeTodo();
		handleClick();
	};
	return (
		<div className='modal'>
			<p>Delete {currentTodo}?</p>
			<button
				className='btn btn--alt'
				onClick={handleClick}
			>
				Cancel
			</button>
			<button
				className='btn'
				onClick={del}
			>
				Confirm
			</button>
		</div>
	);
}
