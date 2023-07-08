import Image from "next/image";
import Link from "next/link";
export default function Grid({ GridData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-screen  border-t-2 ">
      {GridData.map((info, i) => {
        return (
          <Link
            key={i}
            href="/project/i"
            className="hover:text-primary hover:bg-black"
          >
            <div className="p-3 border-r-2  border-b-2 " key={i}>
              <Image
                alt="image"
                src={info.imgUrl}
                width={400}
                height={250}
                layout="responsive"
              />
              <div className="mx-5 my-2">
                <h3>{info.title}</h3>
                <p className=" w-full lg:w-3/4">{info.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
