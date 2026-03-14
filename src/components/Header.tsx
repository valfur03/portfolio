import urlsConfig from "../config/urls.ts";
import { ExternalLink } from "./ExternalLink.tsx";
import { ValfurTextLogo } from "./ValfurTextLogo.tsx";

export const Header = () => {
	return (
		<header className="flex justify-between p-4">
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
		</header>
	);
};
