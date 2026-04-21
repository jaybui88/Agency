import Image from "next/image";
import { featuredClients, partnerTargets, testimonials } from "./site-data";

export default function ClientsSection() {
  return (
    <section className="section" id="khach-hang">
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

      <div className="client-target-grid">
        {partnerTargets.map((target) => (
          <article key={target.src} className="client-target-card">
            <div className="client-target-media">
              <Image
                src={target.src}
                alt={target.alt}
                fill
                sizes="(max-width: 1040px) 100vw, 50vw"
              />
            </div>
            <div className="client-target-copy">
              <h3>{target.title}</h3>
              <p>{target.location}</p>
            </div>
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
