import { Button } from "@/components/ui/button";
import { useGame } from "../store";

export function QuestionButtonNext() {
	const answered = useGame((state) => state.answered);
	const nextQuestion = useGame((state) => state.nextQuestion);

	if (answered)
		return (
			<Button className="cursor-pointer" onClick={nextQuestion}>
				Siguiente pregunta
			</Button>
		);
	return null;
}
