import Link from "next/link";

export default function Header() {
  const iconSize = 22;
  const smIconSize = 16;

  return (
    <header className="h-14  mt-6 ">
      <div className="border-t-grey  	pb-6  border-b-[1px] mx-auto flex w-[95%] justify-between">
        <h2 className=" basis-2/5">
          <Link href="/">Jiyoon Moon</Link>
        </h2>
        <ul className="flex basis-3/5 justify-end gap-10 px-10 mt-auto ">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Work &#8599;
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About &#8599;
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
