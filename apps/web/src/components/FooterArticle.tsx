import type { PropsWithChildren } from "react";
import { TypographyParagraph } from "./typography/Paragraph.tsx";

export type FooterArticleProps = PropsWithChildren<{
	name: string;
}>;

export const FooterArticle = ({ name, children }: FooterArticleProps) => {
	return (
		<article>
			<TypographyParagraph variant="title">{name}</TypographyParagraph>
			{children}
		</article>
	);
};
