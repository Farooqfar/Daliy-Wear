import addProduct from "@/app/models/addProduct";
import { NextResponse } from "next/server";

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
