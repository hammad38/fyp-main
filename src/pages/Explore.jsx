import Sidebar from "../components/Sidebar";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Explore = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavLink to={"/"} className="link flex items-center pl-5">
          <Sidebar />
        </NavLink>

      </div>
      <ButtonGradient />
    </>
  );
};

export default Explore;
