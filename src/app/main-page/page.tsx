import Link from "next/link";
import "./main-page.css";
import { Sidebar } from "../shared/sidebar/sidebar";

export default function MainPage() {
  return (
    <section id="MainPage" className="main-page-container">
      <Sidebar />
      MainPage
    </section>
  );
}
