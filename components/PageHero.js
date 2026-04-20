import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageCaption,
}) {
  return (
    <section className={`page-hero${image ? " has-media" : ""}`}>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      {image ? (
        <figure className="page-hero-media">
          <Image src={image} alt={imageAlt || title} fill sizes="(max-width: 1040px) 100vw, 42vw" priority />
          {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
        </figure>
      ) : null}
    </section>
  );
}
