import FooterLink from "../footer-link";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-gray-600 py-10 bg-stone-200 px-4">
      {/* <h2 className=" basis-2/5">
          <Link href="/">Jiyoon Moon</Link>
        </h2> */}
      <ul className="   flex w-full justify-between text-lg  ">
        <li>
          <Link href="/" className="hover:text-gray-300"></Link>
        </li>

        {/* <li>
            <Link href="/about" className="hover:text-gray-300">
              Info
            </Link>
          </li> */}
        <div className="  flex gap-12">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              LinkedIn
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
