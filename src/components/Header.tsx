import urlsConfig from "../config/urls.ts";
import { ExternalLink } from "./ExternalLink.tsx";
import { ValfurTextLogo } from "./ValfurTextLogo.tsx";

export const Header = () => {
	return (
		<header>
			<div className="p-4 flex justify-between mx-auto max-w-4xl lg:max-w-5xl md:px-16">
				<div className="flex gap-4">
					<a href="/">
						<ValfurTextLogo />
					</a>
				</div>
				<div>
					<ExternalLink href={urlsConfig.blog} className="text-sm">
						blog
					</ExternalLink>
				</div>
			</div>
		</header>
	);
};
