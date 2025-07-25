import confetti from "canvas-confetti";
import { create } from "zustand";
import { fetchQuestions } from "@/services/questions";
import type { Question } from "./types";

type Store = {
	questions: Question[];
	currentQuestion: number;
	correctAnswers: number;
	loading: boolean;
	startGame: () => Promise<void>;
	nextQuestion: () => void;
	selectAnswer: (answerIndex: number) => void;
	answered: boolean;
};

export const useGame = create<Store>()((set) => ({
	questions: [],
	currentQuestion: 0,
	correctAnswers: 0,
	loading: true,
	answered: false,
	startGame: async () => {
		const questions = await fetchQuestions();
		set({ questions, loading: false });
	},
	nextQuestion: () => {
		set((state) => {
			if (!state.answered) return {};
			if (state.currentQuestion >= state.questions.length - 1) return {};
			return { currentQuestion: state.currentQuestion + 1, answered: false };
		});
	},
	selectAnswer: (answerIndex: number) => {
		set((state) => {
			const question = state.questions[state.currentQuestion];
			if (question.correctAnswer === answerIndex) {
				confetti();
				return { correctAnswers: state.correctAnswers + 1, answered: true };
			}
			return { answered: true };
		});
	},
}));
