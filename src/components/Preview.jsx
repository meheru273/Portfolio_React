import React from "react";
import Thumbnail from "./Thumbnail.jsx";

/**
 * Fixed-ratio preview, used for the compact project banners where a uniform
 * box keeps the grid tidy. Real screenshot when there is one, schematic
 * otherwise. The container must be `relative` and carry `bg-surface`, since
 * both branches position absolutely and `contain` leaves bands.
 *
 * `fit: "contain"` is for images that must not be cropped — a tall phone
 * capture, a wide figure. Everything else is a UI screenshot, where cropping
 * from the top keeps the interesting part in frame.
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

/**
 * Side column for featured projects and papers: every image at its own
 * natural height, stacked. Letting a tall screenshot stay tall is the point —
 * it fills the column beside a long card instead of leaving a gap under one
 * cropped strip. Falls back to a single schematic when there are no images.
 */
export function PreviewStack({ images, thumb, className = "" }) {
  if (!images?.length) {
    return (
      <div className={className}>
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-lg border border-line bg-surface">
          <Thumbnail kind={thumb} />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full rounded-lg border border-line bg-surface"
        />
      ))}
    </div>
  );
}
