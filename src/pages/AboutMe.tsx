import type { PropsWithChildren } from "react";
import pfp from "/square.png";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col text-red-100 p-6 gap-12 items-center lg:flex-row-reverse lg:justify-center lg:gap-24">
      <div className="flex flex-col gap-6 w-xs md:w-md">
        <p className="font-[Pixelify]">ABOUT ME</p>
        <p className="font-[MatrixMono] text-2xl">WHO IM?</p>
        <p className="font-[MatrixMono] text-[10px]">
          Desarrollador con mas de <Yellow>4 amos de experiencia</Yellow>.
          Amante de <Yellow>JavaScript</Yellow>, investigador innato y
          estudiante independiente, explorando nuevas tecnologias en el espectro
          <Green>MERN</Green>. Desde desarollo full-stack, desarrollo mobile,
          hasta administracion de base de datos y UML.
        </p>
        <p className="font-[MatrixMono] text-[10px]">
          Por otro lado, tambien demuestro mi pasion por los videojuegos y el
          arte, componiendo piezas en <Red>pixel art</Red> y creando pequenos
          <Cyan>videojuegos</Cyan> en mi tiempo libre.
        </p>
      </div>
      <div className="flex justify-center ">
        <BorderClips />
        <img src={pfp} alt="pfp" className="h-[350px] w-[300px]" />
      </div>
    </div>
  );
};

const BorderClips = () => {
  return (
    <div className="h-[350px] w-2 bg-red-100 relative">
      <div className="absolute right-2 top-0">
        <ClipA />
      </div>
      <div className="absolute right-2 top-13">
        <ClipB />
      </div>
      <div className="absolute right-2 top-26">
        <ClipC />
      </div>
    </div>
  );
};

export default AboutMe;

const Yellow = ({ children }: PropsWithChildren) => (
  <span className="text-amber-300">{children}</span>
);
const Red = ({ children }: PropsWithChildren) => (
  <span className="text-rose-400">{children}</span>
);
const Green = ({ children }: PropsWithChildren) => (
  <span className="text-emerald-400">{children}</span>
);
const Cyan = ({ children }: PropsWithChildren) => (
  <span className="text-cyan-300">{children}</span>
);

const ClipA = () => {
  return (
    <svg
      width="14"
      height="35"
      viewBox="0 0 14 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0H0V17.973L14 35V0Z" fill="#F4EAE0" />
      <path d="M6 13L14 8V18L6 13Z" fill="black" />
    </svg>
  );
};
const ClipB = () => {
  return (
    <svg
      width="14"
      height="35"
      viewBox="0 0 14 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0H0V17.973L14 35V0Z" fill="#D36B6B" />
      <path d="M6 13L14 8V18L6 13Z" fill="black" fill-opacity="0.5" />
    </svg>
  );
};
const ClipC = () => {
  return (
    <svg
      width="14"
      height="35"
      viewBox="0 0 14 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0H0V17.973L14 35V0Z" fill="#00E5FE" />
      <path d="M6 13L14 8V18L6 13Z" fill="black" fill-opacity="0.5" />
    </svg>
  );
};
