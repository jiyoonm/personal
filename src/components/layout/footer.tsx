import FooterLink from "../footer-link";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pt-16 pb-10 px-2">
      {/* <h2 className=" basis-2/5">
          <Link href="/">Jiyoon Moon</Link>
        </h2> */}
      <ul className="flex w-full text-lg justify-between ">
        <li>
          <Link href="/" className="hover:text-gray-300"></Link>
        </li>
        <div className="  flex gap-8">
          <li>
            <Link
              href="https://github.com/jiyoonm"
              className="hover:text-gray-300"
            >
              <p>GitHub</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/jiyoon-moon/"
              className="hover:text-gray-300"
            >
              <p>LinkedIn</p>
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
