import mongoose, { type Document, Schema } from "mongoose"

export interface IAnimal extends Document {
  name: string
  breed: string
  description: string
  image: string
  questions: string[]
  rehomerContact: string
}

const AnimalSchema: Schema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  questions: [{ type: String, required: true }],
  rehomerContact: { type: String, required: true },
})

export default mongoose.model<IAnimal>("Animal", AnimalSchema)

