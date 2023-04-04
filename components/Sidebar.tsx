import Image from "next/image";

const Sidebar = (props: {
	open: boolean;
	onClose: () => void;
	onNavigate: (id: string) => void;
}) => {
	// This fucntion checks if the sidebar is open or not, if it is, it closes it, if it isn't, it does nothing.
	const clickedBackdrop = () => {
		if (props.open) props.onClose();
	};

	return (
		<>
			<div
				className={`tablet:hidden transform duration-[800ms] w-2/3 right-0 fixed h-screen bg-gradient-to-r from-[#272727] to-[#3f3f3f] z-20 ${
					props.open ? "translate-x-0" : "translate-x-[700px]"
				}`}
			>
				{/* close sidebar button svg */}
				<div className="w-full flex flex-row items-center h-[72px] bg-[#1f1e1e]/30">
					<button
						onClick={props.onClose}
						className="top-0 my-[20px] ml-[20px] mr-[10px]"
					>
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<h1 className="top-0 font-title-bold text-[19px] text-white ml-[5px] tablet:hidden">
						JR MECANIZADOS
					</h1>
				</div>
				<div className="flex flex-col items-start">
					<button
						onClick={() => props.onNavigate("inicio")}
						className=" bg-transparent w-full pl-[20px] py-[10px] hover:bg-slate-800/50 text-white text-start font-primary-semi-bold text-[20px] tablet:hidden"
					>
						INICIO
					</button>
					<button
						onClick={() => props.onNavigate("servicios")}
						className=" bg-transparent w-full pl-[20px] py-[10px] hover:bg-slate-800/50 text-white text-start font-primary-semi-bold text-[20px] tablet:hidden"
					>
						SERVICIOS
					</button>
					<button
						onClick={() => props.onNavigate("nosotros")}
						className=" bg-transparent w-full pl-[20px] py-[10px] hover:bg-slate-800/50 text-white text-start font-primary-semi-bold text-[20px] tablet:hidden"
					>
						NOSOTROS
					</button>
					<button
						onClick={() => props.onNavigate("contacto")}
						className=" bg-transparent w-full pl-[20px] py-[10px] hover:bg-slate-800/50 text-white text-start font-primary-semi-bold text-[20px] tablet:hidden"
					>
						CONTACTO
					</button>
					<a
						target="_blank"
						href="https://wa.me/5492235440115"
						className="flex transform duration-[300ms] hover:-translate-y-[5px] bg-transparent text-white font-primary-bold text-[20px] py-[10px] pl-[20px]"
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
				</div>
			</div>
			<div
				className={`transform duration-[800ms] fixed h-screen w-full bg-stone-900/40 left-0 ${
					props.open ? "opacity-1 z-10" : "opacity-0 z-0"
				}`}
				onClick={clickedBackdrop}
			/>
		</>
	);
};

export default Sidebar;
