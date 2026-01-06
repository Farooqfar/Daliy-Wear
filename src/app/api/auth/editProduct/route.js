import { NextResponse } from "next/server";

export async function POST(req) {
  let { id } = await req.json();
  console.log(id);
  return NextResponse.json({
    status: 200,
    message: "",
  });
}
