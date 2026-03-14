import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

export type TypographyH1Props = HTMLProps<HTMLHeadingElement>;

export const TypographyH1 = ({ className, ...props }: TypographyH1Props) => (
	<h1
		{...props}
		className={cn("font-overpass text-4xl font-semibold", className)}
	/>
);
