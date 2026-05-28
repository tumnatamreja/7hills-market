"use client";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    const res = await fetch("/api/orders");
    const data = await res.json();
    setOrders(data);
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });

    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-6">ORDERS</h1>

      <div className="space-y-4">
        {orders.map((o: any) => (
          <div key={o._id} className="glass p-4">

            <p>{o.product}</p>
            <p>${o.amount}</p>
            <p>{o.address}</p>

            <p className="mb-3">
              Status: <b>{o.status}</b>
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => updateStatus(o._id, "shipped")}
                className="bg-blue-500 px-4 py-2"
              >
                SHIPPED
              </button>

              <button
                onClick={() => updateStatus(o._id, "done")}
                className="bg-green-500 px-4 py-2"
              >
                DONE
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}