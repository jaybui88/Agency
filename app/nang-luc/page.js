import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { capabilities, processSteps, reasons } from "@/components/site-data";

const trainingStandards = [
  "Tác phong, điều lệnh và quy chuẩn giao tiếp tại mục tiêu",
  "Nghiệp vụ kiểm soát người và phương tiện ra vào",
  "Tuần tra, ghi nhận sự cố và lập báo cáo ca trực",
  "Phối hợp xử lý tình huống khẩn cấp theo quy trình",
];

export const metadata = {
  title: "Năng lực | Anh Duong Security",
  description:
    "Trang năng lực của Anh Duong Security, trình bày quy trình vận hành, đào tạo nhân sự và tiêu chuẩn triển khai dịch vụ bảo vệ.",
};

export default function CapabilityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="NĂNG LỰC"
        title="Năng lực dịch vụ được thể hiện rõ nhất qua cách một đội ngũ vận hành mỗi ngày."
        description="Chúng tôi xây dựng chất lượng dịch vụ từ ba lớp nền tảng: tuyển chọn con người phù hợp, đào tạo đúng chuẩn và giám sát đủ chặt để dịch vụ luôn ổn định."
      />

      <section className="section">
        <SectionHeading
          eyebrow="TRỤ CỘT VẬN HÀNH"
          title="Nền tảng để duy trì chất lượng dịch vụ trong môi trường an ninh chuyên nghiệp."
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Năng lực cốt lõi</h3>
            <ul className="feature-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="content-card">
            <h3>Tiêu chuẩn đào tạo</h3>
            <ul className="feature-list">
              {trainingStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="QUY TRÌNH GIÁM SÁT"
          title="Mỗi mục tiêu đều cần được kiểm soát bằng quy trình rõ ràng và nhịp vận hành nhất quán."
        />

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

      <section className="section">
        <SectionHeading
          eyebrow="GIÁ TRỊ KIỂM CHỨNG"
          title="Khách hàng thường đánh giá năng lực qua sự ổn định, minh bạch và tốc độ phản ứng."
        />

        <div className="reason-grid">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
