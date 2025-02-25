import mongoose, { Schema, model, models } from "mongoose";

const PartnerSchema = new Schema(
  {
    logo: { type: String, required: true }, 
    link: { type: String, required: true },
  },
  { timestamps: true }
);

export const Partner = models.Partner || model("Partner", PartnerSchema);
