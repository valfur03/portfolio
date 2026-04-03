import anchorsConfig from "../config/anchors.ts";
import urlsConfig from "../config/urls.ts";
import { Button } from "./Button.tsx";
import { IconGitHub } from "./icons/GitHub.tsx";
import { IconLinkedIn } from "./icons/LinkedIn.tsx";
import { MeLightFromBelow } from "./MeLightFromBelow.tsx";
import { MeTransparentBottom } from "./MeTransparentBottom.tsx";
import { TypographyParagraph } from "./typography/Paragraph.tsx";

export const HeroSection = () => {
	return (
		<section className="mx-auto px-4 flex flex-col justify-center items-center text-center py-16 md:flex-row-reverse md:justify-between md:gap-16 md:text-left md:max-w-4xl md:px-16 lg:max-w-5xl">
			<div>
				<MeTransparentBottom className="h-39 animate-fade-in-up [animation-delay:0ms] block md:hidden" />
				<MeLightFromBelow className="size-48 animate-fade-in-up [animation-delay:0ms] hidden md:block lg:size-64" />
			</div>
			<div className="flex flex-col items-center gap-3 md:items-start">
				<h1 className="animate-fade-in-up [animation-delay:100ms]">
					Hi! I’m Valentin Furmanek
				</h1>
				<TypographyParagraph className="animate-fade-in-up [animation-delay:300ms]">
					Software engineer building open-source tools everyday
				</TypographyParagraph>
				<div className="mt-3 flex items-center gap-4 animate-fade-in-up [animation-delay:400ms]">
					<a
						href={urlsConfig.social.linkedin}
						target="_blank"
						rel="noreferrer noopener"
						aria-label="LinkedIn"
					>
						<IconLinkedIn className="size-8" />
					</a>
					<a
						href={urlsConfig.social.github}
						target="_blank"
						rel="noreferrer noopener"
						aria-label="GitHub"
					>
						<IconGitHub className="size-8" />
					</a>
					<Button variant="outline" asChild>
						<a href={`#${anchorsConfig.contact}`}>Contact me</a>
					</Button>
				</div>
			</div>
		</section>
	);
};
