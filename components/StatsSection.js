import { companyStats } from "./site-data";

export default function StatsSection() {
  return (
    <section className="section">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">VẬN HÀNH THỰC TẾ</p>
          <h2>Những con số giúp khách hàng nhìn rõ hơn quy mô và năng lực triển khai.</h2>
        </div>
        <p className="section-note">
          Đây là nhóm thông tin thường được khách hàng doanh nghiệp quan tâm trước khi yêu cầu khảo sát hoặc nhận báo giá.
        </p>
      </div>

      <div className="stats-grid">
        {companyStats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
