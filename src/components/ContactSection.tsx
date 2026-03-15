import anchorsConfig from "../config/anchors.ts";
import { ContactForm } from "./ContactForm.tsx";
import { TypographyH2 } from "./typography/H2.tsx";

export const ContactSection = () => {
	return (
		<section
			id={anchorsConfig.contact}
			className="mx-auto py-32 px-4 flex flex-col justify-center items-center text-center md:max-w-4xl md:px-16 md:py-64 lg:max-w-5xl"
		>
			<TypographyH2 className="mb-4">Want to get in touch?</TypographyH2>
			<ContactForm />
		</section>
	);
};
