import { capabilities } from "./site-data";

export default function CapabilitySection() {
  return (
    <section className="section capability" id="nang-luc">
      <div className="capability-copy">
        <p className="eyebrow">NĂNG LỰC VÀ PHÁP LÝ</p>
        <h2>
          Nền tảng của một dịch vụ bảo vệ bền vững là con người, quy trình và
          tính minh bạch.
        </h2>
        <p>
          Chúng tôi đầu tư vào tuyển chọn nhân sự, đào tạo tác phong nghiệp vụ
          và tổ chức giám sát thực tế để bảo đảm chất lượng dịch vụ luôn nhất
          quán. Song song đó là hệ thống hồ sơ pháp lý và quy trình hợp tác minh
          bạch dành cho khách hàng doanh nghiệp.
        </p>
      </div>

      <div className="capability-panel">
        <ul>
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="button button-secondary" href="#lien-he">
          Nhận hồ sơ năng lực
        </a>
      </div>
    </section>
  );
}
