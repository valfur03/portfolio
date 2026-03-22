import { cn } from "../../../lib/utils/cn.ts";
import { useContactForm } from "../hooks/use-contact-form.ts";
import { ContactFormFields } from "./ContactFormFields.tsx";
import { ContactFormSuccess } from "./ContactFormSuccess.tsx";

export function ContactForm() {
	const {
		status,
		formDisabled,
		formDisabledMessage,
		submitFormValues,
		resetStatus,
	} = useContactForm();

	const isSuccess = status.state === "success";

	return (
		<div className="grid w-full">
			<div
				className={cn("col-start-1 row-start-1", isSuccess && "invisible")}
				aria-hidden={isSuccess}
				inert={isSuccess ? true : undefined}
			>
				<ContactFormFields
					status={status}
					formDisabled={formDisabled}
					formDisabledMessage={formDisabledMessage}
					onSubmit={submitFormValues}
					onCooldownEnd={resetStatus}
				/>
			</div>
			{isSuccess && (
				<div className="col-start-1 row-start-1">
					<ContactFormSuccess />
				</div>
			)}
		</div>
	);
}
