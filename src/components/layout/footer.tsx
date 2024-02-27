import FooterLink from "../footer-link";
function Footer() {
  return (
    <footer className="border-t border-gray-600 bg-stone-200 py-10">
      {/* <div className="flex bg-stone-200 mx-auto w-11/12 justify-center pb-10 gap-x-20 ">
        <h2 className="lg:basis-2/6 text-right "></h2>
        <div className="lg:basis-3/6 grid grid-cols-2 gap-10">
          <FooterLink
            label={"Have any questions?"}
            sublabel={"General Inquiries"}
            link={"jiyoon@gmail"}
          />
   
        </div>
      </div> */}
      <h6 className="text-center">© {new Date().getFullYear()} Jiyoon Moon</h6>
    </footer>
  );
}

export default Footer;
