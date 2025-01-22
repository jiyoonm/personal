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
  role?: string[];
  technologies?: string[];
  imgFolder?: string;
  photoCount?: number;
  link: string;
  blurb: string;
  description: string;
  overview?: string;
  additional?: string;
}
export default function Detail({ params }: { params: { id: string } }) {
  const detail = archiveInfo.find((item) => item.id === params.id);

  if (!detail) {
    // Handle the case where the detail is not found
    return <div className="h-96">No project here!</div>;
  }
  console.log(detail);

  return (
    <div className="">
      <div className="pb-10 lg:pb-20 ">
        <div className=" flex-col lg:flex-row flex justify-between w-full  pt-10 py-10">
          <div className=" flex flex-col gap-3  w-full basis-2/5 pr-10  justify-between">
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

          {detail.imgUrl && (
            <div className="relative  h-[15rem] lg:h-[32rem] lg:w-[49rem] ">
              <Image
                src={detail.imgUrl}
                alt="Main Image"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center flex-grow   justify-between border-gray-600 border-y md:h-[10rem]">
          <div className=" md:px-5 flex items-center basis-1/3  h-full m-2 md:m-0">
            <PageHeaderDetail label={"ROLE"} content={detail.role.join("/n")} />
          </div>
          <div className="md:border-l border-b border-gray-600  w-full md:h-full md:w-0"></div>
          <div className="flex items-center basis-[30%] h-full m-2  ">
            <PageHeaderDetail label={"YEAR"} content={detail.year} />
          </div>

          <div className="md:border-l border-b border-gray-600  w-full md:h-full md:w-0"></div>

          <div className="flex items-center basis-[28%]  h-full m-2 ">
            {detail.team ? (
              <PageHeaderDetail label={"TEAM"} content={detail.team} />
            ) : (
              <PageHeaderDetail
                label={"TECHNOLOGIES"}
                content={detail.technologies?.join("/n")}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle">
          {detail.firstImage && (
            <div className=" w-full lg:w-[64%] h-auto text-center mx-auto m-10">
              <Image
                src={detail.firstImage}
                alt="Main Image"
                layout="responsive"
                width={100}
                height={50} // Adjust height proportionally
                objectFit="cover"
              />
            </div>
          )}
          {detail.concept && (
            <div className="w-full">
              <PageRightDetail label={"CONCEPT"} content={detail.concept} />
            </div>
          )}
          <PhotoGrid grid={detail.grid} />
        </div>
        {detail.process && (
          <div className="w-full mt-10">
            <PageRightDetail label={"PROCESS"} content={detail.process} />
          </div>
        )}

        {detail.secondImage && (
          <div className=" w-full lg:w-[64%] h-auto text-center mx-auto m-10">
            <Image
              src={detail.secondImage}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
        {detail.additional ? (
          <div className="w-full">
            <PageRightDetail
              label={"PROJECT DETAILS"}
              content={detail.additional}
            />
          </div>
        ) : (
          <></>
        )}
        {detail.thirdImage && (
          <div className=" w-full lg:w-[68%] h-auto text-center mx-auto m-10">
            <Image
              src={detail.thirdImage}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
        {detail.lastImage && (
          <div className=" w-full lg:w-[65%] h-auto text-center mx-auto m-5">
            <Image
              src={detail.lastImage}
              alt="Main Image"
              layout="responsive"
              width={100}
              height={50} // Adjust height proportionally
              objectFit="cover"
            />
          </div>
        )}
        {detail.finalImage && (
          <div className=" w-full lg:w-[65%] h-auto text-center mx-auto m-5">
            <Image
              src={detail.finalImage}
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
        <ProjectList id={detail.id} />
      </div>
    </div>
  );
}
