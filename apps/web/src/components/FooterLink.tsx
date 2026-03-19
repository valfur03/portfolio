import type { HTMLProps } from "react";
import { cn } from "../lib/utils/cn.ts";

export const FooterLink = ({
	className,
	...props
}: HTMLProps<HTMLAnchorElement>) => {
	return <a {...props} className={cn("hover:underline", className)} />;
};
