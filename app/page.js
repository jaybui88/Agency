import AboutSection from "@/components/AboutSection";
import CapabilitySection from "@/components/CapabilitySection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/InsightsSection";
import LegalSection from "@/components/LegalSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReasonsSection from "@/components/ReasonsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { companyGallery } from "@/components/site-data";
import SiteShell from "@/components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ReasonsSection />
      <GallerySection
        eyebrow="HÌNH ẢNH CÔNG TY"
        title="Những hình ảnh trực quan giúp khách hàng nhìn rõ hơn về đội ngũ và cách chúng tôi vận hành."
        note="Khi có ảnh thật của công ty, bạn chỉ cần thay file trong thư mục public/images là toàn bộ gallery sẽ cập nhật theo."
        images={companyGallery}
      />
      <ProcessSection />
      <LegalSection />
      <CapabilitySection />
      <ClientsSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactSection />
    </SiteShell>
  );
}
