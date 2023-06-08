import { useState } from 'react';
import BackDrop from './Backdrop';
import Modal from './Modal';
import Todo from './Todo';
import AddTodo from './AddTodo';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [todos, setTodos] = useState([
		'Learn React',
		'Master React',
		'Complete Course',
	]);
	const [currentTodo, setCurrentTodo] = useState('');
	function toggleModal() {
		setShowModal((modal) => !modal);
	}
	function removeTodo() {
		const index = todos.findIndex((todo) => todo === currentTodo);
		setTodos((todos) => todos.filter((t, i) => (i !== index ? t : '')));
	}
	function addTodo(e) {
		setTodos((todos) => [...todos, e]);
	}

	const renderTodos = todos.map((todo) => (
		<Todo
			key={todo}
			title={todo}
			handleClick={toggleModal}
			setTodo={setCurrentTodo}
		/>
	));
	return (
		<div>
			<h1>My Todos</h1>
			<AddTodo addTodo={addTodo} />
			{renderTodos}
			{showModal && (
				<>
					<Modal
						handleClick={toggleModal}
						removeTodo={removeTodo}
						currentTodo={currentTodo}
					/>
					<BackDrop closeModal={toggleModal} />
				</>
			)}
		</div>
	);
}

export default App;
