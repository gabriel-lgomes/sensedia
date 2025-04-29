// app/api/mock-user/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const mockUser = {
    name: "Lucas Andrade",
    email: "lucas.andrade@example.com",
  };

  return NextResponse.json(mockUser);
}
