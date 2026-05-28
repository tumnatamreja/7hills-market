import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const product = await Product.create(body);
  return Response.json(product);
}