import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-orange-500">Super</span>
          <br />
          <span className="text-orange-500">Quality </span>Shoes
        </h2>
        <p className="info-text mt-4  lg:max-w-lg">
          We take pride in delivering superior quality shoes that not only
          elevate your style but also prioritize comfort and durability. Our
          commitment to excellence ensures that every step you take is a step in
          the right direction, with shoes that meet the highest standards of
          craftsmanship and materials.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Experience the difference in every pair, as we strive to provide you
          with nothing less than the best in footwear.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div>
        <img
          src={shoe8}
          alt="product-detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
