import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetups() {
	const history = useHistory();

	function addMeetupHandler(meetup) {
		fetch(
			'https://react-getting-started-5afc7-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetup),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => history.replace('/'));
	}
	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm addMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetups;
