export default function SectionHeading({ eyebrow, title, note, split = false }) {
  return (
    <div className={`section-heading${split ? " split" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
