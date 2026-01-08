import { connect_db } from "@/app/lib/connection";
import addProduct from "@/app/models/addProduct";
import { NextResponse } from "next/server";

await connect_db();
export async function POST(req) {
  let { id } = await req.json();

  let find_id = await addProduct.find({ _id: id });

  return NextResponse.json({
    status: 200,
    message: "done",
    data: find_id,
  });
}

export async function PUT(req) {
  let { id, name, description, price, sale } = await req.json();
  const find = await addProduct.findByIdAndUpdate(id, {
    name,
    description,
    price,
    sale,
  });
  if (id) {
    console.log(find);
  }
  return NextResponse.json({
    status: 200,
    message: "update",
  });
}

export async function GET() {
  const data = await addProduct.find();
  console.log("data");
  return NextResponse.json({ status: 200, message: "true", data: data });
}
