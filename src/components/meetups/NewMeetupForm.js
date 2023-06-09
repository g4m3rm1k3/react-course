import { useRef } from 'react';

import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';

export default function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		const title = titleInputRef.current.value;
		const image = imageInputRef.current.value;
		const address = addressInputRef.current.value;
		const description = descriptionInputRef.current.value;
		const meetup = { title, image, address, description };
		props.addMeetup(meetup);
	}
	return (
		<Card>
			<form
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<div className={styles.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input
						ref={titleInputRef}
						type='text'
						required
						id='title'
						htmlFor='title'
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input
						ref={imageInputRef}
						type='url'
						required
						id='image'
						htmlFor='image'
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor='image'>Address</label>
					<input
						ref={addressInputRef}
						type='text'
						required
						id='address'
						htmlFor='address'
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						ref={descriptionInputRef}
						id='description'
						required
						rows='5'
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}
