import { TypographyParagraph } from "../../../components/typography/Paragraph.tsx";

export function ContactFormError({ message }: { message?: string }) {
	return (
		<TypographyParagraph
			aria-live="polite"
			className="text-destructive mt-2 min-h-0 text-sm"
		>
			{message ?? ""}
		</TypographyParagraph>
	);
}
