import { sendTelegram } from "@/lib/telegram";

export async function POST(req: Request) {
  const data = await req.json();

  if (data.status === "Paid") {
    await sendTelegram(`✅ PAYMENT CONFIRMED: ${data.amount}`);
  }

  return new Response("OK");
}