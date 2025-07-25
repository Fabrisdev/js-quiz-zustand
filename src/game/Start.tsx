import { Button } from "@/components/ui/button";
import { Game } from "./Game";
import { useGame } from "./store";

export function Start() {
	const questions = useGame((state) => state.questions);
	const startGame = useGame((state) => state.startGame);
	if (questions.length !== 0) return <Game />;
	return <Button onClick={startGame}>¡Comenzar juego!</Button>;
}
