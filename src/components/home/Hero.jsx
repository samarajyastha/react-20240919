import samsungTv from "../../assets/img/samsung-tv.png";
import jacket from "../../assets/img/jacket.png";
import cetaphil from "../../assets/img/cetaphil.png";
import onePlus from "../../assets/img/op-nord-3.png";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import Feature from "./Feature";
import { BiCreditCard } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      <Carousel
        className="bg-teal-400"
        autoPlay
        showThumbs={false}
        showArrows={false}
        infiniteLoop
      >
        <CarouselItem label="Samsung QLED TV" imgSrc={samsungTv} />
        <CarouselItem label="Levis Jacket" imgSrc={jacket} />
        <CarouselItem label="Cetaphil Mosturizer" imgSrc={cetaphil} />
        <CarouselItem label="One Plus Nord 3" imgSrc={onePlus} />
      </Carousel>
      <div className="absolute -bottom-10 left-[15%] z-10 xl:flex justify-center hidden">
        <Feature label="Free Shipping" icon={<FaShippingFast />} />
        <Feature label="Easy Return" icon={<TbTruckReturn />} />
        <Feature label="Card Payment" icon={<BiCreditCard />} />
      </div>
    </div>
  );
};

export default Hero;
