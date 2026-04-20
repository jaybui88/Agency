import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function GallerySection({ eyebrow, title, note, images }) {
  return (
    <section className="section">
      <SectionHeading eyebrow={eyebrow} title={title} note={note} split={Boolean(note)} />

      <div className="gallery-grid">
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className={`gallery-card${image.featured ? " gallery-card-featured" : ""}`}
          >
            <div className="gallery-media">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1040px) 100vw, 33vw" />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
