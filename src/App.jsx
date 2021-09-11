import React from 'react';
import { GlobalStyle } from './styles/global';
import Board from './components/board'
import Header from './components/header';

export default function App() {
	return (
		<>
			<Header/>
			<Board />
			<GlobalStyle />
		</>
	);
}