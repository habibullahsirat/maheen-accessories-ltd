import mongoose, { Schema } from "mongoose";

//Feature Section
const featureSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const ctaSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

const featureSectionSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
    featureOne: {
      type: featureSchema,
    },
    featureTwo: {
      type: featureSchema,
    },
    featureThree: {
      type: featureSchema,
    },
    featureFour: {
      type: featureSchema,
    },
    cta: {
      type: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.FeatureSection;

export const FeatureSection =
  mongoose.models.FeatureSection ||
  mongoose.model("FeatureSection", featureSectionSchema);
