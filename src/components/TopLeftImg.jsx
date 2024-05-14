import { assets } from "../assets/assets";

const TopLeftImg = () => {
  return(
    <div className="h-[400px] w-[200px] xl:w-[400px] absolute left-0 top-0 z-10 opacity-40 mix-blend-color-dodge">
      <img className="h-full w-full object-cover" src={assets.TOP_LEFT_IMG} alt="image" />
    </div>
  )
};

export default TopLeftImg;
