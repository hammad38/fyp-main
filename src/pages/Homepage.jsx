import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
// import Sidebar from "../components/Sidebar";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        {/* <Sidebar /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Homepage;
