import mongoose, { type Document, Schema } from "mongoose";

export interface IVeterinarian extends Document {
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  location: {
    type: string;
    coordinates: number[];
  };
}

const VeterinarianSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  specialties: [{ type: String }],
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

VeterinarianSchema.index({ location: "2dsphere" });

export default mongoose.model<IVeterinarian>(
  "Veterinarian",
  VeterinarianSchema
);
