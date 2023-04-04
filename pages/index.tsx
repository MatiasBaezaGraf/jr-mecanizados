import ContactButton from "@/components/ContactButton";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>JR Mecanizados</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{/* ---------------------------------------- Landing Page ---------------------------------------- */}

			<div id="inicio" className="bg-main bg-cover h-screen">
				{/* The following div exists to give a lower opacity to the background image. */}
				<div className="flex flex-col items-center desktop:pt-[150px] laptop:pt-[120px] tablet:pt-[200px] pt-[120px] bg-slate-900/50 h-screen">
					<Image
						className="px-[20px] mb-[40px] tablet:px-[0px] tablet:mb-[85px] laptop:mb-[35px] desktop:mb-[65px]"
						src={"/images/Logo.png"}
						alt="JR Logo"
						width={400}
						height={150}
					/>
					<h1 className="font-primary-extra-bold desktop:text-[70px] laptop:mb-[0px] laptop:text-[60px] tablet:text-[50px] mb-[40px] text-[40px] text-center text-white">
						Siempre Ayudándote a Crecer
					</h1>
					<p className="font-primary-regular text-[20px] desktop:mb-[60px] laptop:w-[1200px] laptop:mb-[50px] tablet:w-[650px] tablet:mb-[60px] tablet:mx-[0px] mx-[20px] mb-[30px] text-center text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						porta mollis orci ut mattis. Suspendisse malesuada metus eu enim
						consectetur faucibus.
					</p>
					<ContactButton />
				</div>
			</div>
			{/* ---------------------------------------- Services ---------------------------------------- */}
			<div id="servicios" className="flex flex-col h-cut-screen">
				{/* ---------------------------------------- Services Header ---------------------------------------- */}
				<div className="flex flex-col items-center justify-center h-[152px] bg-[#464646]">
					<h1 className="font-primary-extra-bold text-[40px] text-white">
						¡Bienvenidos!
					</h1>
					<h2 className="font-primary-regular text-[24px] text-white">
						¿Que ofrecemos?
					</h2>
				</div>
				{/* ---------------------------------------- Services Cards ---------------------------------------- */}
				<div className="flex-1 text-center laptop:pt-[20px] desktop:pt-[90px] bg-gradient-to-l from-[#363636] to-[#2c2c2c] laptop:pb-[20px]">
					<div className="flex mx-[15px]  tablet:h-4/5 tablet:mb-[35px] flex-col tablet:items-center justify-start tablet:justify-around laptop:items-start laptop:flex-row laptop:justify-around desktop:justify-center desktop:h-auto desktop:mb-[85px]">
						{/* ---------------------------------------- CARD 1 ---------------------------------------- */}
						<div className="flex flex-row laptop:flex-col items-start tablet:items-center desktop:mx-[30px] mt-[30px] tablet:mt-[0px]">
							<Image
								className="transform duration-[300ms] hover:scale-110 rounded-[5px] w-[158px] tablet:w-[256px] laptop:w-[386px]"
								src={"/images/FabricacionSegunPlano.jpg"}
								alt="IMG1"
								width={386}
								height={268}
							/>
							<div className="ml-[20px] tablet:flex tablet:flex-col tablet:items-start laptop:items-center laptop:ml-[0px]">
								<h1 className="font-primary-bold text-[20px] tablet:text-[24px] text-white text-start tablet:pt-[15px]">
									Fabricación según plano
								</h1>
								<p className="font-primary-regular text-[12px] tablet:text-[14px] text-white text-start laptop:text-center pt-[10px] tablet:w-[390px]">
									Nos traes el plano de la o las piezas, y nosotros las
									fabricamos, siguiendo el estándar de calidad ISO 9001.
								</p>
							</div>
						</div>

						{/* ---------------------------------------- CARD 2 ---------------------------------------- */}
						<div className="flex tablet:flex-row laptop:flex-col items-start tablet:items-center desktop:mx-[30px] mt-[30px] tablet:mt-[0px]">
							<Image
								className="transform duration-[300ms] hover:scale-110 rounded-[5px] w-[158px] tablet:w-[256px] laptop:w-[386px]"
								src={"/images/CopiaDePiezas.jpg"}
								alt="IMG1"
								width={386}
								height={268}
							/>
							<div className="ml-[20px] tablet:flex tablet:flex-col tablet:items-start laptop:items-center laptop:ml-[0px]">
								<h1 className="font-primary-bold text-[20px] tablet:text-[24px] text-white text-start tablet:pt-[15px]">
									Copia De Piezas
								</h1>
								<p className="font-primary-regular text-[12px] tablet:text-[14px] text-white text-start laptop:text-center pt-[10px] tablet:w-[390px]">
									Nos traes la pieza que querés que fabriquemos, y hacemos
									cuantas necesites.
								</p>
							</div>
						</div>

						{/* ---------------------------------------- CARD 3 ---------------------------------------- */}
						<div className="flex tablet:flex-row laptop:flex-col items-start tablet:items-center desktop:mx-[30px] mt-[30px] mb-[20px] tablet:mt-[0px] tablet:mb-[0px]">
							<Image
								className="transform duration-[300ms] hover:scale-110 rounded-[5px] w-[158px] tablet:w-[256px] laptop:w-[386px]"
								src={"/images/ElaboracionDePlanos.jpg"}
								alt="IMG1"
								width={386}
								height={268}
							/>
							<div className="ml-[20px] tablet:flex tablet:flex-col tablet:items-start laptop:items-center laptop:ml-[0px]">
								<h1 className="font-primary-bold text-[20px] tablet:text-[24px] text-white text-start tablet:pt-[15px]">
									Elaboración De Planos
								</h1>
								<p className="font-primary-regular text-[12px] tablet:text-[14px] text-white text-start laptop:text-center pt-[10px]  tablet:w-[390px]">
									Va de la mano con la copia de piezas. A partir de una pieza
									existente, te elaboramos el plano de la misma según el
									estándar de calidad ISO 9001.
								</p>
							</div>
						</div>
					</div>
					<ContactButton />
				</div>
			</div>
			{/* This div existis because the background of the last two pages share the same image */}
			<div className="bg-last">
				{/* ---------------------------------------- About ---------------------------------------- */}
				<div
					id="nosotros"
					className="flex flex-col items-center h-cut-screen bg-slate-900/60"
				>
					<h1 className="font-primary-extra-bold text-[35px] tablet:text-[45px] text-white desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] pt-[50px]">
						¿Quiénes Somos?
					</h1>
					<div className="flex flex-col pt-[50px] tablet:pt-[80px] laptop:flex-row items-center desktop:justify-center desktop:pt-[100px] laptop:justify-end laptop:pt-[70px]">
						{/* ---------------------------------------- Paragraphs ---------------------------------------- */}
						<div className="flex flex-col desktop:w-2/5 laptop:w-1/2 tablet:w-4/5 w-5/6 laptop:pl-[90px] text-center">
							<p className="font-primary-regular text-[15px] tablet:text-[20px] text-white">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
								interdum, felis quis congue feugiat, dui nulla semper quam, non
								pulvinar massa elit sed nibh. Donec imperdiet turpis et ornare
								bibendum. Suspendisse odio erat, pharetra sit amet purus
								lacinia, porttitor feugiat nibh. Ut feugiat, enim quis mollis
								dignissim, diam dui mollis diam, sed commodo ligula lectus non
								sem. Quisque condimentum velit nunc, sit amet placerat urna
								tempus sollicitudin.
							</p>
							<p className="font-primary-regular text-[15px] tablet:text-[20px] text-white pt-[20px] pb-[50px] laptop:pb-[0px]">
								Etiam ultricies, dui et convallis sollicitudin, sapien quam
								porttitor libero, ut sagittis diam massa fermentum diam.
								Suspendisse vitae enim in erat consectetur rutrum a ac nunc.
							</p>
						</div>
						{/* ---------------------------------------- Carousel ---------------------------------------- */}
						<div className="flex flex-col items-center justify-center desktop:w-2/5 laptop:w-1/2 w-5/6">
							<Image
								src={"/images/Carrousel.jpg"}
								alt="Carousel"
								width={486}
								height={158}
							/>
						</div>
					</div>
				</div>
				{/* ---------------------------------------- Contact ---------------------------------------- */}
				<div
					id="contacto"
					className="flex flex-col items-center h-cut-screen bg-[#343434]/95"
				>
					<h1 className="font-primary-extra-bold text-[45px] text-white desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] pt-[50px]">
						Contacto
					</h1>
					{/* ---------------------------------------- Form ---------------------------------------- */}
					<form>
						<div className="flex flex-col items-center laptop:items-start justify-center desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] pt-[50px]">
							<input
								className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[20px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c]"
								type="text"
								placeholder="Nombre..."
							/>
							<input
								className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[20px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c]"
								type="mail"
								placeholder="Mail..."
							/>
							<textarea
								className="font-primary-regular text-[20px] text-white w-full tablet:w-[600px] laptop:w-[1100px] p-[10px] mb-[60px] laptop:mb-[20px] desktop:h-[250px] laptop:h-[200px] tablet:h-[450px] h-[300px] rounded bg-[#4D4D4D] border-b-[2px] border-[#4D4D4D] focus:outline-none focus:border-b-[2px] focus:border-[#5271FF] focus:bg-[#5c5c5c] resize-none"
								placeholder="Mensaje..."
							/>
							<button className="transform duration-[300ms] hover:scale-105 bg-[#387546] p-[10px] px-[30px] font-primary-bold text-[20px] text-white rounded-lg border-b-[3px] border-[#295d35]">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
