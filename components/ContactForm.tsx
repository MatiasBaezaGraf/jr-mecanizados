import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
	const [disabledButton, setDisabledButton] = useState(false);
	const form = useRef(null);
	const name = useRef<any>(null);
	const mail = useRef<any>(null);
	const message = useRef<any>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setDisabledButton(true);

		const currentForm = form.current;
		// this prevents sending emails if there is no form.
		// in case currentForm cannot possibly ever be null,
		// you could alert the user or throw an Error, here
		if (currentForm == null) return;

		if (name.current.value === "") {
			alert("Por favor ingrese su nombre");
			return;
		}

		if (mail.current.value === "") {
			alert("Por favor ingrese un correo");
			return;
		}

		if (message.current.value === "") {
			alert("Por favor ingrese un mensaje válido");
			return;
		}

		emailjs
			.sendForm(
				"service_qv9khrs",
				"contact_form",
				currentForm,
				"YyEb3_VNU-U4iB7xg"
			)
			.then(
				(result) => {
					console.log(result.text, "mail enviado");
					name.current.value = "";
					mail.current.value = "";
					message.current.value = "";
					setDisabledButton(false);
					alert("Mensaje enviado satisfactoriamente!");
				},
				(error) => {
					setDisabledButton(false);
					console.log(error.text, "mail no enviado");
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail} className="z-10">
			<div className="flex flex-col items-center laptop:items-start justify-center desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] phone:pt-[50px] pt-[20px]">
				<input
					className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[20px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c]"
					type="text"
					name="user_name"
					ref={name}
					placeholder="Nombre..."
				/>
				<input
					className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[20px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c]"
					type="mail"
					name="user_email"
					ref={mail}
					placeholder="Mail..."
				/>
				<textarea
					className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[60px] laptop:mb-[20px] desktop:h-[250px] laptop:h-[200px] tablet:h-[450px] h-[300px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c] resize-none"
					name="message"
					ref={message}
					placeholder="Mensaje..."
				/>
				<button
					type="submit"
					className="transform duration-[300ms] hover:scale-105 bg-[#387546] p-[10px] px-[30px] font-primary-bold text-[20px] text-white rounded-lg border-b-[3px] border-[#295d35]"
					disabled={disabledButton}
				>
					Enviar
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
