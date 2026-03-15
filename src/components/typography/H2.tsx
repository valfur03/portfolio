import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

export type TypographyH2Props = HTMLProps<HTMLHeadingElement>;

export const TypographyH2 = ({ className, ...props }: TypographyH2Props) => (
	<h2
		{...props}
		className={cn("font-overpass text-3xl font-semibold", className)}
	/>
);
