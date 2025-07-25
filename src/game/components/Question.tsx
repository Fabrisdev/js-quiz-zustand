import type { PropsWithChildren } from "react";

export function Question({ children }: PropsWithChildren<{}>) {
	return (
		<div className="border-2 border-white p-5 rounded-2xl flex flex-col gap-5">
			{children}
		</div>
	);
}
