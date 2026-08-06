import React from "react";
import Thumbnail from "./Thumbnail.jsx";

/**
 * The visual for a project or paper: a real screenshot when one exists,
 * otherwise the schematic diagram for its `thumb` kind.
 *
 * `fit: "contain"` is for images that must not be cropped — a tall phone
 * capture, a wide architecture figure. Everything else is a UI screenshot,
 * where cropping from the top keeps the interesting part in frame.
 *
 * The container must be `relative` and carry `bg-surface`, since both branches
 * position absolutely and `contain` leaves bands.
 */
export default function Preview({ image, thumb, className = "" }) {
  if (!image) return <Thumbnail kind={thumb} className={className} />;

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full ${
        image.fit === "contain" ? "object-contain p-1" : "object-cover object-top"
      } ${className}`}
    />
  );
}
