import ProductCard from "@/components/ProductCard";

export default async function Shop() {
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/products");
  const products = await res.json();

  return (
    <div className="grid md:grid-cols-3 gap-10 p-10">
      {products.map((p: any) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}