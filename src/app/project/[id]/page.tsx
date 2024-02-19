import Image from "next/image";
import archiveInfo from "../../../dummy-data/archive-grid-info";
import PageHeaderDetail from "../../../components/page-header-detail";
import PageRightDetail from "../../../components/page-right-detail";
import PhotoGrid from "../../../components/photo-grid";
import ProjectList from "../../../components/project-list";
interface ArchiveDetail {
  id: string;
  title: string;
  year: number;
  tags: string[];
  imgFolder?: string;
  photoCount?: number;
  link: string;
  blurb: string;
  description: string;
  overview?: string;
}
export default function Detail({ params }: { params: { id: string } }) {
  const detail = archiveInfo.find((item) => item.id === params.id);

  if (!detail) {
    // Handle the case where the detail is not found
    return <div className="h-96">No project here!</div>;
  }
  console.log(detail);

  return (
    <div className="w-full ">
      <div className="pb-44">
        <div className=" flex-col lg:flex-row flex justify-between w-full  pt-10 py-10">
          <div className="flex flex-col gap-3  w-full lg:w-[45%] pr-15  justify-between">
            <div className="flex flex-col gap-3">
              <PageHeaderDetail label={"PROJECT"} content={detail.title} />
              <PageHeaderDetail
                label={"PROJECT DETAILS"}
                content={detail.description}
              />
            </div>
            <div className=" flex flex-row justify-between ">
              <PageHeaderDetail
                label={"WORK CATEGORY"}
                content={detail.tags.join(", ")}
              />
            </div>
          </div>

          {detail.mainImage && (
            <div className="relative  h-[15rem] lg:h-[30rem] lg:w-[48rem]">
              <Image
                src={detail.mainImage}
                alt="Main Image"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center    justify-between border-gray-400 border-y md:h-36">
          <div className="flex items-center basis-1/3  h-full m-2 md:m-0">
            <PageHeaderDetail label={"ROLE"} content={detail.role.join("/n")} />
          </div>
          <div className="md:border-l border-b border-gray-400  w-full md:h-full md:w-0"></div>
          <div className="flex items-center basis-[30%] h-full m-2 ">
            <PageHeaderDetail label={"YEAR"} content={detail.year} />
          </div>

          <div className="md:border-l border-b border-gray-400  w-full md:h-full md:w-0"></div>

          <div className="flex items-center basis-[28%]  h-full m-2 ">
            <PageHeaderDetail label={"TEAM"} content={detail.team} />
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle">
          {/* <div className="w-1/3">
          <PageHeaderDetail
            label={"PROJECT DETAILS"}
            content={detail.description}
          />
        </div> */}
          {detail.img && (
            <div className=" w-full lg:w-[64%] h-auto text-center mx-auto m-10">
              <Image
                src={detail.img}
                alt="Main Image"
                layout="responsive"
                width={100}
                height={50} // Adjust height proportionally
                objectFit="cover"
              />
            </div>
          )}
          <div className="w-full">
            <PageRightDetail
              label={"PROJECT DETAILS"}
              content={detail.description}
            />
          </div>
          <PhotoGrid
            grid={detail.grid}
            mainImage={detail.mainImage}
            finalImage={detail.finalImage}
            count={detail.photoCount}
          />
        </div>
        <div className="w-full">
          <PageRightDetail
            label={"PROJECT DETAILS"}
            content={detail.description}
          />
        </div>
        {/* {detail.sImg && (
        <div className=" w-full lg:w-[60%] h-auto text-center mx-auto m-10">
          <Image
            src={detail.sImg}
            alt="Main Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
        </div>
      )} */}
        {detail.sImg && (
          <div className=" w-full lg:w-[64%] h-auto text-center mx-auto m-10">
            <Image
              src={detail.sImg}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
        <div className="w-full">
          <PageRightDetail
            label={"PROJECT DETAILS"}
            content={detail.description}
          />
        </div>
        {detail.last && (
          <div className=" w-full lg:w-[68%] h-auto text-center mx-auto m-10">
            <Image
              src={detail.last}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
        {detail.mainImage && (
          <div className=" w-full lg:w-[65%] h-auto text-center mx-auto m-5">
            <Image
              src={detail.mainImage}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <div>
        {/* <h1 className="font-normal">Other Works</h1> */}
        <ProjectList />
      </div>
    </div>
  );
}
