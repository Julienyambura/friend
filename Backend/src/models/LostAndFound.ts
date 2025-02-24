import mongoose, { type Document, Schema } from "mongoose"

export interface ILostAnimal extends Document {
  name: string
  description: string
  lastSeen: string
  contactInfo: string
  image?: string
}

const LostAnimalSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  lastSeen: { type: String, required: true },
  contactInfo: { type: String, required: true },
  image: { type: String },
})

export default mongoose.model<ILostAnimal>("LostAnimal", LostAnimalSchema)

