import Link from "next/link";

export default function Header() {
  const iconSize = 22;
  const smIconSize = 16;

  return (
    <header className=" sticky top-0 z-50 bg-[#f0f0f0] ">
      <div className="border-t-grey  	 mx-auto flex w-full justify-between">
        {/* <h2 className=" basis-2/5">
          <Link href="/">Jiyoon Moon</Link>
        </h2> */}
        <ul className=" py-3  px-4 mt-auto   flex w-full justify-between text-lg border-b border-gray-600 ">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Jiyoon Moon
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-gray-300">
              Info
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
