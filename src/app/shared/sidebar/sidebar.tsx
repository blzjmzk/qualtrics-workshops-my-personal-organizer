import Link from "next/link";
import "./sidebar.css";

export function Sidebar() {
  return (
    <nav className="sidebar">
      <Link href="/" className="link">
        Main Page
      </Link>
      <Link href="/resources" className="link">
        Resources
      </Link>
    </nav>
  );
}
