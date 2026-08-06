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
 * Images at their own natural height — letting a tall screenshot stay tall is
 * the point, since it fills the column beside a long card instead of leaving a
 * gap under one cropped strip. Falls back to a single schematic when there are
 * no images.
 *
 * `columns` puts them side by side instead of stacked. Wide paper figures run
 * to full card height when stacked at full width, so pairing them halves that
 * while keeping them larger than a narrow side column would allow.
 * `items-start` is required: a grid would otherwise stretch each image to the
 * row height and distort it.
 */
export function PreviewStack({ images, thumb, columns = false, className = "" }) {
  if (!images?.length) {
    return (
      <div className={className}>
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-lg border border-line bg-surface">
          <Thumbnail kind={thumb} />
        </div>
      </div>
    );
  }

  const layout = columns
    ? "grid items-start gap-3 sm:grid-cols-2"
    : "flex flex-col gap-3";

  // `max-w-full` + `max-h-*` with width and height left auto scales an image
  // down proportionally to fit both bounds — no `w-full`, which would force
  // the width and squash the image against the height cap. The cap stops a
  // very tall screenshot (a portrait phone capture) from setting the card's
  // height on its own; `mx-auto` then centres whatever ends up narrower.
  return (
    <div className={`${layout} ${className}`}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className={`mx-auto max-w-full rounded-lg border border-line bg-surface ${
            columns ? "" : "max-h-96"
          }`}
        />
      ))}
    </div>
  );
}
