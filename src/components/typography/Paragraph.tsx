import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLProps } from "react";
import { cn } from "../../lib/utils/cn.ts";

const typographyParagraphVariants = cva("", {
	variants: {
		size: {
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
		},
	},
	defaultVariants: {
		size: "base",
	},
});

export type TypographyParagraphProps = HTMLProps<HTMLParagraphElement> &
	VariantProps<typeof typographyParagraphVariants>;

export const TypographyParagraph = ({
	className,
	size,
	...props
}: TypographyParagraphProps) => (
	<p
		{...props}
		className={cn(typographyParagraphVariants({ className, size }))}
	/>
);
