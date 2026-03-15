import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./Button.tsx";
import { Field, FieldError, FieldGroup, FieldLabel } from "./Field.tsx";
import { Input } from "./Input.tsx";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from "./InputGroup.tsx";

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Name must be at least 1 character long." }),
	email: z.email({ message: "Invalid email address." }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters long." })
		.max(2500, { message: "Message must be at most 2500 characters long." }),
});
type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = (values: FormValues) => {};

	return (
		<form
			id="form-contact"
			onSubmit={form.handleSubmit(onSubmit)}
			className="w-full text-left"
		>
			<FieldGroup>
				<Controller
					name="name"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="form-contact-name">Name</FieldLabel>
							<Input
								{...field}
								id="form-contact-name"
								aria-invalid={fieldState.invalid}
								placeholder="J. Doe"
								type="text"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="email"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="form-contact-email">Email</FieldLabel>
							<Input
								{...field}
								id="form-contact-email"
								aria-invalid={fieldState.invalid}
								placeholder="j.doe@email.org"
								type="email"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="message"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="form-contact-message">Message</FieldLabel>
							<InputGroup>
								<InputGroupTextarea
									{...field}
									id="form-contact-message"
									placeholder="Hey Valentin! ..."
									rows={6}
									className="resize-none"
									aria-invalid={fieldState.invalid}
								/>
								<InputGroupAddon align="block-end">
									<InputGroupText className="tabular-nums">
										{field.value.length}/2500 characters
									</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Button type="submit" className="w-full">
					Send message
				</Button>
			</FieldGroup>
		</form>
	);
};
