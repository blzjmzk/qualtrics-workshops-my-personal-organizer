import Link from "next/link";
import "./resources.css";

export default function Resources() {
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
      Resources
    </section>
  );
}
