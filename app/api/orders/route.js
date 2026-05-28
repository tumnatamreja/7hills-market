import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { sendTelegram } from "@/lib/telegram";
import { sendToSupplier } from "@/lib/supplier";

// 👉 GET (за admin panel да виждаш orders)
export async function GET() {
  await connectDB();

  const orders = await Order.find().sort({ createdAt: -1 });

  return Response.json(orders);
}

// 👉 POST (когато клиент прави поръчка)
export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const order = await Order.create({
    ...body,
    status: "pending",
  });

  // 🤖 Telegram (ти)
  await sendTelegram(`
💰 NEW ORDER
Product: ${body.product}
Price: ${body.amount}
Type: ${body.type}
`);

  // 🏭 Supplier
  await sendToSupplier(body);

  return Response.json(order);
}