"use client";
import { CldImage as NextCldImage } from "next-cloudinary";

export default function CldImage({ ...props }) {
  return <NextCldImage {...props} />;
}
