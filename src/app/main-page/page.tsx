import Link from "next/link";
import "./main-page.css";

export default function MainPage() {
  return (
    <section id="MainPage" className="main-page-container">
      <nav className="sidebar">
        <Link href="/" className="link">
          Main Page
        </Link>
        <Link href="/resources" className="link">
          Resources
        </Link>
      </nav>
    </section>
  );
}
