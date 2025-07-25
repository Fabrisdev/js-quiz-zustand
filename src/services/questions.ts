import type { Question } from "@/game/types";

export async function fetchQuestions(): Promise<Question[]> {
	return fetch("/questions.json").then((res) => res.json());
}
