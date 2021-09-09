import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

import './App.css';

const cookies = new Cookies();

const apiKey = 'acpsh9utd62w';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) {
	client.connectUser({
		token: cookies.get('token'),
		userName: cookies.get('username'),
		fullName: cookies.get('fullName'),
		userId: cookies.get('userId'),
		phoneNumber: cookies.get('phoneNumber'),
		avatarURL: cookies.get('avatarURL'),
		hashedPassword: cookies.get('hashedPassword'),
	});
}

const App = () => {
	if (!authToken) return <Auth />;
	return (
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	);
};

export default App;
