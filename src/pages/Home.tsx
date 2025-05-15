import { BtnV2 } from "../components/Btn";
import pfp from "/pfptemp.png";
const Home = () => {
  return (
    <div className="w-screen bg-neutral-900 flex">
      <div className="relative flex-1 flex flex-col gap-6 p-6 pb-24 items-center md:min-h-[90vh] md:flex-row md:justify-evenly md:pb-6">
        <Left />
        <Center />
        <Right />
        <div className="absolute bottom-6">
          <Lines />
        </div> 
      </div>
    </div>
  );
};
export default Home;

const Left = () => {
  return (
    <div className="flex justify-center w-full md:w-1/4 md:flex-col md:justify-between md:min-h-[320px]">
      <div className="text-red-100 flex flex-col gap-4 ">
        <p className="font-[MatrixMono] text-center text-2xl md:text-left">
          raul brito
        </p>
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

const Lines = () => {
  return (
    <svg
      width="42"
      height="14"
      viewBox="0 0 42 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="42" y2="1" stroke="white" stroke-width="2" />
      <line x1="9" y1="7" x2="33" y2="7" stroke="white" stroke-width="2" />
      <line x1="17" y1="13" x2="25" y2="13" stroke="white" stroke-width="2" />
    </svg>
  );
};
