import { contactMeta } from "./site-data";

export default function ContactSection({ standalone = false }) {
  return (
    <section
      className={`contact${standalone ? " contact-standalone" : " section"}`}
      id="lien-he"
    >
      <div className="contact-copy">
        <p className="eyebrow">LIÊN HỆ</p>
        <h2>
          Bắt đầu bằng một buổi khảo sát, để phương án bảo vệ được xây dựng đúng
          với nhu cầu thực tế.
        </h2>
        <p>
          Chia sẻ loại hình mục tiêu, thời gian cần triển khai và yêu cầu kiểm
          soát an ninh. Đội ngũ của chúng tôi sẽ liên hệ để tư vấn phương án phù
          hợp và gửi báo giá nhanh chóng.
        </p>
        <div className="contact-meta">
          {contactMeta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <form className="contact-form">
        <label>
          Họ và tên
          <input type="text" placeholder="Nguyễn Văn A" />
        </label>
        <label>
          Số điện thoại
          <input type="tel" placeholder="0900 123 456" />
        </label>
        <label>
          Loại hình cần bảo vệ
          <select defaultValue="Tòa nhà / Văn phòng">
            <option>Tòa nhà / Văn phòng</option>
            <option>Nhà máy / Kho bãi</option>
            <option>Công trường</option>
            <option>Sự kiện</option>
            <option>Khác</option>
          </select>
        </label>
        <label>
          Yêu cầu chi tiết
          <textarea
            rows="4"
            placeholder="Mô tả sơ bộ mục tiêu, thời gian triển khai, quy mô cần tư vấn"
          />
        </label>
        <button className="button button-primary" type="submit">
          Yêu cầu tư vấn
        </button>
      </form>
    </section>
  );
}
