import { Barlow_Condensed, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Anh Duong Security | Dịch vụ bảo vệ chuyên nghiệp",
  description:
    "Mẫu website Next.js cho công ty bảo vệ với giao diện chuyên nghiệp, đáng tin cậy và tối ưu chuyển đổi khách hàng doanh nghiệp.",
  icons: {
    icon: "/brand/logo-mark.svg",
    shortcut: "/brand/logo-mark.svg",
    apple: "/brand/logo-mark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
