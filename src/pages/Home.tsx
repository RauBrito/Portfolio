import { BtnV2 } from "../components/Btn";
import pfp from "/pfptemp.png";
const Home = () => {
  return (
    <div className="w-screen bg-neutral-900 flex">
      <div className="flex-1 flex flex-col gap-6 p-6 items-center md:min-h-[90vh] md:flex-row md:justify-evenly">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
};
export default Home;

const Left = () => {
  return (
    <div className="flex justify-center w-full md:w-1/4 md:flex-col md:justify-between md:min-h-[320px]">
      <div className="text-red-100 flex flex-col gap-4 ">
        <p className="font-[MatrixMono] text-center text-2xl md:text-left">raul brito</p>
        <p className="font-[MatrixMono] text-center text-sm  md:text-left">
          full stack <br />
          web developer
        </p>
      </div>
      <div className="hidden md:flex">
        <BtnV2 text="my cv" />
      </div>
    </div>
  );
};

const Center = () => {
  return (
    <div className="h-[400px] w-[200px] bg-neutral-800/20 lg:h-[500px] lg:w-[250px]">
      <img alt="pfp" src={pfp} />
    </div>
  );
};
const Right = () => {
  return (
    <div className="flex flex-col gap-6 justify-between items-center md:w-1/4 md:flex-col md:justify-between md:min-h-[320px] md:items-end">
      <p
        style={{ fontFamily: "MatrixMono" }}
        className="text-[10px]/5 linehe text-red-100 text-center md:text-right"
      >
        Programador especializado en la web y aplicaciones mobiles. Apasionado
        por resolver problemas y afrontar desafios, siempre buscando la
        innovacion y eficacia.
      </p>
      <BtnV2 text="my proyects" />
      <div className="md:hidden">
        <BtnV2 text="my cv" />
      </div>
    </div>
  );
};

/**
 * 
const Home = () => {
  return (
    <div className="w-screen h-[93vh] bg-black flex flex-col">
      <div className="flex-1 flex justify-between items-center px-48 bg-neutral-950">
        <Left />
        <Left />
        <Left />
      </div>
    </div>
  );
};
export default Home;

const Left = () => {
  return (
    <div className="w-1/4 h-[350px] flex flex-col justify-between pt-20 ">
      <div className="flex flex-col gap-2 text-red-100">
        <p style={{ fontFamily: "MatrixMono" }}>raul brito</p>
        <p style={{ fontFamily: "MatrixMono" }}>web developer</p>
      </div>
      <div className="">
        <BtnV2 text="my cv" pcolor="red-100" scolor="neutral-950" />
      </div>
    </div>
  );
};

const Center = () => {
  return (
    <div className="w-1/4 h-[500px] bg-neutral-800/20 ">
      <p>a</p>
    </div>
  );
};
const Right = () => {
  return (
    <div className="w-1/4 h-[350px] flex flex-col justify-between pt-20 items-end ">
      <p
        style={{ fontFamily: "MatrixMono" }}
        className="text-[10px]/5 linehe text-red-100 text-right"
      >
        Programador especializado en la web y aplicaciones mobiles.
        Apasionado por resolver problemas y afrontar desafios, siempre buscando
        la innovacion y eficacia.
      </p>
        <BtnV2 text="my cv" pcolor="red-100" scolor="neutral-950" />
    </div>
  );
};

 */
