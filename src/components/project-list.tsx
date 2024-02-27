"use client";
import ProjectListItem from "./project-list-item";
import archiveInfo from "../dummy-data/archive-grid-info";
export default function ProjectList({ id }) {
  const filteredArchive = archiveInfo.filter((item) => item.id !== id);
  console.log(filteredArchive, "S");
  return (
    <div className="grid grid-cols-1 gap-0   ">
      {filteredArchive.map((info, i) => {
        return <ProjectListItem info={info} key={info.id} />;
      })}
    </div>
  );
}
