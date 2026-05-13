import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#333333] px-6 py-4 flex justify-between items-center border-b border-[#555555] shadow-lg">
      <Link href="/" className="tracking-[4px] font-bold text-white no-underline hover:text-[#b3d9ff] transition">
        <span className="font-black text-lg">BR</span> Architects
      </Link>
      <div className="flex gap-8 font-medium">
        <Link href="#projects" className="text-white hover:text-[#b3d9ff] transition px-3 py-1">Projects</Link>
        <Link href="#about" className="text-white hover:text-[#b3d9ff] transition px-3 py-1">About</Link>
        <Link href="#contact" className="text-white hover:text-[#b3d9ff] transition px-3 py-1">Contact</Link>
      </div>
    </nav>
  );
}