import Link from "next/link";

export default function Admin() {
  return (
    <div className="p-10">

      <h1 className="text-3xl mb-10">ADMIN PANEL</h1>

      <div className="flex gap-6">
        <Link href="/admin/products">
          <button className="bg-emerald-500 px-6 py-3 rounded">
            PRODUCTS
          </button>
        </Link>

        <Link href="/admin/orders">
          <button className="bg-yellow-500 px-6 py-3 rounded">
            ORDERS
          </button>
        </Link>
      </div>

    </div>
  );
}