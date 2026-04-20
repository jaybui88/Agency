import { processSteps } from "./site-data";

export default function ProcessSection() {
  return (
    <section className="section process">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">QUY TRÌNH TRIỂN KHAI</p>
          <h2>Triển khai nhanh, nhưng luôn bắt đầu từ khảo sát và kiểm soát rủi ro.</h2>
        </div>
        <a className="text-link" href="#lien-he">
          Đặt lịch khảo sát
        </a>
      </div>

      <div className="timeline">
        {processSteps.map((item) => (
          <article key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
