import Image from "next/image";
import { projects } from "./site-data";

export default function ProjectsSection() {
  return (
    <section className="section projects" id="du-an">
      <div className="section-heading">
        <p className="eyebrow">KHÁCH HÀNG VÀ DỰ ÁN</p>
        <h2>
          Các mô hình triển khai tiêu biểu cho doanh nghiệp, công trình và khu
          vận hành trọng điểm.
        </h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1040px) 100vw, 33vw"
              />
            </div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
