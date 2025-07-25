import type { PropsWithChildren } from "react";

export function QuestionTitle({ children }: PropsWithChildren<{}>) {
	return <strong className="text-2xl text-white">{children}</strong>;
}
