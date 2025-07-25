import { Question } from "./components/Question";
import { QuestionAnswers } from "./components/QuestionAnswers";
import { QuestionBody } from "./components/QuestionBody";
import { QuestionButtonNext } from "./components/QuestionButtonNext";
import { QuestionTitle } from "./components/QuestionTitle";
import { useGame } from "./store";

export function Game() {
	const loading = useGame((state) => state.loading);
	const questions = useGame((state) => state.questions);
	const currentQuestion = useGame((state) => state.currentQuestion);
	const correctAnswers = useGame((state) => state.correctAnswers);
	const question = questions[currentQuestion];
	if (loading) return <p>Cargando...</p>;

	return (
		<Question>
			<QuestionTitle>{question.question}</QuestionTitle>
			<QuestionBody>{question.code}</QuestionBody>
			<QuestionAnswers answers={question.answers}></QuestionAnswers>
			<QuestionButtonNext />
			<p className="text-white text-center">
				Llevas {correctAnswers}/{questions.length} acertadas.
			</p>
		</Question>
	);
}
