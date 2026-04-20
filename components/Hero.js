import Image from "next/image";
import { heroMetrics, heroPhotos, trustBadges } from "./site-data";

export default function Hero() {
  const [featuredPhoto, ...supportingPhotos] = heroPhotos;

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">GIẢI PHÁP AN NINH DOANH NGHIỆP</p>
        <h1>An ninh vận hành theo chuẩn doanh nghiệp hiện đại.</h1>
        <p className="lead">
          Dịch vụ bảo vệ chuyên nghiệp cho nhà máy, tòa nhà, công trường và sự
          kiện, với quy trình triển khai rõ ràng, tác phong chuẩn mực và cơ chế
          giám sát liên tục.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#lien-he">
            Nhận tư vấn ngay
          </a>
          <a className="button button-secondary" href="#dich-vu">
            Khám phá dịch vụ
          </a>
        </div>

        <ul className="trust-list">
          {trustBadges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>

        <div className="hero-metrics-row">
          {heroMetrics.map((metric) => (
            <article key={metric.label} className="metric-chip">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="hero-panel">
        <figure className="hero-showcase">
          <div className="hero-showcase-media">
            <Image
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 40vw"
            />
          </div>

          <div className="hero-showcase-copy">
            <p className="panel-label">Hình ảnh vận hành</p>
            <h3>{featuredPhoto.caption}</h3>
            <p>
              Không gian điều phối, giám sát và triển khai lực lượng được tổ
              chức bài bản để bảo đảm phản ứng nhanh và kiểm soát chặt chẽ.
            </p>
          </div>
        </figure>

        <div className="hero-support-grid">
          {supportingPhotos.map((photo) => (
            <figure key={photo.src} className="hero-support-card">
              <div className="hero-support-media">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1040px) 100vw, 20vw"
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </aside>
    </section>
  );
}
