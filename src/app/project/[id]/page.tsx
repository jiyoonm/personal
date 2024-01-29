import Image from "next/image";
import archiveInfo from "../../../dummy-data/archive-grid-info";
import PageHeaderDetail from "../../../components/page-header-detail";
import PhotoGrid from "../../../components/photo-grid";
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
  const detail: ArchiveDetail | undefined = archiveInfo.find(
    (item) => item.id === params.id
  );

  if (!detail) {
    // Handle the case where the detail is not found
    return <div className="h-96">No project here!</div>;
  }
  console.log(detail);

  return (
    <div className="w-full ">
      <div className="flex justify-between w-full px-1 pt-10 pb-7">
        <div className="flex gap-14 w-3/6">
          <div className="mb-7 ">
            <PageHeaderDetail label={"PROJECT"} content={detail.title} />

            {/* <h1 className=" mb-5 font-semibold">{detail.title}</h1> */}
          </div>

          <div className=" flex flex-col justify-between mb-10">
            <PageHeaderDetail label={"DATE"} content={detail.year} />
            <PageHeaderDetail
              label={"WORK CATEGORY"}
              content={detail.tags.join(", ")}
            />
          </div>
        </div>
        <div className="w-4/6">
          <PageHeaderDetail
            label={"PROJECT DETAILS"}
            content={detail.description}
          />
        </div>
      </div>
      <div className="flex justify-center">
        {/* <div className="w-1/3">
          <PageHeaderDetail
            label={"PROJECT DETAILS"}
            content={detail.description}
          />
        </div> */}
        <PhotoGrid
          grid={detail.grid}
          mainImage={detail.mainImage}
          finalImage={detail.finalImage}
          count={detail.photoCount}
        />
      </div>
      {/* <div className="my-10 w-1/2 flex flex-col gap-10 justify-between">
        <div className="mb-5">
          <h3 className="mb-5">Overview</h3>
          <p>{detail.overview}</p>
        </div>
      </div> */}
    </div>
  );
}
