import { connectToDB } from "@/lib/mongodb";
import { Partner } from "@/models/sponsors";
import { successResponse, errorResponse } from "@/lib/apiResponse";

// GET all partners
export async function GET() {
  await connectToDB();
  try {
    const partners = await Partner.find({});
    return successResponse(partners);
  } catch (error) {
    return errorResponse("Error fetching partners", 500, error);
  }
}

// POST a new partner
export async function POST(req: Request) {
  await connectToDB();
  try {
    const data = await req.json();
    const newPartner = await Partner.create(data);
    return successResponse(newPartner, 201);
  } catch (error) {
    return errorResponse("Error adding partner", 500, error);
  }
}
