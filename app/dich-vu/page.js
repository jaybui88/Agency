import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { services } from "@/components/site-data";

const serviceBenefits = [
  "Khảo sát và tư vấn phương án trước khi triển khai",
  "Điều chỉnh số lượng nhân sự theo quy mô mục tiêu",
  "Báo cáo và giám sát chất lượng dịch vụ định kỳ",
  "Linh hoạt kết hợp giữa con người và thiết bị an ninh khi cần",
];

export const metadata = {
  title: "Dịch vụ | Anh Duong Security",
  description:
    "Danh mục dịch vụ bảo vệ cho tòa nhà, nhà máy, công trường, sự kiện và các mục tiêu cố định của Anh Duong Security.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="DỊCH VỤ"
        title="Danh mục dịch vụ được thiết kế linh hoạt cho từng loại hình an ninh."
        description="Từ văn phòng, tòa nhà, nhà máy đến công trường và sự kiện, chúng tôi triển khai theo mô hình phù hợp với thực tế vận hành thay vì dùng một công thức cố định."
      />

      <section className="section">
        <SectionHeading
          eyebrow="DỊCH VỤ CHỦ LỰC"
          title="Các gói dịch vụ dành cho doanh nghiệp, dự án và khu vực vận hành trọng điểm."
        />

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

      <section className="section">
        <SectionHeading
          eyebrow="LỢI THẾ TRIỂN KHAI"
          title="Mỗi gói dịch vụ đều đi kèm tiêu chuẩn vận hành rõ ràng."
          note="Đó là lý do khách hàng doanh nghiệp thường ưu tiên đối tác có thể giải thích được họ sẽ triển khai ra sao, thay vì chỉ nêu danh sách nhân sự."
          split
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Điểm mạnh dịch vụ</h3>
            <ul className="feature-list">
              {serviceBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="content-card accent-card">
            <h3>Cần giải pháp riêng theo mục tiêu?</h3>
            <p>
              Với những dự án có yêu cầu đặc thù, chúng tôi có thể xây dựng
              phương án bảo vệ riêng dựa trên khảo sát thực tế, sơ đồ mặt bằng
              và mức độ kiểm soát an ninh mong muốn.
            </p>
            <a className="button button-primary" href="/lien-he">
              Liên hệ nhận tư vấn
            </a>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
