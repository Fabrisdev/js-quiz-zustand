import type { PropsWithChildren } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function QuestionBody({ children }: PropsWithChildren<{}>) {
	return (
		<SyntaxHighlighter language="javascript" style={tomorrowNight}>
			{children}
		</SyntaxHighlighter>
	);
}
