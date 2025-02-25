import mongoose, { Schema, model, models } from "mongoose";

const PhotoSchema = new Schema(
  {
    imageUrl: { type: String, required: true }, // URL of the image
    uploadedAt: { type: Date, default: Date.now }, // Timestamp
  },
  { timestamps: true }
);

export const Photo = models.Photo || model("Photo", PhotoSchema);
