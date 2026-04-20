import GallerySection from "@/components/GallerySection";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { companyGallery, values } from "@/components/site-data";

const milestones = [
  "Tư vấn và khảo sát phương án theo đặc thù từng mục tiêu",
  "Tuyển chọn nhân sự theo tiêu chuẩn tác phong và kỷ luật",
  "Đào tạo nghiệp vụ, giao tiếp và xử lý tình huống định kỳ",
  "Giám sát thực tế để duy trì chất lượng dịch vụ ổn định",
];

const commitments = [
  "Đặt an toàn và tính liên tục trong vận hành của khách hàng lên hàng đầu",
  "Làm việc minh bạch về pháp lý, quy trình và trách nhiệm dịch vụ",
  "Xây dựng phương án riêng thay vì sử dụng giải pháp đại trà",
];

export const metadata = {
  title: "Giới thiệu | Anh Duong Security",
  description:
    "Trang giới thiệu công ty bảo vệ Anh Duong Security với định hướng vận hành, giá trị cốt lõi và cam kết dịch vụ.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="GIỚI THIỆU"
        title="Một đơn vị bảo vệ chuyên nghiệp phải tạo ra cảm giác yên tâm ngay từ cách vận hành."
        description="Anh Duong Security được xây dựng theo định hướng doanh nghiệp dịch vụ hiện đại: tác phong chuẩn mực, phản ứng nhanh và quy trình có thể kiểm chứng trong thực tế."
      />

      <section className="section">
        <SectionHeading
          eyebrow="TẦM NHÌN VÀ ĐỊNH HƯỚNG"
          title="Chúng tôi không chỉ cung cấp nhân sự bảo vệ, mà cung cấp một chuẩn vận hành an ninh."
          note="Mục tiêu của chúng tôi là giúp khách hàng duy trì môi trường làm việc an toàn, có trật tự và có khả năng kiểm soát rủi ro tốt hơn theo thời gian."
          split
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Sứ mệnh</h3>
            <p>
              Mang đến giải pháp bảo vệ phù hợp cho từng doanh nghiệp, dự án và
              mục tiêu trọng điểm bằng đội ngũ được đào tạo nghiêm túc, kết hợp
              cùng quy trình giám sát rõ ràng.
            </p>
          </article>
          <article className="content-card">
            <h3>Tầm nhìn</h3>
            <p>
              Trở thành đối tác an ninh đáng tin cậy của doanh nghiệp Việt Nam,
              nơi chất lượng dịch vụ được đo bằng kỷ luật, sự ổn định và tính
              minh bạch trong hợp tác.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="GIÁ TRỊ CỐT LÕI"
          title="Ba nền tảng giúp dịch vụ bảo vệ giữ được đẳng cấp lâu dài."
        />

        <div className="content-grid three-column">
          {values.map((value) => (
            <article key={value.title} className="content-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <GallerySection
        eyebrow="THƯ VIỆN HÌNH ẢNH"
        title="Hình ảnh tác nghiệp và môi trường làm việc giúp thương hiệu bảo vệ trở nên đáng tin hơn."
        note="Khối này đặc biệt hữu ích cho khách hàng mới vì họ có thể quan sát tác phong, đồng phục và môi trường triển khai thực tế."
        images={companyGallery}
      />

      <section className="section">
        <SectionHeading
          eyebrow="NĂNG LỰC TRIỂN KHAI"
          title="Mỗi mục tiêu bảo vệ đều được tiếp cận bằng một quy trình bài bản."
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Quy trình triển khai</h3>
            <ul className="feature-list">
              {milestones.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="content-card">
            <h3>Cam kết khi hợp tác</h3>
            <ul className="feature-list">
              {commitments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
