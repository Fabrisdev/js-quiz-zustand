export async function fetchQuestions() {
	return fetch("/questions.json").then((res) => res.json());
}
