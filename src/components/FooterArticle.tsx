import type { PropsWithChildren } from "react";
import { TypographyParagraph } from "./typography/Paragraph.tsx";

export type FooterArticleProps = PropsWithChildren<{
	name: string;
}>;

export const FooterArticle = ({ name, children }: FooterArticleProps) => {
	return (
		<article>
			<TypographyParagraph font="accent" weight="bold">
				{name}
			</TypographyParagraph>
			{children}
		</article>
	);
};
