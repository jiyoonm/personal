import ProjectCard from "../project-card";

export default function Grid({ GridData }) {
  return (
    <>
      <div className="pb-8 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3  px-">
        {GridData.map((info, i) => {
          return <ProjectCard info={info} key={i} />;
        })}
      </div>
    </>
  );
}
