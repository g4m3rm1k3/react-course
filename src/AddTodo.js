import { useState } from 'react';
export default function AddTodo({ addTodo }) {
	const [todo, setTodo] = useState('');
	return (
		<>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				onClick={() => {
					addTodo(todo);
					setTodo('');
				}}
			>
				Add Todo
			</button>
		</>
	);
}
