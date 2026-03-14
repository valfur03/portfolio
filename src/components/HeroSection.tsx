import { Button } from "./Button.tsx";
import { MeTransparentBottom } from "./MeTransparentBottom.tsx";
import { TypographyH1 } from "./typography/H1.tsx";
import { TypographyParagraph } from "./typography/Paragraph.tsx";

export const HeroSection = () => {
	return (
		<section className="flex flex-col items-center py-16">
			<MeTransparentBottom />
			<div className="flex flex-col items-center gap-3 text-center">
				<TypographyH1>Hi! I’m Valentin Furmanek</TypographyH1>
				<TypographyParagraph>
					Software engineer building open-source tools everyday
				</TypographyParagraph>
				<div className="mt-3 flex gap-4">
					<Button variant="outline">Contact me</Button>
				</div>
			</div>
		</section>
	);
};
