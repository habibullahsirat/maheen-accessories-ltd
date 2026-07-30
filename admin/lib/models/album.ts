import mongoose, { Schema } from "mongoose";

const albumSectionSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AlbumSection;

export const AlbumSection =
  mongoose.models.AlbumSection ||
  mongoose.model("AlbumSection", albumSectionSchema);
