import Image from "next/image";
export default function Detail() {
  const iconSize = 22;
  const smIconSize = 16;
  const detail = {
    type: "image",
    title: "Title Here",
    date: "2/2",
    themes: ["theme1", "theme2", "theme3"],
    organization: "DSS",

    overview: "jkasdfadsj fjasdfjasd jdsfakjsdf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ",
  };
  return (
    <div>
      <div></div>
      <div className="mb-10 relative h-[40vh] w-full bg-primary sm:h-[40vh] md:h-[60vh]">
        <Image
          layout="fill"
          src={"/static/bg11.jpeg"}
          objectFit="cover"
          alt="image"
        />{" "}
      </div>
      <div className="mb-7 border-t-grey  border-b-[1px] ">
        <h1 className=" mb-5  border-bottom">{detail.title}</h1>
      </div>
      <div className="w-4/6 flex justify-between mb-10">
        <p>Date: {detail.date}</p>
        <p>Themes: {detail.themes.join(", ")}</p>
        <p>Organization: {detail.organization}</p>
      </div>
      <div className="my-10 w-1/2 flex flex-col gap-10 justify-between">
        <div className="mb-5">
          <h3 className="mb-5">Overview</h3>
          <p>{detail.overview}</p>
        </div>
        <div>
          <h3 className="mb-5">Description</h3>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
}
