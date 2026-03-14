import { cn } from "../../lib/utils/cn.ts";

export type IconExternalLinkProps = {
	className?: string;
};

export const IconExternalLink = ({ className }: IconExternalLinkProps) => {
	return (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("inline-block", className)}
		>
			<title>external link</title>
			<g clipPath="url(#clip0_105_89)">
				<path
					d="M4.41831 0.444443H1.33335C0.842428 0.444443 0.444458 0.842412 0.444458 1.33333V6.66667C0.444458 7.15759 0.842427 7.55555 1.33335 7.55555H6.66668C7.1576 7.55555 7.55557 7.15759 7.55557 6.66667V3.5817"
					stroke="currentColor"
					strokeWidth="0.888889"
					strokeLinecap="round"
				/>
				<path
					d="M5.77779 0.444443H7.44446M7.44446 0.444443V2.22222M7.44446 0.444443C5.66668 2 5.11112 2 3.33334 5.44444"
					stroke="currentColor"
					strokeWidth="0.888889"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_105_89">
					<rect width="8" height="8" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
