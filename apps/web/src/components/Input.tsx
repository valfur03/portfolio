import type * as React from "react";
import { cn } from "../lib/utils/cn.ts";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"inset-shadow-lg border-none focus-visible:border-ring focus-visible:ring-on-surface/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive disabled:bg-surface h-8 rounded border bg-surface px-3 py-4 text-sm transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-on-surface placeholder:text-midgrey disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
