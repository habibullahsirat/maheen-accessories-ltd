import { connectToDB } from "@/lib/connectToDB";
import { HeroSection } from "@/lib/models/Hero";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin":
    "https://maheen-accessories-ltd-public-pp0ym222b.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// export async function GET() {
//   await connectToDB();
//   const project = await HeroSection.find();
//   const response = NextResponse.json(project);
//   // response.headers.set("Access-Control-Allow-Origin", "*");
//   response.headers.set(
//     "Access-Control-Allow-Origin",
//     "https://maheen-accessories-ltd-public.vercel.app",
//   );
//   return response;
// }

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();

//     // Connect to the database
//     await connectToDB();
//     await HeroSection.create(data);
//     return NextResponse.json({ message: "Data created" }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating data:", error);
//     return NextResponse.json(
//       { message: "Failed to create data" },
//       { status: 500 },
//     );
//   }
// }

export async function GET() {
  await connectToDB();

  const project = await HeroSection.find();

  return NextResponse.json(project, {
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await connectToDB();
    await HeroSection.create(data);

    return NextResponse.json(
      { message: "Created" },
      {
        status: 201,
        headers: corsHeaders,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed" },
      {
        status: 500,
        headers: corsHeaders,
      },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
