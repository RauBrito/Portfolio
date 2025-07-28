import react_logo from "../image/react.png";
import node from "../image/node.png";
import mongo from "../image/mongo.png";
import expo from "../image/expo.png";
import figma from "../image/figma.png";

import norep1 from "../image/norep/iphone1.png";
import norep2 from "../image/norep/iphone2.png";
import norPC1 from "../image/norep/pc1.png";
import norPC2 from "../image/norep/pc2.png";
import logobx from "../image/norep/logobox.png";
import { BtnV2 } from "../components/Btn";

const proyect_st =
  "flex flex-col max-w-90 overflow-hidden self-center border-4 relative border-dark  md:border-primary md:flex-row md:max-w-280 md:w-full lg:max-h-110 md-pattern";

const Proyects = () => {
  return (
    <div className="bg-neutral-900 p-8 gap-6 flex flex-col">
      <p className="font-[Pixelify] text-2xl text-white lg:w-full lg:max-w-[1250px] lg:self-center">PROYECTS</p>
      {/* <TestGrid /> */}
      <TemplateProyect />
    </div>
  );
};

const TemplateProyect = () => {
  // const pattern = 'md:bg-[url(./src/image/pattern.png)] md:bg-no-repeat md:bg-right md:bg-cover'
  return (
    <div className={proyect_st}>
      <Info />
      <div className="w-full relative overflow-hidden grid grid-cols-2  md:w-full md:h-full py-12 px-6 content-center place-items-center gap-y-3 md:hidden pattern-3 ">
        <img src={norep1} className="w-30 h-60" />
        <img src={norep2} className="w-30 h-60" />
        <img src={norPC1} className="w-70 col-span-2 " />
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="relative">
      <div className="diagonal3 bg-dark w-[110%] left-0 h-full top-0 absolute z-30 hidden md:flex" />
      <div className="flex flex-col py-6 gap-4 box-border md:p-6 md:min-w-100 lg:min-w-120 h-full z-100 relative bg-dark md:bg-transparent">
        <p className="font-[Pixelify] text-white text-3xl font-semibold text-center md:text-left">
          NOREP JUECES CROSSFIT
        </p>
        <p className="font-[Pixelify] text-white md:max-w-100">
          Desarrollador con mas de 4 amos de experiencia. Amante de JavaScript,
          investigador innato y estudiante independiente, explorando nuevas
          tecnologías en el espectro MERN. Desde desarollo full-stack,
          desarrollo mobile, hasta administracion de base de datos y UML.
        </p>
        <p className="font-[Pixelify] text-white text-2xl font-semibold text-center">
          Tecnologias
        </p>
        <div className="flex gap-5 justify-center mb-6">
          <LogoReact />
          <LogoNode />
          <LogoMongoDB />
          <LogoExpo />
          <LogoFigma />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:mt-auto">
          <BtnV2 text="aver" className="btn_norep" bg="bg-neutral-900" />
          <BtnV2 text="aver" className="btn_norep" bg="bg-neutral-900" />
        </div>
      </div>
    </div>
  );
};

const Bg = () => {
  return (
    <div className="hidden md:flex absolute w-[200%] h-[200%] rotate-12 left-6 overflow-hidden">
      <div className="pattern w-full h-full -rotate-12 -left-12 relative" />
    </div>
  );
};

const ImgFill = () => {
  return (
    <>
      <img src={norPC1} alt="x" className="col-span-2" />
      <img src={norep1} alt="x" className="col-span-1 row-span-2" />
      <img src={logobx} alt="x" className="" />
      <img src={norep2} alt="x" className="col-span-1 row-span-2" />
      <img src={norep2} alt="x" className="col-span-1 row-span-2" />
      <img src={norep1} alt="x" className="col-span-1 row-span-2" />
      <img src={logobx} alt="x" className="" />
    </>
  );
};

const Images = () => {
  return (
    <div className="md-pattern min-h-120 max-h-150  relative flex justify-center md:min-h-90 md:flex-4/10 gap-8 overflow-hidden md:max-h-125 xl:max-h-95 md:overflow-visible md:-left-10">
      <Bg />
      <div className="absolute w-65 h-[200%] md:rotate-12 md:left-25 -top-12  overflow-hidden md:flex">
        <div className="grid grid-cols-2 w-full h-full gap-2.5 z-100 animate-top-scrol">
          <ImgFill />
          <ImgFill />
        </div>
      </div>
      <div className="absolute w-65 h-[200%] md:rotate-12 md:left-95 -top-12  overflow-hidden md:flex hidden">
        <div className="grid grid-cols-2 w-full h-full gap-2.5 z-100 animate-bottom-scrol">
          <ImgFill />
          <ImgFill />
        </div>
      </div>
    </div>
  );
};

const img_style = "w-8 h-8";
const LogoReact = () => (
  <img className={img_style} src={react_logo} alt="logo_react" />
);
const LogoNode = () => <img className={img_style} src={node} alt="logo_node" />;
const LogoMongoDB = () => (
  <img className={img_style} src={mongo} alt="logo_mongodb" />
);
const LogoExpo = () => <img className={img_style} src={expo} alt="logo_expo" />;
const LogoFigma = () => (
  <img className={img_style} src={figma} alt="logo_figma" />
);

export default Proyects;
