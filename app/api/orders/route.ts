export async function POST(req: Request) {
  const { amount } = await req.json();

  const res = await fetch("https://api.oxapay.com/merchants/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      merchant: process.env.OXAPAY_API_KEY,
      amount: amount,
      currency: "USD",
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/callback`,
    }),
  });

  const data = await res.json();

  return Response.json(data);
}