import { useEffect } from "react";

const ContactButton = () => {
	let contacto: HTMLElement | null;

	useEffect(() => {
		contacto = document.getElementById("contacto");
	}, []);

	return (
		<button
			className="transform duration-[300ms] hover:scale-105 bg-[#5271FF] p-[10px] px-[30px] font-primary-bold text-[20px] border-b-[3px] border-[#3459fd] text-white rounded-lg shadow-lg hidden phone:inline-block"
			onClick={() => contacto?.scrollIntoView({ behavior: "smooth" })}
		>
			Contactate
		</button>
	);
};

export default ContactButton;
