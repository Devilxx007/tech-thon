import { connectToDB } from "@/lib/mongodb";
import { Event } from "@/models/events";
import { successResponse, errorResponse } from "@/lib/apiResponse";

// GET all events
export async function GET() {
  await connectToDB();
  try {
    const events = await Event.find();
    return successResponse(events);
  } catch (error) {
    return errorResponse("Error fetching events", 500, error);
  }
}

// POST a new event
export async function POST(req: Request) {
  await connectToDB();
  try {
    const data = await req.json();
    const newEvent = await Event.create(data);
    return successResponse(newEvent, 201);
  } catch (error) {
    return errorResponse("Error adding event", 500, error);
  }
}
