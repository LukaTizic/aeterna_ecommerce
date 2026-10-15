import DealCountdown from "@/components/deal-countdown";
import IconsBoxes from "@/components/icon-boxes";
import HomeHero from "@/components/home-hero";
import CategoryCards from "@/components/category-cards";
import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  const heroProduct = featuredProducts[0] ?? latestProducts[0];

  return (
    <div className="pb-16">
      <HomeHero product={heroProduct} />
      <CategoryCards />
      <ProductList
        data={latestProducts}
        title="New arrivals"
        limit={4}
        viewAllHref="/search"
      />
      <DealCountdown />
      <IconsBoxes />
    </div>
  );
};

export default Homepage;
