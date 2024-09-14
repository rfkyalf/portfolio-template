export default function Navbar() {
  return (
    <div className="px-20 py-10 fixed flex justify-between items-center w-full">
      <h1 className="text-neutral-50 text-[35px] font-bold">Jane.</h1>
      <nav className="flex items-center gap-x-8 text-neutral-50 text-lg font-medium">
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
      </nav>
    </div>
  );
}
