import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { contactMeta } from "@/components/site-data";

const supportReasons = [
  "Khảo sát nhanh theo loại hình mục tiêu cần bảo vệ",
  "Tư vấn sơ bộ phương án triển khai và số lượng nhân sự phù hợp",
  "Phản hồi báo giá theo phạm vi công việc thực tế",
];

export const metadata = {
  title: "Liên hệ | Anh Duong Security",
  description:
    "Liên hệ Anh Duong Security để nhận tư vấn giải pháp bảo vệ, khảo sát thực tế và báo giá theo nhu cầu doanh nghiệp.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="LIÊN HỆ"
        title="Trao đổi nhu cầu của bạn để chúng tôi đề xuất phương án bảo vệ phù hợp."
        description="Một buổi trao đổi đúng trọng tâm sẽ giúp rút ngắn thời gian khảo sát, làm rõ mức độ kiểm soát an ninh và đưa ra báo giá sát với thực tế hơn."
      />

      <section className="section">
        <SectionHeading
          eyebrow="THÔNG TIN LIÊN HỆ"
          title="Chúng tôi sẵn sàng tiếp nhận yêu cầu từ doanh nghiệp, nhà máy, công trường và sự kiện."
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Thông tin văn phòng</h3>
            <ul className="feature-list">
              {contactMeta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="content-card">
            <h3>Bạn sẽ nhận được gì</h3>
            <ul className="feature-list">
              {supportReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="YÊU CẦU TƯ VẤN"
          title="Gửi thông tin cơ bản để đội ngũ tư vấn liên hệ lại nhanh chóng."
        />
        <ContactSection standalone />
      </section>
    </SiteShell>
  );
}
