import prisma from "../../lib/db";

export async function GET(req: Request) {
  const res = await prisma.genproject.findMany();
  return Response.json(res);
}
