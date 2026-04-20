import { featuredClients, testimonials } from "./site-data";

export default function ClientsSection() {
  return (
    <section className="section">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">KHÁCH HÀNG TIÊU BIỂU</p>
          <h2>Những mô hình khách hàng phù hợp nhất với định hướng vận hành của chúng tôi.</h2>
        </div>
        <p className="section-note">
          Khi thay bằng tên khách hàng thật, section này sẽ tăng độ tin cậy rất mạnh cho website.
        </p>
      </div>

      <div className="client-logo-grid">
        {featuredClients.map((client) => (
          <article key={client.name} className="client-logo-card">
            <span>{client.name}</span>
            <small>{client.sector}</small>
          </article>
        ))}
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.author} className="testimonial-card">
            <p>"{item.quote}"</p>
            <strong>{item.author}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
