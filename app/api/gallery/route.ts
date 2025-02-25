import { connectToDB } from "@/lib/mongodb";
import { Photo } from "@/models/photos";
import { successResponse, errorResponse } from "@/lib/apiResponse";

// GET all gallery images
export async function GET() {
  await connectToDB();
  try {
    const galleryImages = await Photo.find({});
    return successResponse(galleryImages);
  } catch (error) {
    return errorResponse("Error fetching gallery images", 500, error);
  }
}

// POST a new gallery image
export async function POST(req: Request) {
  await connectToDB();
  try {
    const data = await req.json();
    const newImage = await Photo.create(data);
    return successResponse(newImage, 201);
  } catch (error) {
    return errorResponse("Error adding gallery image", 500, error);
  }
}
