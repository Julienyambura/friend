// src/models/User.ts
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface UserDoc extends mongoose.Document {
  username: string;
  password: string;
  matchPassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDoc>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Password matching function
userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// Pre-save hook to hash password before saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model<UserDoc>("User", userSchema);

export default User;
