import mongoose, { Schema } from "mongoose";

//Feedback Section

const feedbackSectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    review: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.FeedbackSection;

export const FeedbackSection =
  mongoose.models.FeedbackSection ||
  mongoose.model("FeedbackSection", feedbackSectionSchema);
