import { useGame } from "../store";

export function useGameHelper() {
	const currentQuestion = useGame((state) => state.currentQuestion);
	const questions = useGame((state) => state.questions);
	const answered = useGame((state) => state.answered);
	const question = questions[currentQuestion];

	const isLastQuestion = currentQuestion === questions.length - 1;
	const isOver = isLastQuestion && answered;
	const correctAnswer = question.correctAnswer;

	return { isOver, isLastQuestion, correctAnswer };
}
