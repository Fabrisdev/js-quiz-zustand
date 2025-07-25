import { useGameHelper } from "../hooks/useGameHelper";
import { useGame } from "../store";
import { QuestionButtonNext } from "./QuestionButtonNext";

export function QuestionFooter() {
	const correctAnswers = useGame((state) => state.correctAnswers);
	const questions = useGame((state) => state.questions);
	const { isOver } = useGameHelper();
	const guessed = `${correctAnswers}/${questions.length}`;

	return isOver ? (
		<h1 className="text-center text-3xl text-white font-bold">
			Gracias por jugar. Acertaste {guessed}
		</h1>
	) : (
		<>
			<QuestionButtonNext />
			<p className="text-center">Llevas {guessed} acertadas.</p>
		</>
	);
}
