import mongoose, { type Document, Schema } from "mongoose";

export interface IShelter extends Document {
  name: string;
  address: string;
  phone: string;
  website: string;
  location: {
    type: string;
    coordinates: number[];
  };
}

const ShelterSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
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

ShelterSchema.index({ location: "2dsphere" });

export default mongoose.model<IShelter>("Shelter", ShelterSchema);
