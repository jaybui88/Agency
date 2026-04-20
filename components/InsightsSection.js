import { insights } from "./site-data";

export default function InsightsSection() {
  return (
    <section className="section insights">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">TIN TỨC VÀ CẨM NANG</p>
          <h2>
            Nội dung chuyên môn giúp khách hàng đánh giá tốt hơn nhu cầu an ninh
            thực tế.
          </h2>
        </div>
        <a className="text-link" href="#lien-he">
          Nhận tư vấn theo nhu cầu
        </a>
      </div>

      <div className="insight-grid">
        {insights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
