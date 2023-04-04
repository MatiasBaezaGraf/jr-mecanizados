import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
	const [open, setOpen] = useState(false);

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

	const toggleSidebar = () => {
		setOpen(!open);
	};

	const navigateTo = (id: string) => {
		switch (id) {
			case "inicio":
				window.scrollTo({ top: 0, behavior: "smooth" });
				break;
			case "servicios":
				window.scrollTo({ top: serviciosScroll, behavior: "smooth" });
				break;
			case "nosotros":
				window.scrollTo({ top: nosotrosScroll, behavior: "smooth" });
				break;
			case "contacto":
				contacto?.scrollIntoView({ behavior: "smooth" });
				break;

			default:
				break;
		}
	};

	return (
		<>
			<nav className="flex flex-row items-center justify-end w-full px-[22px] h-[72px] bg-[#343434] shadow-lg fixed top-0 z-20">
				{/* --------------------------------------------- Navbar Buttons --------------------------------------------- */}
				<button
					onClick={() => navigateTo("inicio")}
					className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px] hidden tablet:inline-block"
				>
					INICIO
				</button>
				<button
					onClick={() => navigateTo("servicios")}
					className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px] hidden tablet:inline-block"
				>
					SERVICIOS
				</button>
				<button
					onClick={() => navigateTo("nosotros")}
					className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px] hidden tablet:inline-block"
				>
					NOSOTROS
				</button>
				<button
					onClick={() => navigateTo("contacto")}
					className="transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold font-[16px] mx-[15px] hidden tablet:inline-block"
				>
					CONTACTO
				</button>

				<button onClick={toggleSidebar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-[30px] w-[30px] text-stone-200 tablet:hidden"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</nav>
			{/* --------------------------------------------- Sidebar --------------------------------------------- */}
			<Sidebar open={open} onClose={toggleSidebar} onNavigate={navigateTo} />
		</>
	);
};

export default Navbar;
