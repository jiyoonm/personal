export default function PageHeaderDetail({ label, content }) {
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
    <div className=" flex flex-col align-middle h-max   ">
      <p className="text-[.7rem] font-thin mb-1">{label}</p>
      <p className=" font-normal text-black">
        {/* Render the content with line breaks */}
        {formatContent(content)}
      </p>
    </div>
  );
}
