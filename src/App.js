import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Switch>
				<Route
					path='/'
					exact
				>
					<AllMeetups />
				</Route>
				<Route path='/favourites'>
					<Favourites />
				</Route>
				<Route path='/new-meetups'>
					<NewMeetups />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
