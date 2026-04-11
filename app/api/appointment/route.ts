import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  try {
    return new Response(
      JSON.stringify({ message: "request submitted successfully" }),
    );
  } catch (error) {
    throw new Error("something went wrong");
  }
}
