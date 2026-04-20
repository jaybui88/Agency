import Image from "next/image";
import { legalCredentials } from "./site-data";

export default function LegalSection() {
  return (
    <section className="section legal-section">
      <div className="section-heading">
        <p className="eyebrow">PHÁP LÝ VÀ CHỨNG TỪ</p>
        <h2>Những yếu tố tạo niềm tin mạnh nhất khi làm việc với khách hàng doanh nghiệp.</h2>
      </div>

      <div className="legal-grid">
        <div className="legal-panel">
          <div className="legal-brand-lockup">
            <Image
              src="/brand/logo-mark.svg"
              alt="Biểu tượng Anh Duong Security"
              width={56}
              height={56}
            />
            <div>
              <p className="panel-label">Hồ sơ sẵn sàng cung cấp</p>
              <strong>Anh Duong Security</strong>
            </div>
          </div>
          <ul className="feature-list">
            <li>Giấy phép hoạt động và thông tin pháp nhân</li>
            <li>Hồ sơ năng lực doanh nghiệp</li>
            <li>Quy trình tuyển dụng, đào tạo và giám sát</li>
            <li>Biểu mẫu báo cáo mục tiêu và đầu mối quản lý</li>
          </ul>
          <a className="button button-secondary" href="/lien-he">
            Yêu cầu hồ sơ năng lực
          </a>
        </div>

        <div className="content-grid three-column">
          {legalCredentials.map((item) => (
            <article key={item.title} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
