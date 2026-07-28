import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";

export async function GET() {
  try {
    await connectToDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
