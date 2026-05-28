export default function ProductCard({ product }: any) {
  return (
    <div className="glass p-6 rounded-xl">

      <img src={product.image} className="rounded-lg" />

      <h2 className="mt-4">{product.name}</h2>

      <p className="text-emerald-400">${product.price}</p>

      <button className="mt-4 w-full bg-emerald-500 py-3 text-black rounded-full">
        BUY
      </button>

    </div>
  );
}