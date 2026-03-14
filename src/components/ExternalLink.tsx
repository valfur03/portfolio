import type { HTMLProps } from "react";
import { IconExternalLink } from "./icons/ExternalLink.tsx";

export type ExternalLinkProps = HTMLProps<HTMLAnchorElement>;

export const ExternalLink = ({
	children,
	target = "_blank",
	rel = "noopener noreferrer",
	...props
}: ExternalLinkProps) => {
	return (
		<a {...props} target={target} rel={rel}>
			{children}
			<IconExternalLink className="ml-1.5" />
		</a>
	);
};
