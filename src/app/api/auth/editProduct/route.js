import addProduct from "@/app/models/addProduct";
import { NextResponse } from "next/server";

export async function POST(req) {
  let { id } = await req.json();

  let find_id = await addProduct.find({ _id: id });
  console.log(find_id);
  return NextResponse.json({
    status: 200,
    message: "done",
    data: find_id,
  });
}
