import { useEffect } from "react";

const Navbar = () => {
	const navbarOffset = 72;

	let serviciosScroll: number;
	let nosotrosScroll: number;
	let contacto: HTMLElement | null;

	useEffect(() => {
		const servicios = document.getElementById("servicios");
		const serviciosOffset = servicios?.offsetTop || 0;
		serviciosScroll = serviciosOffset - navbarOffset;

		const nosotros = document.getElementById("nosotros");
		const nosotrosOffset = nosotros?.offsetTop || 0;
		nosotrosScroll = nosotrosOffset - navbarOffset;

		contacto = document.getElementById("contacto");
	}, []);

	return (
		<nav className="flex flex-row items-center justify-end w-full px-[15px] h-[72px] bg-[#343434] shadow-lg fixed top-0 z-10">
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px]"
			>
				INICIO
			</button>
			<button
				onClick={() =>
					window.scrollTo({ top: serviciosScroll, behavior: "smooth" })
				}
				className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px]"
			>
				SERVICIOS
			</button>
			<button
				onClick={() =>
					window.scrollTo({ top: nosotrosScroll, behavior: "smooth" })
				}
				className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px]"
			>
				NOSOTROS
			</button>
			<button
				onClick={() => contacto?.scrollIntoView({ behavior: "smooth" })}
				className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px]"
			>
				CONTACTO
			</button>
		</nav>
	);
};

export default Navbar;
