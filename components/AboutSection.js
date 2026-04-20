import { values } from "./site-data";

export default function AboutSection() {
  return (
    <section className="section intro" id="gioi-thieu">
      <div className="section-heading">
        <p className="eyebrow">VỀ CHÚNG TÔI</p>
        <h2>Đối tác an ninh đáng tin cậy cho môi trường vận hành chuyên nghiệp.</h2>
      </div>

      <div className="intro-grid">
        <div className="intro-card intro-story">
          <p>
          Anh Duong Security định hướng trở thành đơn vị cung cấp dịch vụ bảo
          vệ theo chuẩn doanh nghiệp hiện đại: tác phong chuẩn mực, quy trình
          rõ ràng và khả năng phản ứng linh hoạt trước mọi rủi ro an ninh.
          </p>
          <p>
            Thay vì cung cấp một mô hình cố định cho mọi khách hàng, chúng tôi
            bắt đầu từ khảo sát thực tế, phân tích đặc thù mục tiêu và xây dựng
            phương án triển khai phù hợp với yêu cầu vận hành, ngân sách và mức
            độ kiểm soát an ninh cần thiết.
          </p>
        </div>

        <div className="intro-card intro-values">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
