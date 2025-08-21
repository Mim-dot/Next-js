import Image from "next/image";
import Hero from "./component/Hero";
import ProductHighlights from "./component/ProductHighlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductHighlights />
    </div>
  );
}
