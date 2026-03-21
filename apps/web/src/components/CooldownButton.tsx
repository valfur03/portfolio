import type { ComponentProps } from "react";
import { Button } from "./Button.tsx";

interface CooldownButtonProps extends ComponentProps<typeof Button> {
	cooldownMs?: number;
	onCooldownEnd?: () => void;
}

export function CooldownButton({
	cooldownMs,
	onCooldownEnd,
	children,
	...props
}: CooldownButtonProps) {
	return (
		<div className="relative overflow-hidden rounded">
			<Button {...props}>{children}</Button>
			{cooldownMs != null && cooldownMs > 0 && (
				<div
					className="absolute inset-0 bg-primary/30 origin-left pointer-events-none"
					style={
						{
							"--cooldown": `${cooldownMs}ms`,
							animation: "cooldown-shrink var(--cooldown) linear forwards",
						} as React.CSSProperties
					}
					onAnimationEnd={onCooldownEnd}
				/>
			)}
		</div>
	);
}
