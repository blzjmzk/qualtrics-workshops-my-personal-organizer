import Link from "next/link";
import "./resources.css";
import { Sidebar } from "../shared/sidebar/sidebar";
import { UploadResources } from "./upload-resources/upload-resources";

export default function Resources() {
  return (
    <div id="MyResources" className="my-resources-container">
      <Sidebar />

      <div className="main-content">
        <h3>My resources</h3>

        <UploadResources />
      </div>
    </div>
  );
}
