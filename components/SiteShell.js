import Footer from "./Footer";
import Header from "./Header";

export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
