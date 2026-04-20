import { services } from "./site-data";

export default function ServicesSection() {
  return (
    <section className="section services" id="dich-vu">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">DỊCH VỤ CHỦ LỰC</p>
          <h2>Danh mục dịch vụ được xây dựng cho nhiều loại hình mục tiêu khác nhau.</h2>
        </div>
        <p className="section-note">
          Mỗi gói dịch vụ đều có thể điều chỉnh về nhân sự, sơ đồ trực, quy trình
          kiểm soát và chế độ giám sát theo đặc thù từng công trình.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article
            key={service.index}
            className={`service-card${service.highlight ? " service-card-highlight" : ""}`}
          >
            <span className="service-index">{service.index}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
