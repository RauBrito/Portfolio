import { Btn } from "./Btn";

const Header = () => {
  return (
    <div className=" w-screen bg-red-100 py-4 px-6">
      <div className="hidden justify-end gap-6 md:flex ">
        <Btn text="home" />
        <Btn text="about me" />
        <Btn text="proyects" />
      </div>
      <div className="flex justify-end md:hidden">
        <Icon_Menu/>
      </div>
    </div>
  );
};

export default Header;


const Icon_Menu = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    )
}