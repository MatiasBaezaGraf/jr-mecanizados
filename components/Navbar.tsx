import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const navbarOffset = 72;

	const [serviciosScroll, setServiciosScroll] = useState(0);
	const [nosotrosScroll, setNosotrosScroll] = useState(0);
	const [contactoScroll, setContactoScroll] = useState(0);

	let contacto: HTMLElement | null;

	useEffect(() => {
		const servicios = document.getElementById("servicios");
		const serviciosOffset = servicios?.offsetTop || 0;
		setServiciosScroll(serviciosOffset - navbarOffset);

		const nosotros = document.getElementById("nosotros");
		const nosotrosOffset = nosotros?.offsetTop || 0;
		setNosotrosScroll(nosotrosOffset - navbarOffset);

		const contacto = document.getElementById("contacto");
		const contactoOffset = contacto?.offsetTop || 0;
		setContactoScroll(contactoOffset - navbarOffset);
	}, []);

	const toggleSidebar = () => {
		setOpen(!open);
	};

	const navigateTo = (id: string) => {
		switch (id) {
			case "inicio":
				window.scrollTo({ top: 0, behavior: "smooth" });
				console.log("inicio");
				break;
			case "servicios":
				window.scrollTo({ top: serviciosScroll, behavior: "smooth" });
				console.log(serviciosScroll);
				console.log("servicios");
				break;
			case "nosotros":
				window.scrollTo({ top: nosotrosScroll, behavior: "smooth" });
				console.log(nosotrosScroll);
				console.log("nosotros");
				break;
			case "contacto":
				window.scrollTo({ top: contactoScroll, behavior: "smooth" });
				console.log(contactoScroll);
				console.log("contacto");
				break;

			default:
				break;
		}
	};

	return (
		<>
			<nav className="flex flex-row items-center justify-between w-full px-[22px] h-[72px] bg-gradient-to-r from-[#363636] to-[#2c2c2c]  shadow-lg fixed top-0 z-20">
				<div className="flex flex-row items-center ">
					<Image
						src={"/images/LogoSmall.png"}
						alt="JR Logo"
						width={70}
						height={70}
					/>
					<h1 className="font-title-bold text-[19px] text-white ml-[5px] hidden laptop:block">
						JR MECANIZADOS
					</h1>
				</div>
				{/* --------------------------------------------- Navbar Buttons --------------------------------------------- */}
				<div className="flex flex-row">
					<a
						target="_blank"
						href="https://wa.me/5492235440115"
						className="hidden tablet:flex transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-semi-bold font-[16px] mx-[15px]"
					>
						<div className="flex flex-row items-center">
							<Image
								className="mr-[10px]"
								src={"/images/WhatsApp.png"}
								alt="WP Logo"
								width={30}
								height={30}
							/>
							+54 9 2235 440 115
						</div>
					</a>
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
				</div>

				<button className="tablet:hidden" onClick={toggleSidebar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-[30px] w-[30px] text-stone-200"
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
