import { reasons } from "./site-data";

export default function ReasonsSection() {
  return (
    <section className="section reasons">
      <div className="section-heading">
        <p className="eyebrow">LÝ DO LỰA CHỌN</p>
        <h2>
          Uy tín không đến từ lời giới thiệu, mà đến từ năng lực vận hành có thể
          kiểm chứng.
        </h2>
      </div>

      <div className="reason-grid">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
