const questions = document.querySelectorAll('.question');
const nextButton = document.querySelector('#next-button');
const result = document.querySelector('#result');

let currentQuestion = 0;
const selectedValues = [];

// Show the first question and hide the others
questions[currentQuestion].classList.add('active');

// Event listener for the next button
nextButton.addEventListener('click', () => {
	// Get the selected answer
	const selectedAnswer = document.querySelector('.question.active .answer.selected');
	if (!selectedAnswer) {
		alert('Please select an answer.');
		return;
	}

	// Save the selected answer value to an array
	const selectedValue = selectedAnswer.dataset.value;
	selectedValues[currentQuestion] = selectedValue;

	// Move to the next question
	questions[currentQuestion].classList.remove('active');
	currentQuestion++;
	if (currentQuestion < questions.length) {
		questions[currentQuestion].classList.add('active');
	} else {
		// Show the result
		const recommendation = getRecommendation(selectedValues);
		result.innerHTML = `We recommend ${recommendation}.`;
		result.classList.add('active');
		nextButton.disabled = true;
	}
});

// Event listener for the answer buttons
questions.forEach((question) => {
	const answerButtons = question.querySelectorAll('.answer');
	answerButtons.forEach((button) => {
		button.addEventListener('click', () => {
			// Remove the selected class from all buttons
			answerButtons.forEach((btn) => {
				btn.classList.remove('selected');
			});

			// Add the selected class to the clicked button
			button.classList.add('selected');
		});
	});
});

// Function to get the recommendation based on the selected values
function getRecommendation(values) {
	// This is just a dummy function to return a recommendation based on the selected values
	// You would replace this with your own recommendation logic
	if (
		values[0] === 'oily' &&
		values[1] === 'fair' &&
		values[2] === 'light' &&
		values[3] === 'matte'
	) {
		return 'Foundation A';
	} else if (
		values[0] === 'dry' &&
		values[1] === 'medium' &&
		values[2] === 'medium' &&
		values[3] === 'dewy'
	) {
		return 'Foundation B';
	} else if (
		values[0] === 'combination' &&
		values[1] === 'tan' &&
		values[2] === 'full' &&
		values[3] === 'natural'
	) {
		return 'Foundation C';
	} else {
		return 'Foundation D';
	}
}
