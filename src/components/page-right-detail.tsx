export default function PageRightDetail({ label, content }) {
  // Function to safely replace /n with <br/> tags in a string
  const formatContent = (content) => {
    if (typeof content === "string") {
      return content.split("/n").map((item, index) => (
        <>
          {item}
          {index !== content.split("/n").length - 1 && <br />}
        </>
      ));
    }
    return content;
  };

  return (
    <div className=" px-5 flex  flex-col lg:flex-row w-full ">
      <p className="text-[.8rem] font-thin mb-1 basis-[15%]">{label}</p>
      <p className="font-normal text-black basis-[70%]">
        {/* Render the content with line breaks */}
        {formatContent(content)}
      </p>
    </div>
  );
}
