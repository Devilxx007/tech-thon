import mongoose, { Schema, model, models } from "mongoose";

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    quote: { type: String },
    mode : { type: String, required: true},
    description: { type: String, required: true },
    importantDates: {
      type: [String], required: true ,
    },
    platform: { type: String, required: true },
    platformLink: { type: String }, // Optional, for Hack2skill links
    prizes: {
      winner: { type: String, required: true },
      runnersUp: { type: String, required: true },
    },
    detailsLink: { type: String }, // Link to additional details
    contacts: [
      {
        name: { type: String, required: true },
        phone: { type: String, required: true },
      },
    ],
    email: { type: String, required: true },
    registerLink: { type: String, required: true },
  },
  { timestamps: true }
);

export const Event = models.Event || model("Event", EventSchema);
