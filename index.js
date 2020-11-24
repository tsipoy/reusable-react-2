import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
	const maxLength = 280;

	return (
		<div className="counterInput">
			<div>
				{defaults.map(b => {
					return <button key={b}>{b}</button>;
				})}
			</div>
			<textarea placeholder={text} />
			<div>0/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
