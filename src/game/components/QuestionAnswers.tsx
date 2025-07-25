import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGameHelper } from "../hooks/useGameHelper";
import { useGame } from "../store";

type Props = {
	answers: string[];
};

export function QuestionAnswers({ answers }: Props) {
	const selectAnswer = useGame((state) => state.selectAnswer);
	const answered = useGame((state) => state.answered);
	const { correctAnswer } = useGameHelper();
	const [buttonClicked, setButtonClicked] = useState<number | null>(null);

	function bgColor(index: number) {
		if (!answered) return "";
		if (correctAnswer === index) return "bg-green-400";
		if (buttonClicked === index) return "bg-red-400";
	}

	function handleClick(index: number) {
		selectAnswer(index);
		setButtonClicked(index);
	}

	return (
		<div className="flex flex-col text-black gap-2">
			{answers.map((answer, index) => (
				<Button
					key={answer}
					className={`cursor-pointer ${bgColor(index)}`}
					onClick={() => handleClick(index)}
					disabled={answered}
				>
					{answer}
				</Button>
			))}
		</div>
	);
}
