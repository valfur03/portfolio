import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

const typographyParagraphVariants = cva("", {
	variants: {
		font: {
			default: "font-inter",
			accent: "font-overpass",
		},
		size: {
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
		},
		weight: {
			regular: "font-regular",
			bold: "font-bold",
		},
	},
	defaultVariants: {
		font: "default",
		size: "base",
		weight: "regular",
	},
});

export type TypographyParagraphProps = HTMLProps<HTMLParagraphElement> &
	VariantProps<typeof typographyParagraphVariants>;

export const TypographyParagraph = ({
	className,
	font,
	size,
	weight,
	...props
}: TypographyParagraphProps) => (
	<p
		{...props}
		className={cn(
			typographyParagraphVariants({ className, font, size, weight }),
		)}
	/>
);
