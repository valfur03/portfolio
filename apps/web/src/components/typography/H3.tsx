import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

export type TypographyH3Props = HTMLProps<HTMLHeadingElement>;

export const TypographyH3 = ({ className, ...props }: TypographyH3Props) => (
	<h3
		{...props}
		className={cn("font-overpass text-2xl font-semibold", className)}
	/>
);
