import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex  md:flex-row sm:flex-col sm:py-4 max-w-[1200px] mx-auto justify-between items-center relative px-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
