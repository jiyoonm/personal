import ProjectCard from "../project-card";

export default function Grid({ GridData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  px-7">
      {GridData.map((info, i) => {
        return <ProjectCard info={info} key={i} />;
      })}
    </div>
  );
}
