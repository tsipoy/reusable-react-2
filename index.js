import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 1. make the textarea a controlled input
// 2. count the number of character of the input
// 3. add the class if it's more than 280
// 4. add the badge text to the textarea value when you click a badge

const CharacterCounterInput = ({ text, defaults }) => {
	const maxLength = 280;

	const [mood, setMood] = useState('');

	// function controlled(e) {
	// 	const text = e.target.value;
	// 	console.log(text.length)
	// 	// if(text.length > 280) {
	// 	// 	<textarea placeholder={text} onChange={controlled} />	
	// 	// }
	// 	setInputLenghtTextarea(inputLenghtTextarea);
	// }



	return (
		<div className={`counterInput ${mood.length > maxLength && "tooLong"}`}>
			<div>
				{defaults.map(b => {
					return <button key={b} onClick={() => {
						setMood(b);
					}}>{b}</button>;
				})}
			</div>
			<textarea placeholder={text} onChange={(e) => setMood(e.target.value)} value={mood} />
			<div>{mood.length}/{maxLength}</div>
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
