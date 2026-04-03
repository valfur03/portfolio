import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

const typographyParagraphVariants = cva("", {
	variants: {
		variant: {
			default: "font-inter font-regular",
			title: "font-overpass font-bold",
			destructive: "text-destructive",
			secondary: "text-on-surface-secondary",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type TypographyParagraphProps = HTMLProps<HTMLParagraphElement> &
	VariantProps<typeof typographyParagraphVariants>;

export const TypographyParagraph = ({
	className,
	variant,
	...props
}: TypographyParagraphProps) => (
	<p
		{...props}
		className={cn(typographyParagraphVariants({ className, variant }))}
	/>
);
