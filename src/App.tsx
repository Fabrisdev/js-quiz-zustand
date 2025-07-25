import { Start } from "./game/Start";

export default function App() {
	return (
		<main className="flex flex-col gap-5">
			<h1 className="text-5xl text-white text-center">Quiz de Javascript!</h1>
			<Start />
		</main>
	);
}
