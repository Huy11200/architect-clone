export default function RightSidebarSocial() {
  return (
    <div className="space-y-4 hidden md:block text-center text-gray-700">
      {/* Upcoming Events */}
      <div className="bg-white shadow-sm rounded-sm p-4">
        <p className="mb-4 text-sm">Upcoming Events:</p>
        <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" className="w-full h-auto mb-4 rounded-sm" />
        <p className="font-semibold text-sm">Holiday</p>
        <p className="text-gray-500 text-xs mb-4">Friday 15:00</p>
        <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-sm hover:bg-gray-300 transition-colors text-sm">Info</button>
      </div>

      {/* Friend Request */}
      <div className="bg-white shadow-sm rounded-sm p-4 text-center">
        <p className="mb-4 text-sm">Friend Request</p>
        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className="w-1/2 mx-auto rounded-full mb-4" />
        <span className="block mb-4 text-sm">Jane Doe</span>
        <div className="flex gap-2 justify-center">
          <button className="bg-green-500 text-white w-8 h-8 rounded hover:bg-green-400 transition-colors" title="Accept"><i className="fa fa-check"></i></button>
          <button className="bg-red-500 text-white w-8 h-8 rounded hover:bg-red-400 transition-colors" title="Decline"><i className="fa fa-remove"></i></button>
        </div>
      </div>

      {/* ADS */}
      <div className="bg-white shadow-sm rounded-sm p-4 py-8">
        <p className="text-sm">ADS</p>
      </div>
      
      {/* Bug */}
      <div className="bg-white shadow-sm rounded-sm p-4 py-8 text-3xl hover:bg-gray-200 transition-colors cursor-pointer">
        <i className="fa fa-bug"></i>
      </div>
    </div>
  );
}