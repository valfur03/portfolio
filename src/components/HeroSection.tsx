import { Button } from "./Button.tsx";
import { MeTransparentBottom } from "./MeTransparentBottom.tsx";
import { TypographyH1 } from "./typography/H1.tsx";
import { TypographyParagraph } from "./typography/Paragraph.tsx";

export const HeroSection = () => {
	return (
		<section className="flex flex-col items-center py-16">
			<MeTransparentBottom className="animate-fade-in-up [animation-delay:0ms]" />
			<div className="flex flex-col items-center gap-3 text-center">
				<TypographyH1 className="animate-fade-in-up [animation-delay:100ms]">
					Hi! I’m Valentin Furmanek
				</TypographyH1>
				<TypographyParagraph className="animate-fade-in-up [animation-delay:300ms]">
					Software engineer building open-source tools everyday
				</TypographyParagraph>
				<div className="mt-3 flex gap-4 animate-fade-in-up [animation-delay:400ms]">
					<Button variant="outline">Contact me</Button>
				</div>
			</div>
		</section>
	);
};
