import { Button } from "@/components/ui/button";
import { useGame } from "../store";

type Props = {
	answers: string[];
};

export function QuestionAnswers({ answers }: Props) {
	const selectAnswer = useGame((state) => state.selectAnswer);
	const answered = useGame((state) => state.answered);

	return (
		<div className="flex flex-col text-black gap-2">
			{answers.map((answer, index) => (
				<Button
					key={answer}
					className="cursor-pointer"
					onClick={() => selectAnswer(index)}
					disabled={answered}
				>
					{answer}
				</Button>
			))}
		</div>
	);
}
