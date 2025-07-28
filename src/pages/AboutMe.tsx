import { useEffect, useState, type PropsWithChildren } from "react";
import pfp from "/square.png";

const AboutMe = () => {
  const [display, setDisplay] = useState(1);

  const setA = () => setDisplay(1);
  const setB = () => setDisplay(2);
  const setC = () => setDisplay(3);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col text-red-100 p-6 gap-12 items-center lg:flex-row-reverse lg:justify-center lg:gap-24">
      <div className="flex flex-col gap-6 w-xs md:w-md">
        <p className="font-[Pixelify]">ABOUT ME</p>
        <p className="font-[MatrixMono] text-2xl cursor-pointer underline decoration-neutral-900 hover:decoration-red-100 transition-all duration-300 " onClick={setA} >
          WHO IM?
        </p>
        <p className="font-[MatrixMono] text-[10px]/5 text-justify">
          Desarrollador con mas de <Yellow>4 años de experiencia</Yellow>.
          Amante de <Yellow>JavaScript</Yellow>, investigador innato y
          estudiante independiente, explorando nuevas tecnologias en el espectro
          <Green> MERN</Green>. Desde desarollo full-stack, desarrollo mobile,
          hasta administracion de base de datos y UML.
        </p>
        <p className="font-[MatrixMono] text-[10px]/5 text-justify">
          Por otro lado, tambien demuestro mi pasion por los videojuegos y el
          arte, componiendo piezas en <Red set={setB} >pixel art</Red> y creando pequenos{" "}
          <Cyan set={setC} >videojuegos</Cyan> en mi tiempo libre.
        </p>
      </div>
      <div className="flex justify-center">
        <BorderClips {...{ display }} />
        <img src={pfp} alt="pfp" className="h-[350px] w-[300px]" />
      </div>
    </div>
  );
};

// const Ñ = () => {
//   return (
//     <span className="relative inline-flex ">
//       <div className="w-[75%] h-[2px] absolute -top-[0px] left-[1px] bg-amber-300" />
//       n
//     </span>
//   );
// };

const BorderClips = ({ display }: { display: number }) => {
  const [clip, setClip] = useState("bg-red-100");
  const cClipA = () => setClip("bg-red-100");
  const cClipB = () => setClip("bg-rose-400");
  const cClipC = () => setClip("bg-cyan-300");

  useEffect(() => {
    if (display === 1) cClipA();
    else if (display === 2) cClipB();
    else cClipC();
  }, [display]);

  return (
    <div className={"h-[350px] w-2 relative transition duration-350 " + clip}>
      <div className="absolute right-2 top-0 cursor-pointer " onClick={cClipA}>
        <ClipA />
      </div>
      <div className="absolute right-2 top-13 cursor-pointer " onClick={cClipB}>
        <ClipB />
      </div>
      <div className="absolute right-2 top-26 cursor-pointer " onClick={cClipC}>
        <ClipC />
      </div>
    </div>
  );
};

export default AboutMe;

const Yellow = ({ children }: PropsWithChildren) => (
  <span className="text-amber-300">{children}</span>
);
const Red = ({ children,set }: {set:()=>void}&PropsWithChildren) => (
  <span onClick={set} className="text-rose-400 cursor-pointer underline decoration-neutral-900 hover:decoration-rose-400 transition-all duration-300">{children}</span>
);
const Green = ({ children }: PropsWithChildren) => (
  <span className="text-emerald-400">{children}</span>
);
const Cyan = ({ children,set }: {set:()=>void}&PropsWithChildren) => (
  <span onClick={set} className="text-cyan-300 cursor-pointer underline decoration-neutral-900 hover:decoration-cyan-300 transition-all duration-300">{children}</span>
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
      <path d="M14 0H0V17.973L14 35V0Z" fill="#F87171" />
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
      <path d="M14 0H0V17.973L14 35V0Z" fill="#67E8F9" />
      <path d="M6 13L14 8V18L6 13Z" fill="black" fill-opacity="0.5" />
    </svg>
  );
};
