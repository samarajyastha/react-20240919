import samsungTv from "../../assets/img/samsung-tv.png";
import jacket from "../../assets/img/jacket.png";
import cetaphil from "../../assets/img/cetaphil.png";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel
      className="bg-teal-500"
      autoPlay
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      infiniteLoop
    >
      <div className="grid grid-cols-2 items-center px-40 py-12">
        <div className="px-10">
          <h1 className="text-white text-6xl">Samsung QLED TV</h1>
          <p className="mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa
            obcaecati, accusamus soluta fuga voluptate consectetur facilis illum
            ratione distinctio?
          </p>
        </div>
        <img src={samsungTv} />
      </div>
      <div className="grid grid-cols-2 items-center px-40 py-12">
        <div className="px-10">
          <h1 className="text-white text-6xl">Levis Jacket</h1>
          <p className="mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa
            obcaecati, accusamus soluta fuga voluptate consectetur facilis illum
            ratione distinctio?
          </p>
        </div>
        <img src={jacket} />
      </div>
      <div className="grid grid-cols-2 items-center px-40 py-12">
        <div className="px-10">
          <h1 className="text-white text-6xl">Cetaphil Mosturizer</h1>
          <p className="mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui culpa
            obcaecati, accusamus soluta fuga voluptate consectetur facilis illum
            ratione distinctio?
          </p>
        </div>
        <img src={cetaphil} />
      </div>
    </Carousel>
  );
};

export default Hero;
