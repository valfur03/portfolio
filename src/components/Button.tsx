import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
	"flex py-1.5 px-2.5 gap-1.5 justify-center items-center rounded cursor-pointer outline-none",
	{
		variants: {
			size: {
				sm: "text-sm",
				base: "text-base",
				lg: "text-lg",
			},
			variant: {
				outline: "border border-on-surface",
			},
		},
		defaultVariants: {
			size: "base",
		},
	},
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export const Button = ({ className, size, variant, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={buttonVariants({ className, size, variant })}
		/>
	);
};
