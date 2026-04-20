import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { companyGallery, projects } from "@/components/site-data";
import GallerySection from "@/components/GallerySection";

const sectors = [
  "Nhà máy và khu sản xuất",
  "Tòa nhà văn phòng và khu thương mại",
  "Công trường xây dựng và dự án hạ tầng",
  "Sự kiện doanh nghiệp và khu vực đón tiếp khách mời",
];

const results = [
  "Siết chặt kiểm soát người và phương tiện ra vào",
  "Giảm nguy cơ thất thoát tài sản và vật tư",
  "Nâng cao hình ảnh vận hành chuyên nghiệp tại mục tiêu",
  "Duy trì báo cáo và phối hợp xử lý tình huống minh bạch",
];

export const metadata = {
  title: "Dự án | Anh Duong Security",
  description:
    "Trang dự án của Anh Duong Security giới thiệu các mô hình triển khai bảo vệ cho nhà máy, tòa nhà, công trường và sự kiện.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="DỰ ÁN"
        title="Mỗi dự án là một minh chứng rõ ràng cho khả năng vận hành và kiểm soát an ninh."
        description="Chúng tôi tập trung vào những mô hình triển khai có tính thực tế cao, nơi dịch vụ bảo vệ không chỉ giữ an toàn mà còn góp phần giữ nhịp vận hành ổn định cho khách hàng."
      />

      <section className="section">
        <SectionHeading
          eyebrow="MÔ HÌNH TIÊU BIỂU"
          title="Các loại hình mục tiêu mà chúng tôi thường xuyên triển khai dịch vụ bảo vệ."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <GallerySection
        eyebrow="HÌNH ẢNH TRIỂN KHAI"
        title="Những khung hình thực tế giúp khách hàng hình dung rõ hơn về cách lực lượng được bố trí tại mục tiêu."
        images={companyGallery.slice(0, 4)}
      />

      <section className="section">
        <SectionHeading
          eyebrow="LĨNH VỰC PHỤC VỤ"
          title="Dịch vụ được điều chỉnh theo đặc thù của từng ngành và từng môi trường vận hành."
        />

        <div className="content-grid two-column">
          <article className="content-card">
            <h3>Nhóm mục tiêu chính</h3>
            <ul className="feature-list">
              {sectors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="content-card">
            <h3>Kết quả khách hàng quan tâm</h3>
            <ul className="feature-list">
              {results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
