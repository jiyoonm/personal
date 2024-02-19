import ProjectListItem from "./project-list-item";
import archiveInfo from "../dummy-data/archive-grid-info";
export default function ProjectList({}) {
  return (
    <div className="grid grid-cols-1 gap-0  px-2">
      {archiveInfo.map((info, i) => {
        return <ProjectListItem info={info} key={info.id} />;
      })}
    </div>
  );
}
