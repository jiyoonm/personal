import Link from "next/link";

export default function Header() {
  const iconSize = 22;
  const smIconSize = 16;

  return (
    <header className="  ">
      <div className="border-t-grey  	 mx-auto flex w-full justify-between">
        {/* <h2 className=" basis-2/5">
          <Link href="/">Jiyoon Moon</Link>
        </h2> */}
        <ul className=" py-5  mt-auto   flex w-full lg:w-[40%] justify-between  text-[1.3rem]">
          <li>
            <Link href="/" className="hover:text-gray-300 ">
              Jiyoon Moon
            </Link>
          </li>

          {/* <li>
            Designer, <br />
            Creative Coder <br />
          </li> */}

          <div>
            <li></li>
            <Link href="/" className="hover:text-gray-300">
              Work
            </Link>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                Info
              </Link>
            </li>

            <li>
              <Link href="/play" className="hover:text-gray-300">
                Playground
              </Link>
            </li>
            <li></li>
          </div>
        </ul>
      </div>
    </header>
  );
}
