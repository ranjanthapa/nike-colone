import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="'max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-orange-500">Popular</span> Products
        </h2>
        <p className="font-montserrat mt-2 text-slate-gray lg:max-w-lg">
          Discover our popular products, where style meets demand. Explore the
          favorites of our customers, curated just for you.
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-6">
          {products.map((product, index) => (
            <PopularProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
