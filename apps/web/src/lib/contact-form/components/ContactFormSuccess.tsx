import { useEffect, useRef } from "react";
import { IconSend } from "../../../components/icons/Send.tsx";
import { TypographyH3 } from "../../../components/typography/H3.tsx";
import { TypographyParagraph } from "../../../components/typography/Paragraph.tsx";

export function ContactFormSuccess() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		containerRef.current?.focus();
	}, []);

	return (
		<div
			ref={containerRef}
			tabIndex={-1}
			className="h-full w-full flex flex-col items-center justify-center rounded border border-background-secondary px-6 py-12 text-center outline-none"
		>
			<IconSend className="size-10 text-primary mb-4" />
			<TypographyH3>Message sent!</TypographyH3>
			<TypographyParagraph className="mt-2 text-midgrey">
				Thanks for reaching out, I'll get back to you soon.
			</TypographyParagraph>
		</div>
	);
}
