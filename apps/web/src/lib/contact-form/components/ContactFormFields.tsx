import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT } from "@portfolio/config";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { CooldownButton } from "../../../components/CooldownButton.tsx";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "../../../components/Field.tsx";
import { Input } from "../../../components/Input.tsx";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	InputGroupTextarea,
} from "../../../components/InputGroup.tsx";
import type { FormStatus } from "../hooks/use-contact-form.ts";
import {
	type ContactFormValues,
	contactFormSchema,
} from "../schemas/contact-form.schema.ts";
import { ContactFormError } from "./ContactFormError.tsx";

interface ContactFormFieldsProps {
	status: FormStatus;
	formDisabled: boolean;
	onSubmit: (
		values: { name: string; email: string; message: string },
		honeypot: string,
	) => void;
	onCooldownEnd: () => void;
}

export function ContactFormFields({
	status,
	formDisabled,
	onSubmit,
	onCooldownEnd,
}: ContactFormFieldsProps) {
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});
	const honeypotRef = useRef<HTMLInputElement>(null);
	const isSubmitting = status.state === "submitting";
	const isError = status.state === "error";
	const isDisabled = formDisabled || isSubmitting;

	const handleSubmit = form.handleSubmit((values) => {
		onSubmit(values, honeypotRef.current?.value ?? "");
	});

	return (
		<form
			id="form-contact"
			onSubmit={handleSubmit}
			className="w-full text-left"
			aria-busy={isSubmitting}
		>
			<FieldGroup>
				<div className="absolute opacity-0 -z-10" aria-hidden="true">
					<label htmlFor="form-contact-website">Website</label>
					<input
						ref={honeypotRef}
						id="form-contact-website"
						name="website"
						type="text"
						tabIndex={-1}
						autoComplete="off"
					/>
				</div>
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
								disabled={isDisabled}
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
								disabled={isDisabled}
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
									disabled={isDisabled}
									onKeyDown={(e) => {
										if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
											e.preventDefault();
											handleSubmit();
										}
									}}
								/>
								<InputGroupAddon align="block-end">
									<InputGroupText className="tabular-nums">
										{field.value.length}/{CONTACT.message.maxLength} characters
									</InputGroupText>
								</InputGroupAddon>
							</InputGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<CooldownButton
					type="submit"
					className="w-full"
					disabled={isDisabled || isError}
					cooldownMs={isError ? status.cooldownMs : undefined}
					onCooldownEnd={onCooldownEnd}
				>
					{isSubmitting ? "Sending..." : "Send message"}
				</CooldownButton>
				<ContactFormError
					message={
						formDisabled
							? "Too many attempts. Please try again later."
							: isError
								? status.message
								: undefined
					}
				/>
			</FieldGroup>
		</form>
	);
}
