import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link href="/" className="tracking-[4px] font-bold text-black no-underline hover:text-gray-600">
        <span className="font-black">BR</span> Architects
      </Link>
      <div className="flex gap-6 font-medium">
        <Link href="#projects" className="hover:bg-gray-200 px-3 py-1 rounded transition">Projects</Link>
        <Link href="#about" className="hover:bg-gray-200 px-3 py-1 rounded transition">About</Link>
        <Link href="#contact" className="hover:bg-gray-200 px-3 py-1 rounded transition">Contact</Link>
      </div>
    </nav>
  );
}