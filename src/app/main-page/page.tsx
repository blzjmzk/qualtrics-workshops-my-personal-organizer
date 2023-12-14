import Link from "next/link";
import "./main-page.css";
import { Sidebar } from "../shared/sidebar/sidebar";
import { MyTasks } from "./my-tasks/my-tasks";

export default function MainPage() {
  return (
    <section id="MainPage" className="main-page-container">
      <Sidebar />
      <MyTasks />
    </section>
  );
}
