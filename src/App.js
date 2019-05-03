import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import leagues from './resources/leagues';
import seasons from './resources/seasons';
import users from './resources/users';
import lobbies from './resources/lobbies';
import bots from './resources/bots';
import queues from './resources/queues';
import tickets from './resources/tickets';
import leaderboards from './resources/leaderboards';
import reputations from './resources/reputations';
import challenges from './resources/challenges';
import commends from './resources/commends';
import postgrestClient from 'aor-postgrest-client';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';
import customRoutes from './customRoutes';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}
console.log(process.env.REACT_APP_DB_URI);
const dataProvider = postgrestClient(process.env.REACT_APP_DB_URI, httpClient);

const App = () => (
    <Admin customRoutes={customRoutes} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage} logoutButton={MyLogoutButton}>
        <Resource name="Leagues" {...leagues} />
        <Resource name="Seasons" {...seasons} />
        <Resource name="Users" {...users} />
        <Resource name="Lobbies" {...lobbies} />
        <Resource name="Bots" {...bots} />
        <Resource name="Leaderboards" {...leaderboards} />
        <Resource name="Challenges" {...challenges} />
        <Resource name="Commends" {...commends} />
        <Resource name="Queues" {...queues} />
        <Resource name="Reputations" {...reputations} />
        <Resource name="Tickets" {...tickets} />
    </Admin>
);

export default App;