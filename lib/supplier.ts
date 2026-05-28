export async function sendToSupplier(order: any) {
  await fetch(`https://api.telegram.org/bot${process.env.SUPPLIER_BOT}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.SUPPLIER_CHAT_ID,
      text: `
🆕 NEW ORDER

Product: ${order.product}
Price: ${order.amount}
Address: ${order.address}
Type: ${order.type}
      `,
    }),
  });
}