import { cn } from "../../lib/utils/cn.ts";

export type IconSendProps = {
	className?: string;
};

export const IconSend = ({ className }: IconSendProps) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("inline-block", className)}
			aria-hidden="true"
		>
			<path
				d="M22 2 11 13"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m22 2-7 20-4-9-9-4 20-7z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
