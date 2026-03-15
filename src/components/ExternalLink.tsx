import type { HTMLProps } from "react";
import { Button } from "./Button.tsx";
import { IconExternalLink } from "./icons/ExternalLink.tsx";

export type ExternalLinkProps = HTMLProps<HTMLAnchorElement>;

export const ExternalLink = ({
	children,
	target = "_blank",
	rel = "noopener noreferrer",
	...props
}: ExternalLinkProps) => {
	return (
		<Button variant="link" size="sm" asChild>
			<a {...props} target={target} rel={rel}>
				{children}
				<IconExternalLink />
			</a>
		</Button>
	);
};
