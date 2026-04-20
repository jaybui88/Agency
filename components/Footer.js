import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Image
          src="/brand/logo-horizontal.svg"
          alt="Logo ngang Anh Duong Security"
          width={300}
          height={84}
          className="footer-logo"
        />
        <p>
          Đơn vị cung cấp dịch vụ bảo vệ chuyên nghiệp cho doanh nghiệp, dự án
          và môi trường vận hành trọng điểm.
        </p>
      </div>
      <div>
        <p className="footer-title">Điều hướng</p>
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div>
        <p className="footer-title">Liên hệ</p>
        <a href="tel:0900123456">0900 123 456</a>
        <a href="mailto:contact@anhduongsecurity.vn">contact@anhduongsecurity.vn</a>
        <span>25 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
      </div>
    </footer>
  );
}
