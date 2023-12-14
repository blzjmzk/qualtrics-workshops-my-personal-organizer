import Link from "next/link";
import "./resources.css";
import { Sidebar } from "../shared/sidebar/sidebar";

export default function Resources() {
  return (
    <section id="MainPage" className="main-page-container">
      <Sidebar />
      Resources
    </section>
  );
}
