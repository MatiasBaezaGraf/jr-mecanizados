import Carousel from "@/components/Carousel";
import ContactButton from "@/components/ContactButton";
import ContactForm from "@/components/ContactForm";
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

			<div id="inicio" className="bg-main bg-cover min-h-screen">
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
						Acompañando a la industria
					</h1>
					<p className="font-primary-regular text-[20px] desktop:mb-[60px] laptop:w-[1200px] laptop:mb-[50px] tablet:w-[650px] tablet:mb-[60px] tablet:mx-[0px] mx-[20px] mb-[30px] text-center text-white">
						En JR Mecanizados, estamos comprometidos a ayudarte a crecer en tu
						negocio con soluciones personalizadas y de alta calidad
					</p>
					<ContactButton />
				</div>
			</div>
			{/* ---------------------------------------- Services ---------------------------------------- */}
			<div id="servicios" className="flex flex-col min-h-screen">
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
				<div className="flex-1 text-center laptop:pt-[20px] desktop:pt-[90px] bg-gradient-to-l from-[#363636] to-[#2c2c2c] pb-[20px]">
					<div className="flex mt-[15px] mx-[15px] gap-[20px] tablet:h-4/5 tablet:mb-[35px] flex-col tablet:items-center justify-start tablet:justify-around laptop:items-start laptop:flex-row laptop:justify-around desktop:justify-center desktop:h-auto desktop:mb-[85px]">
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
									Nos complace ofrecerle nuestros servicios de fabricación
									personalizada. Proporciónenos los planos de las piezas y
									seguiremos el estándar de calidad ISO 9001 para garantizar un
									producto final de la más alta calidad.
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
									Si nos proporciona la pieza que desea, estaremos encantados de
									fabricar las unidades necesarias. Nuestro objetivo es
									proporcionar copias de la más alta calidad y cumplir con sus
									requisitos específicos.
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
									Ofrecemos servicios de elaboración de planos de piezas a
									partir de una pieza existente, siguiendo los estándares de
									calidad de la norma ISO 9001. Si necesita obtener el plano de
									una pieza existente, podemos ayudarlo.
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
					className="flex flex-col items-center min-h-screen bg-slate-900/60"
				>
					<h1 className="font-primary-extra-bold text-[35px] tablet:text-[45px] text-white desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] phone:pt-[50px] pt-[20px]">
						¿Quiénes Somos?
					</h1>
					<div className="flex flex-col pt-[20px] phone:pt-[50px] tablet:pt-[80px] laptop:flex-row items-center desktop:justify-center desktop:pt-[100px] laptop:justify-end laptop:pt-[70px] ">
						{/* ---------------------------------------- Paragraphs ---------------------------------------- */}
						<div className="flex flex-col desktop:w-2/5 laptop:w-1/2 tablet:w-4/5 w-5/6 laptop:pl-[90px] text-center">
							<p className="font-primary-regular text-[12px] tablet:text-[20px] text-white bg-black/70 p-[20px] rounded-t">
								Somos una empresa de mecanizado de alta calidad fundada por José
								y Ricardo, dos oriundos de Escobar, Buenos Aires. Nos
								enorgullece seguir los más altos estándares de calidad y
								servicio al cliente, siguiendo el estándar de calidad ISO 9001.
								Nos enfocamos en brindar soluciones personalizadas para
								satisfacer las necesidades de cada uno de nuestros clientes.
								Cada trabajo que realizamos es completado de manera óptima para
								cumplir con las expectativas de nuestros clientes.
							</p>
							<p className="font-primary-regular text-[12px] tablet:text-[20px] text-white pt-[20px] mb-[25px] pb-[25px] laptop:pb-[25px] laptop:mb-[0px] bg-black/70 px-[20px] rounded-b">
								Si estás interesado en conocer algunos de los trabajos que hemos
								realizado en el pasado, a continuación, puedes ver algunos
								ejemplos. Si necesitas un presupuesto o tienes alguna consulta,
								no dudes en contactarnos. ¡Estamos aquí para ayudarte!
							</p>
						</div>
						{/* ---------------------------------------- Carousel ---------------------------------------- */}
						<div className="flex flex-col items-center justify-center desktop:w-2/5 laptop:w-1/2 tablet:w-5/6 w-full">
							<Carousel
								images={[
									"Carousel1.jpg",
									"Carousel2.jpeg",
									"Carousel3.jpeg",
									"Carousel4.jpeg",
									"Carousel5.jpeg",
									"Carousel6.jpeg",
									"Carousel7.jpeg",
									"Carousel8.jpg",
									"Carousel9.jpg",
									"Carousel10.jpg",
									"Carousel11.jpg",
									"Carousel12.jpg",
									"Carousel13.jpg",
									"Carousel14.jpg",
									"Carousel15.jpg",
									"Carousel16.jpg",
									"Carousel17.jpg",
									"Carousel18.jpg",
									"Carousel19.jpg",
									"Carousel20.jpg",
									"Carousel21.jpg",
									"Carousel22.jpg",
									"Carousel23.jpg",
									"Carousel24.jpg",
									"Carousel25.jpg",
									"Carousel26.jpg",
									"Carousel27.jpeg",
									"Carousel28.jpeg",
									"Carousel29.jpeg",
									"Carousel30.jpeg",
									"Carousel31.jpg",
									"Carousel32.jpg",
									"Carousel33.jpeg",
									"Carousel34.jpeg",
									"Carousel35.jpeg",
									"Carousel36.jpeg",
									"Carousel37.jpeg",
									"Carousel38.jpeg",
									"Carousel39.jpeg",
									"Carousel40.jpeg",
									"Carousel41.jpeg",
									"Carousel42.jpeg",
									"Carousel43.jpeg",
									"Carousel44.jpeg",
									"Carousel45.jpeg",
									"Carousel46.jpeg",
									"Carousel47.jpeg",
								]}
							/>
						</div>
					</div>
				</div>
				{/* ---------------------------------------- Contact ---------------------------------------- */}
				<div
					id="contacto"
					className="flex flex-col items-center min-h-screen bg-[#343434]/95"
				>
					<h1 className="font-primary-extra-bold text-[45px] text-white desktop:pt-[100px] laptop:pt-[70px] tablet:pt-[80px] phone:pt-[50px] pt-[20px]">
						Contacto
					</h1>

					<a
						href="mailto:stimmjr@gmail.com"
						className="font-primary text-neutral-400 text-[25px] z-40 underline"
					>
						stimmjr@gmail.com
					</a>
					{/* ---------------------------------------- Form ---------------------------------------- */}
					<ContactForm />
				</div>
			</div>
		</>
	);
}
