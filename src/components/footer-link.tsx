export default function FooterLink({ label, sublabel, link }) {
  return (
    <div className=" border-t-black border-t-[1px]">
      <p>{label}</p>
      <p>{sublabel}</p>
      <p>{link}</p>
    </div>
  );
}
