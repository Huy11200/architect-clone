export default function NavbarSocial() {
  return (
    <div className="fixed top-0 w-full bg-[#4d636f] text-white z-50 shadow-md">
      <div className="flex items-center h-12 max-w-7xl mx-auto">
        <a href="#" className="px-4 hover:bg-white hover:text-black hover:bg-opacity-20 h-full flex items-center transition-colors">
          <i className="fa fa-home text-xl mr-2"></i> Logo
        </a>
        <a href="#" className="hidden sm:flex px-4 hover:bg-gray-300 hover:text-black h-full items-center transition-colors"><i className="fa fa-globe text-xl"></i></a>
        <a href="#" className="hidden sm:flex px-4 hover:bg-gray-300 hover:text-black h-full items-center transition-colors"><i className="fa fa-user text-xl"></i></a>
        <a href="#" className="hidden sm:flex px-4 hover:bg-gray-300 hover:text-black h-full items-center transition-colors"><i className="fa fa-envelope text-xl"></i></a>
        <div className="hidden sm:flex px-4 hover:bg-gray-300 hover:text-black h-full items-center transition-colors relative cursor-pointer">
          <i className="fa fa-bell text-xl"></i>
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-1.5 rounded-full">3</span>
        </div>
        <div className="ml-auto pr-4 cursor-pointer">
          <img src="https://www.w3schools.com/w3images/avatar2.png" className="w-8 h-8 rounded-full" alt="Avatar" />
        </div>
      </div>
    </div>
  );
}